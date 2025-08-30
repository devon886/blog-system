# 个人技术博客

一个基于Next.js 15、TypeScript和Tailwind CSS构建的现代化个人技术博客系统。

## 🚀 功能特性

- **现代化技术栈**：Next.js 15 + TypeScript + Tailwind CSS
- **响应式设计**：完美适配桌面、平板和手机
- **快速加载**：基于Next.js App Router和Turbopack
- **SEO优化**：内置meta标签和结构化数据
- **组件化开发**：可复用的React组件
- **动画效果**：使用Framer Motion实现流畅动画

## 🛠️ 技术栈

- **前端框架**：Next.js 15 (App Router)
- **语言**：TypeScript
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **图标**：Heroicons
- **代码高亮**：Prism.js
- **构建工具**：Turbopack

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React组件
│   ├── layout/           # 布局组件
│   │   ├── Header.tsx    # 头部导航
│   │   ├── Footer.tsx    # 页脚
│   │   └── Layout.tsx    # 页面布局
│   ├── blog/             # 博客相关组件
│   │   ├── BlogCard.tsx  # 文章卡片
│   │   ├── TagCloud.tsx  # 标签云
│   │   └── AuthorBio.tsx # 作者简介
│   └── ui/               # UI组件
├── data/                 # 模拟数据
│   └── mockData.ts      # 文章、分类、标签数据
├── types/                # TypeScript类型定义
│   └── blog.ts          # 博客相关类型
└── utils/                # 工具函数
```

## 🎨 设计特色

### 首页布局
- 英雄区域展示个人介绍
- 最新文章网格布局
- 热门文章推荐
- 侧边栏包含作者信息、分类导航和标签云

### 文章展示
- 卡片式设计，包含封面图、标题、摘要
- 悬停动画效果
- 阅读时间、浏览量等元信息
- 响应式网格布局

### 交互体验
- 流畅的页面切换动画
- 标签筛选功能
- 响应式导航菜单
- 移动端友好的触摸操作

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 🌟 页面预览

- **首页**：`http://localhost:3000` - 展示最新文章和个人介绍
- **文章详情**：动态路由展示完整文章内容
- **分类页面**：按分类筛选文章
- **标签页面**：按标签筛选文章

## 📱 响应式设计

- **桌面端**：1200px+，三列网格布局
- **平板端**：768px-1199px，双列网格布局
- **手机端**：<768px，单列布局，优化触摸体验

## 🎯 性能优化

- **图片优化**：使用Next.js Image组件自动优化
- **代码分割**：基于路由的代码分割
- **懒加载**：图片和组件的懒加载
- **缓存策略**：合理的缓存配置

## 🔧 开发规范

- **代码风格**：ESLint + Prettier
- **提交规范**：Conventional Commits
- **组件规范**：函数组件 + TypeScript
- **样式规范**：Tailwind CSS原子类

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

---

**作者**：张小明  
**邮箱**：zhang@example.com  
**GitHub**：https://github.com/zhangxiaoming
