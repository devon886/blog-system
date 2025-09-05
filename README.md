# 🚀 栖川闻鹤 - 现代化个人技术博客

一个基于Next.js 15构建的现代化全栈技术博客系统，专为开发者打造的优雅内容分享平台。

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## ✨ 核心功能

### 📖 内容管理
- **📝 文章系统**: 完整的CRUD操作，支持Markdown格式
- **🏷️ 分类标签**: 灵活的分类和标签系统
- **🔍 全文搜索**: 实时搜索和高级筛选
- **📊 阅读统计**: 实时浏览量和点赞统计

### 💬 社区互动
- **💬 评论系统**: 实时评论和回复功能
- **👍 点赞功能**: 文章点赞和取消点赞
- **📱 社交分享**: 一键分享到各大平台
- **🔔 通知系统**: 评论回复通知

### 🔐 用户管理
- **👤 用户认证**: 基于NextAuth.js的完整认证系统
- **🔑 权限控制**: 管理员和普通用户权限区分
- **👨‍💻 个人中心**: 用户信息管理和文章统计

### 🎨 用户体验
- **📱 响应式设计**: 完美适配移动端、平板和桌面
- **🌙 主题切换**: 支持浅色/深色主题
- **⚡ 高性能**: 基于Next.js 15和Turbopack优化
- **♿ 无障碍**: 符合WCAG 2.1标准

### 🛠️ 管理功能
- **🎛️ 管理后台**: 直观的Web管理界面
- **📊 数据分析**: 文章和访问数据统计
- **🖼️ 媒体管理**: 图片上传和管理
- **⚙️ 系统配置**: 网站基本信息配置

## 🛠️ 技术栈详解

### 核心技术
- **Next.js 15.5.2** - 全栈React框架，支持App Router
- **React 19.1.0** - 最新React版本，支持并发特性
- **TypeScript 5** - 完整的类型安全
- **Tailwind CSS 4** - 原子化CSS框架

### 数据层
- **Prisma ORM** - 类型安全的数据库工具
- **SQLite** - 轻量级关系型数据库
- **NextAuth.js** - 灵活的认证解决方案
- **bcryptjs** - 密码加密

### UI/UX
- **Framer Motion** - 流畅的动画效果
- **Headless UI** - 无障碍UI组件
- **Lucide React** - 现代化图标库
- **React Hook Form** - 表单处理

### 开发工具
- **ESLint** + **Prettier** - 代码质量保证
- **Prisma Studio** - 数据库可视化工具
- **Turbopack** - 超快的开发服务器
- **Playwright** - 端到端测试

## 🚀 快速开始

### 📋 环境要求
- **Node.js**: 18.17.0 或更高版本
- **npm**: 9.0.0 或更高版本
- **Git**: 用于版本控制

### 🔧 安装步骤

#### 1. 克隆项目
```bash
git clone https://github.com/yourusername/personal-blog.git
cd personal-blog
```

#### 2. 安装依赖
```bash
npm install
# 或者使用 yarn
yarn install
```

#### 3. 环境配置
创建 `.env.local` 文件：
```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件：
```env
# 数据库配置
DATABASE_URL="file:./dev.db"

# NextAuth配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# 邮件配置（可选）
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="your-email@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="noreply@yourblog.com"

# 站点配置
SITE_NAME="栖川闻鹤"
SITE_URL="http://localhost:3000"
AUTHOR_NAME="栖川闻鹤"
AUTHOR_EMAIL="minecraftlove1902@outlook.com"
```

#### 4. 数据库初始化
```bash
# 生成Prisma客户端
npx prisma generate

# 创建数据库表结构
npx prisma db push

# 初始化种子数据
npm run seed

# 启动数据库管理界面（可选）
npx prisma studio
```

#### 5. 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 🔑 默认账号

开发环境提供默认管理员账号：
- **邮箱**: `admin@example.com`
- **密码**: `admin123`

## 📁 项目结构

```
personal-blog/
├── prisma/
│   ├── schema.prisma          # 数据库模式定义
│   ├── seed.js               # 种子数据
│   └── dev.db               # SQLite数据库文件
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/             # API路由
│   │   ├── admin/           # 管理后台
│   │   ├── posts/           # 文章相关页面
│   │   ├── about/           # 关于页面
│   │   ├── contact/         # 联系页面
│   │   ├── privacy/         # 隐私政策
│   │   └── globals.css      # 全局样式
│   ├── components/          # React组件
│   │   ├── ui/             # 基础UI组件
│   │   ├── layout/         # 布局组件
│   │   └── posts/          # 文章相关组件
│   ├── lib/                # 工具库
│   │   ├── auth.ts         # 认证配置
│   │   ├── db.ts           # 数据库连接
│   │   └── utils.ts        # 工具函数
│   └── types/              # TypeScript类型定义
├── public/                 # 静态资源
│   ├── images/            # 图片资源
│   └── favicon.ico        # 网站图标
├── scripts/               # 构建脚本
├── .env.example          # 环境变量模板
├── next.config.ts        # Next.js配置
├── tailwind.config.ts    # Tailwind配置
├── tsconfig.json         # TypeScript配置
└── package.json          # 项目配置
```

## 🎯 使用指南

### 作为访客
- 浏览所有公开文章
- 查看文章详情和评论
- 使用搜索功能查找内容
- 按分类和标签筛选文章
- 点赞和评论文章
- 分享文章到社交媒体

### 作为管理员
- 访问 `/admin` 进入管理后台
- 创建、编辑、删除文章
- 管理文章分类和标签
- 审核评论和回复
- 查看网站访问统计
- 配置网站基本信息

### 文章管理
- **创建文章**: 支持Markdown格式，实时预览
- **编辑文章**: 富文本编辑器，支持代码高亮
- **发布文章**: 草稿和发布状态管理
- **SEO优化**: 自动生成meta标签和结构化数据

## 🛠️ 开发命令

```bash
# 开发服务器
npm run dev                 # 启动开发服务器
npm run dev:turbo          # 使用Turbopack加速

# 构建和部署
npm run build              # 构建生产版本
npm run start              # 启动生产服务器
npm run lint               # 代码检查
npm run type-check         # TypeScript类型检查

# 数据库操作
npm run db:push           # 推送数据库更改
npm run db:studio         # 启动Prisma Studio
npm run db:seed           # 初始化种子数据
npm run db:migrate        # 数据库迁移

# 测试
npm run test              # 运行测试
npm run test:e2e          # 端到端测试
```

## 🌐 部署指南

### Vercel部署（推荐）

1. **连接GitHub**
   - 登录 [Vercel](https://vercel.com)
   - 导入GitHub仓库

2. **配置环境变量**
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="https://your-blog.vercel.app"
   NEXTAUTH_SECRET="your-production-secret"
   ```

3. **自动部署**
   - 每次推送到main分支自动部署
   - 支持预览部署和回滚

### 其他部署选项

#### Docker部署
```bash
# 构建镜像
docker build -t personal-blog .

# 运行容器
docker run -p 3000:3000 personal-blog
```

#### 传统服务器部署
```bash
# 构建应用
npm run build

# 启动应用
npm run start
```

## 📄 API文档

### 文章API
```typescript
// 获取文章列表
GET /api/posts?page=1&limit=10&category=tech&tag=javascript

// 获取文章详情
GET /api/posts/:slug

// 创建文章（需要认证）
POST /api/posts
{
  "title": "文章标题",
  "content": "文章内容",
  "category": "技术",
  "tags": ["javascript", "react"]
}

// 更新文章（需要认证）
PUT /api/posts/:slug

// 删除文章（需要认证）
DELETE /api/posts/:slug
```

### 评论API
```typescript
// 获取文章评论
GET /api/comments?postSlug=article-slug

// 创建评论
POST /api/comments
{
  "postSlug": "article-slug",
  "content": "评论内容",
  "parentId": null // 回复评论时填写
}
```

### 认证API
```typescript
// 用户登录
POST /api/auth/signin
{
  "email": "user@example.com",
  "password": "password"
}

// 用户注册
POST /api/auth/signup
{
  "email": "user@example.com",
  "password": "password",
  "name": "用户名"
}
```

## 🎨 主题定制

### 颜色主题
在 `tailwind.config.ts` 中配置颜色：
```typescript
const colors = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### 布局定制
- 修改 `src/components/layout/` 下的组件
- 自定义 `src/app/globals.css` 样式
- 替换 `public/images/` 中的品牌图片

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献
1. Fork 这个项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 报告问题
- 使用 GitHub Issues 报告bug
- 提供详细的复现步骤
- 包含环境信息和错误日志

### 功能建议
- 在 Issues 中标记为 enhancement
- 描述清楚使用场景和预期行为
- 欢迎提供UI/UX设计稿

## 📊 性能优化

### 已实现的优化
- **图片优化**: 自动WebP格式，响应式图片
- **代码分割**: 按路由和组件分割
- **缓存策略**: ISR和客户端缓存
- **CDN**: 静态资源CDN加速
- **压缩**: Gzip和Brotli压缩

### 监控指标
- **Lighthouse得分**: 90+ (性能、可访问性、SEO)
- **首屏加载**: < 2秒
- **交互时间**: < 100ms

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 优秀的React框架
- [Tailwind CSS](https://tailwindcss.com/) - 实用的CSS框架
- [Prisma](https://www.prisma.io/) - 出色的ORM工具
- [Vercel](https://vercel.com/) - 优秀的部署平台

## 📞 联系方式

- **项目维护**: 栖川闻鹤
- **邮箱**: minecraftlove1902@outlook.com
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **抖音**: [抖音主页](https://www.douyin.com/user/self?from_tab_name=main)

---

<div align="center">
  <p>⭐ 如果这个项目对你有帮助，请给个星标支持一下！</p>
  <p><sub>Built with ❤️ by 栖川闻鹤</sub></p>
</div>
