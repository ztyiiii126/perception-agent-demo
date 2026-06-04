(function () {
  function setImportant(element, styles) {
    if (!element) return;
    Object.entries(styles).forEach(([name, value]) => {
      element.style.setProperty(name, value, "important");
    });
  }

  function lockSidebar() {
    const app = document.querySelector(".app");
    const sidebar = document.querySelector(".sidebar");
    if (!app || !sidebar) return;

    app.classList.remove("sidebar-collapsed");
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
      gap: "8px",
      "margin-top": "12px",
    });

    setImportant(document.querySelector(".task-stack"), {
      gap: "4px",
    });

    setImportant(document.querySelector(".section-title"), {
      "font-size": "14px",
      "font-weight": "760",
      "line-height": "1.25",
      padding: "0 10px 2px",
    });

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
})();
