(function () {
  function setImportant(element, styles) {
    if (!element) return;
    Object.entries(styles).forEach(([name, value]) => {
      element.style.setProperty(name, value, "important");
    });
  }

  function clearStyles(element, names) {
    if (!element) return;
    names.forEach((name) => element.style.removeProperty(name));
  }

  function simplifySidebar() {
    const removedLabels = new Set(["Agent", "Skill", "工具集", "知识库"]);
    const primaryMenu = document.querySelector(".primary-menu");
    const tasks = document.querySelector(".tasks");
    document.querySelectorAll(".primary-menu-button").forEach((button) => {
      const label = button.querySelector(".primary-label")?.textContent.trim() || button.textContent.trim();
      if (removedLabels.has(label)) {
        button.hidden = true;
        setImportant(button, { display: "none" });
      }
    });
    document.querySelectorAll(".agent-nav, .task-stack").forEach((element) => {
      element.hidden = true;
      setImportant(element, { display: "none" });
    });
    const taskListLink = document.querySelector(".section-title");
    if (taskListLink) {
      taskListLink.innerHTML = `
        <svg class="primary-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 6h12M8 12h12M8 18h12" />
          <path d="M4 6h.01M4 12h.01M4 18h.01" />
        </svg>
        <span class="primary-label">感知任务列表</span>
      `;
    }
    if (primaryMenu && tasks && tasks.parentElement !== primaryMenu) {
      primaryMenu.appendChild(tasks);
    }
    if (tasks) {
      tasks.hidden = false;
      setImportant(tasks, { display: "flex" });
    }
  }

  function lockSidebar() {
    const app = document.querySelector(".app");
    const sidebar = document.querySelector(".sidebar");
    if (!app || !sidebar) return;

    simplifySidebar();
    app.classList.remove("sidebar-collapsed");
    if (window.matchMedia("(max-width: 760px)").matches) {
      clearStyles(app, ["display", "grid-template-columns", "min-height"]);
      clearStyles(sidebar, [
        "position", "top", "display", "flex-direction", "gap", "width",
        "min-width", "max-width", "height", "padding", "overflow",
      ]);
      document.querySelectorAll(
        ".brand, .new-task, .primary-menu-button, .nav-button, .tasks, .task-stack, .section-title, .task-item, .task-name",
      ).forEach((element) => element.removeAttribute("style"));
      simplifySidebar();
      return;
    }

    setImportant(app, {
      display: "grid",
      "grid-template-columns": "282px minmax(0, 1fr)",
      "min-height": "100vh",
    });

    setImportant(sidebar, {
      position: "sticky",
      top: "0",
      display: "flex",
      "flex-direction": "column",
      gap: "22px",
      width: "282px",
      "min-width": "282px",
      "max-width": "282px",
      height: "100vh",
      padding: "22px 16px",
      overflow: "hidden",
    });

    setImportant(document.querySelector(".brand"), {
      "font-size": "22px",
      "line-height": "1.15",
      "white-space": "nowrap",
    });

    setImportant(document.querySelector(".new-task"), {
      width: "100%",
      height: "46px",
      "min-height": "46px",
      "font-size": "15px",
      "font-weight": "680",
      "line-height": "1",
      "white-space": "nowrap",
    });

    document.querySelectorAll(".primary-menu-button").forEach((item) => {
      setImportant(item, {
        "min-height": "40px",
        padding: "0 12px",
        "font-size": "15px",
        "font-weight": "760",
      });
    });

    document.querySelectorAll(".nav-button").forEach((item) => {
      setImportant(item, {
        "min-height": "36px",
        padding: "0 10px",
        "font-size": "14px",
        "font-weight": "680",
      });
    });

    setImportant(document.querySelector(".tasks"), {
      flex: "0 0 auto",
      gap: "0",
      "margin-top": "0",
    });

    setImportant(document.querySelector(".section-title"), {
      display: "flex",
      "align-items": "center",
      gap: "10px",
      width: "100%",
      "min-height": "40px",
      "font-size": "15px",
      "font-weight": "760",
      "line-height": "1",
      padding: "0 12px",
      "border-radius": "12px",
      color: "#4c5563",
      "white-space": "nowrap",
    });

    const taskListLink = document.querySelector(".section-title");
    if (taskListLink && (
      location.pathname.endsWith("task-list.html") ||
      location.pathname.endsWith("task.html") ||
      location.pathname.endsWith("task-fresh.html") ||
      location.pathname.endsWith("task-host.html") ||
      location.pathname.endsWith("task-complete.html")
    )) {
      setImportant(taskListLink, {
        background: "rgba(255, 255, 255, 0.72)",
        color: "#20242a",
      });
    }

    document.querySelectorAll(".task-item").forEach((item) => {
      setImportant(item, {
        "min-height": "38px",
        padding: "8px 10px",
        "font-size": "14px",
        "font-weight": "650",
      });
    });

    document.querySelectorAll(".task-name").forEach((item) => {
      setImportant(item, {
        "font-size": "14px",
        "font-weight": "650",
        "line-height": "1.3",
        "white-space": "nowrap",
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", lockSidebar);
  } else {
    lockSidebar();
  }
  window.addEventListener("resize", lockSidebar);
})();
