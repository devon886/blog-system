# 🚀 博客部署指南

## 部署方案对比

| 方案 | 难度 | 特点 | 推荐度 |
|---|---|---|---|
| [Vercel](#vercel部署) | ⭐ | 一键部署，自动HTTPS | ⭐⭐⭐⭐⭐ |
| [Netlify](#netlify部署) | ⭐⭐ | 拖拽部署，免费域名 | ⭐⭐⭐⭐ |
| [GitHub Pages](#github-pages部署) | ⭐⭐⭐ | 免费，需配置 | ⭐⭐⭐ |
| [阿里云/腾讯云](#云服务器部署) | ⭐⭐⭐⭐ | 完全控制，需配置服务器 | ⭐⭐ |

---

## Vercel部署（推荐）

### 步骤1：安装Vercel CLI
```bash
npm i -g vercel
```

### 步骤2：登录并部署
```bash
# 在项目根目录执行
vercel --prod
```

### 步骤3：自定义域名（可选）
1. 登录 [vercel.com](https://vercel.com)
2. 选择你的项目
3. 在 Settings > Domains 中添加自定义域名

---

## Netlify部署

### 步骤1：构建项目
```bash
npm run build
```

### 步骤2：上传部署
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽 `.next` 文件夹到部署区域
3. 或使用 CLI：
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

---

## GitHub Pages部署

### 步骤1：配置Next.js输出
修改 `next.config.ts`：

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
```

### 步骤2：创建GitHub仓库
```bash
# 初始化git（如果还没做）
git init
git add .
git commit -m "Initial commit"

# 推送到GitHub
git remote add origin https://github.com/yourusername/your-blog.git
git push -u origin master
```

### 步骤3：GitHub Actions自动部署
创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

---

## 云服务器部署

### 步骤1：购买域名和服务器
- 阿里云、腾讯云、华为云等
- 推荐配置：1核2G，CentOS 7/8

### 步骤2：服务器配置
```bash
# 安装Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 安装PM2进程管理器
npm i -g pm2
```

### 步骤3：部署应用
```bash
# 克隆代码
git clone https://github.com/yourusername/your-blog.git
cd your-blog

# 安装依赖
npm install

# 构建
npm run build

# 启动应用
pm2 start npm --name "blog" -- start

# 设置开机启动
pm2 startup
pm2 save
```

### 步骤4：配置Nginx反向代理
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 部署前检查清单

### ✅ 项目配置
- [ ] 检查 `next.config.ts` 配置
- [ ] 确认所有图片路径正确
- [ ] 检查环境变量设置
- [ ] 确认构建成功：`npm run build`

### ✅ 域名和HTTPS
- [ ] 购买域名（可选）
- [ ] 配置SSL证书（Let's Encrypt免费证书）
- [ ] 设置CDN加速（可选）

### ✅ 性能优化
- [ ] 图片压缩优化
- [ ] 启用Gzip压缩
- [ ] 配置缓存策略

---

## 常见问题解决

### 1. 构建失败
```bash
# 清除缓存
rm -rf .next
npm run build
```

### 2. 图片不显示
- 检查 `public/images/` 目录是否存在
- 确认图片文件名与代码中一致

### 3. 路由404
- 检查 `next.config.ts` 的 `trailingSlash` 设置
- 确认所有路由文件存在

---

## 监控和维护

### 网站监控
- [ ] Google Analytics
- [ ] 百度统计
- [ ] 性能监控（Lighthouse）

### 定期维护
- [ ] 更新依赖包
- [ ] 备份数据
- [ ] 监控网站性能

---

## 联系方式

如果遇到部署问题，可以：
1. 查看项目 `README.md`
2. 提交GitHub Issue
3. 联系技术支持

**祝你部署成功！** 🎉