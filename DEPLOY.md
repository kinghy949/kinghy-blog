# 博客部署指南

本文档介绍如何将博客部署到云服务器或其他平台。

## 📋 部署前检查清单

### 1. 配置文件检查

- ✅ **base 路径配置**：已在 `docs/.vuepress/config.js` 中配置 `base: '/'`
  - 如果部署在子路径，需要修改为对应的路径，例如：`base: '/blog/'`
- ✅ **构建脚本**：`package.json` 中已有 `docs:build` 脚本

### 2. 构建输出目录

构建后的静态文件会输出到：`docs/.vuepress/dist/`

## 🚀 部署方案

### 方案一：云服务器 + Nginx（推荐）

#### 前置要求
- 云服务器（Linux系统，推荐 Ubuntu 20.04+）
- 已安装 Node.js（v18+）
- 已安装 Nginx

#### 部署步骤

1. **在本地构建项目**
   ```bash
   npm run docs:build
   ```

2. **上传文件到服务器**
   ```bash
   # 使用 scp 上传 dist 目录
   scp -r docs/.vuepress/dist/* root@your-server-ip:/var/www/blog/
   
   # 或使用 rsync（推荐）
   rsync -avz docs/.vuepress/dist/ root@your-server-ip:/var/www/blog/
   ```

3. **配置 Nginx**
   
   创建或编辑 `/etc/nginx/sites-available/blog`：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;  # 替换为你的域名
       
       root /var/www/blog;
       index index.html;
       
       location / {
           try_files $uri $uri/ $uri.html /index.html;
       }
       
       # 静态资源缓存
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
       
       # Gzip 压缩
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

   启用站点：
   ```bash
   ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/
   nginx -t  # 测试配置
   systemctl reload nginx  # 重新加载配置
   ```

4. **配置 HTTPS（可选但推荐）**
   
   使用 Let's Encrypt 免费证书：
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

#### 自动化部署脚本

创建 `deploy.sh` 脚本（见下方脚本文件）

---

### 方案二：GitHub Pages（免费）

#### 前置要求
- GitHub 账号
- 项目已推送到 GitHub

#### 部署步骤

1. **修改配置文件**
   
   如果部署在 GitHub Pages 的子路径（例如：`https://username.github.io/blog-kinghy/`），需要修改 `docs/.vuepress/config.js`：
   ```javascript
   base: '/blog-kinghy/',  // 替换为你的仓库名
   ```

2. **创建 GitHub Actions 工作流**
   
   创建 `.github/workflows/deploy.yml`（已创建，见下方）

3. **推送代码**
   ```bash
   git add .
   git commit -m "配置 GitHub Pages 部署"
   git push origin main
   ```

4. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择：`Deploy from a branch`
   - Branch 选择：`gh-pages`，路径：`/ (root)`
   - 点击 Save

---

### 方案三：Vercel（免费，推荐用于快速部署）

#### 前置要求
- Vercel 账号（可用 GitHub 账号登录）

#### 部署步骤

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **部署**
   ```bash
   vercel
   ```
   
   或通过网页：
   - 访问 https://vercel.com
   - 导入 GitHub 仓库
   - 构建命令：`npm run docs:build`
   - 输出目录：`docs/.vuepress/dist`
   - 部署

---

### 方案四：Netlify（免费）

#### 部署步骤

1. **访问 https://www.netlify.com**
2. **导入项目**
   - 连接 GitHub 仓库
   - 构建命令：`npm run docs:build`
   - 发布目录：`docs/.vuepress/dist`
3. **部署**

---

## 🔧 部署脚本

### 本地构建脚本

创建 `scripts/build.sh`：
```bash
#!/bin/bash
echo "开始构建博客..."
npm run docs:build
echo "构建完成！输出目录：docs/.vuepress/dist"
```

### 服务器部署脚本

创建 `scripts/deploy-server.sh`：
```bash
#!/bin/bash

# 配置变量
SERVER_USER="root"
SERVER_IP="your-server-ip"
SERVER_PATH="/var/www/blog"
LOCAL_DIST="docs/.vuepress/dist"

# 构建
echo "开始构建..."
npm run docs:build

# 上传
echo "上传文件到服务器..."
rsync -avz --delete $LOCAL_DIST/ $SERVER_USER@$SERVER_IP:$SERVER_PATH/

echo "部署完成！"
```

---

## 📝 注意事项

1. **base 路径**：根据部署位置调整 `base` 配置
2. **404 处理**：确保服务器配置了 SPA 路由回退
3. **静态资源**：确保图片等静态资源路径正确
4. **HTTPS**：生产环境建议使用 HTTPS
5. **CDN**：可考虑使用 CDN 加速静态资源

---

## 🔄 更新部署

每次更新内容后：

1. **本地构建**：`npm run docs:build`
2. **上传到服务器**：使用 rsync 或 scp
3. **重新加载 Nginx**：`systemctl reload nginx`

或使用自动化脚本（见上方部署脚本）

---

## 📞 常见问题

### Q: 部署后页面空白？
A: 检查 base 路径配置是否正确，确保静态资源路径正确。

### Q: 路由跳转 404？
A: 确保服务器配置了 SPA 路由回退（try_files）。

### Q: 图片不显示？
A: 检查图片路径，确保图片文件已上传到服务器。

---

**最后更新**: 2024-01-15
