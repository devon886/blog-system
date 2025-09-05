# 🚀 部署指南

这份指南将帮助你快速部署栖川闻鹤博客系统到生产环境。

## 📋 部署前检查清单

- [ ] 已完成本地开发和测试
- [ ] 已配置生产环境变量
- [ ] 已创建GitHub仓库
- [ ] 已准备好域名（可选）

## 🌐 Vercel部署（推荐）

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/personal-blog)

### 手动部署步骤

1. **准备工作**
   ```bash
   # 确保项目已推送到GitHub
   git remote add origin https://github.com/yourusername/personal-blog.git
   git push -u origin main
   ```

2. **Vercel配置**
   - 登录 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 导入GitHub仓库

3. **环境变量配置**
   在Vercel项目设置中添加：
   ```env
   DATABASE_URL="file:./vercel.db"
   NEXTAUTH_URL="https://your-domain.vercel.app"
   NEXTAUTH_SECRET="your-32-char-secret-key"
   SITE_NAME="你的博客名称"
   AUTHOR_EMAIL="your-email@example.com"
   ```

4. **构建配置**
   - 构建命令: `npm run build`
   - 输出目录: `.next`
   - 开发命令: `npm run dev`

## 🐳 Docker部署

### 构建Docker镜像

1. **创建Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

2. **构建和运行**
   ```bash
   docker build -t personal-blog .
   docker run -p 3000:3000 -e DATABASE_URL="file:./data.db" personal-blog
   ```

## ☁️ 其他云平台

### Netlify部署

1. **连接GitHub**
   - 登录 [netlify.com](https://netlify.com)
   - 导入GitHub仓库

2. **构建设置**
   - 构建命令: `npm run build`
   - 发布目录: `.next`

3. **环境变量**
   在Netlify环境变量设置中添加与Vercel相同的变量

### Railway部署

1. **一键部署**
   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/yourusername/personal-blog)

2. **手动部署**
   ```bash
   railway login
   railway init
   railway up
   ```

## 🔧 生产环境配置

### 必要环境变量

```bash
# 数据库（生产环境建议使用PostgreSQL）
DATABASE_URL="postgresql://user:password@localhost:5432/blog"

# NextAuth
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="openssl rand -base64 32生成的密钥"

# 站点信息
SITE_NAME="你的博客名称"
SITE_URL="https://yourdomain.com"
AUTHOR_NAME="作者名称"
AUTHOR_EMAIL="your-email@example.com"
```

### 数据库迁移

对于生产环境，建议从SQLite切换到PostgreSQL：

1. **安装PostgreSQL**
   ```bash
   # macOS
   brew install postgresql
   
   # Ubuntu
   sudo apt install postgresql postgresql-contrib
   ```

2. **更新数据库连接**
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/blogdb"
   ```

3. **迁移数据**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

## 🌐 自定义域名

### Vercel自定义域名

1. **添加域名**
   - 进入Vercel项目设置
   - 添加自定义域名
   - 按照提示配置DNS

2. **SSL证书**
   - Vercel自动提供SSL证书
   - 无需额外配置

### 传统服务器域名配置

1. **Nginx配置**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl;
       server_name yourdomain.com;

       ssl_certificate /path/to/cert.pem;
       ssl_certificate_key /path/to/key.pem;

       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

2. **申请SSL证书**
   ```bash
   # 使用Let's Encrypt
   sudo certbot --nginx -d yourdomain.com
   ```

## 📊 性能优化

### 生产环境优化

1. **图片优化**
   - 使用Next.js Image组件
   - 配置CDN加速
   - 启用WebP格式

2. **缓存策略**
   ```javascript
   // next.config.js
   module.exports = {
     images: {
       domains: ['your-cdn.com'],
     },
   }
   ```

3. **CDN配置**
   - 推荐使用Cloudflare
   - 配置静态资源缓存
   - 启用压缩和优化

## 🔍 监控和日志

### 基础监控

1. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Google Analytics**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **错误监控**
   - 推荐使用Sentry
   - 配置错误报告

## 🚨 常见问题

### 部署失败排查

1. **检查构建日志**
   ```bash
   npm run build
   ```

2. **验证环境变量**
   ```bash
   npx prisma validate
   ```

3. **数据库连接问题**
   - 检查数据库URL格式
   - 验证数据库权限
   - 检查防火墙设置

### 性能问题

1. **首屏加载慢**
   - 检查图片大小
   - 优化第三方脚本
   - 启用压缩

2. **内存泄漏**
   - 检查组件卸载
   - 优化状态管理
   - 使用内存分析工具

## 📞 技术支持

遇到问题？请通过以下方式获取帮助：

1. **GitHub Issues**: [创建Issue](https://github.com/yourusername/personal-blog/issues)
2. **文档**: 查看 [README.md](README.md)
3. **邮件**: minecraftlove1902@outlook.com

## 🔄 持续部署

### GitHub Actions

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

---

**下一步**: 完成部署后，记得更新README.md中的部署状态徽章！