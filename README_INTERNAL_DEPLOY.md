# 感知Agent 内部演示发布说明

## 发布方式

这是一个纯静态演示项目，可以直接发布到公司内部静态资源平台、对象存储或内部 CDN。

## 入口页面

入口文件：

```text
index.html
```

发布后访问根路径即可进入巡检捉虫 Agent 创建页。

## 上传文件

需要上传当前目录下的所有 HTML 文件：

```text
index.html
new-task.html
agent-management.html
skill.html
tools.html
knowledge.html
task-list.html
task.html
task-complete.html
opinion.html
opinion-task.html
feishu-assistant.html
```

页面之间使用相对路径跳转，保持这些文件在同一目录即可。

## 推荐发布步骤

1. 在公司内部静态资源平台创建一个站点，例如 `perception-agent-demo`。
2. 上传项目文件，或上传打包后的 `perception-agent-demo.zip`。
3. 设置默认首页为 `index.html`。
4. 发布后复制平台生成的内部访问链接。
5. 将链接发给团队成员访问。

## 注意事项

- 这是演示原型，没有后端接口依赖。
- 所有数据均为页面内模拟数据。
- 如果内部平台要求目录名固定，保持所有 HTML 文件在同一级目录即可。
