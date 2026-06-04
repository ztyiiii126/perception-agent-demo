# 感知Agent Vercel 发布方案

## 方案

这是一个纯静态 HTML 原型，不需要构建命令。把整个目录上传到 Vercel 即可发布。

入口页面：

```text
index.html
```

## 方式一：网页上传

1. 打开 Vercel。
2. 新建 Project。
3. 选择导入 Git 仓库，或直接上传当前目录。
4. Framework Preset 选择 `Other`。
5. Build Command 留空。
6. Output Directory 留空或使用默认值。
7. 点击 Deploy。

发布后入口类似：

```text
https://your-project.vercel.app/index.html
```

如果 Vercel 自动把根路径指到 `index.html`，也可以直接访问：

```text
https://your-project.vercel.app/
```

## 方式二：命令行发布

在当前目录执行：

```bash
npx vercel
```

首次发布按提示选择：

```text
Set up and deploy? yes
Which scope? 选择你的团队或个人账号
Link to existing project? no
Project name? perception-agent-demo
In which directory is your code located? ./
Want to modify settings? no
```

正式生产发布：

```bash
npx vercel --prod
```

## 已包含配置

项目包含：

```text
vercel.json
```

作用：

- 保留现有 `.html` 页面路径。
- HTML 文件不做长期缓存，方便你更新后团队能看到最新版。

## 注意

- 页面数据都是静态模拟数据。
- 页面之间使用相对路径跳转，需要所有 HTML 文件保持在同一目录。
- 如果要限制访问范围，可以在 Vercel 项目里开启团队权限或密码保护。
