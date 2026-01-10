# 快速部署指南

## 🚀 云服务器部署（5分钟快速上手）

### 前提条件
- ✅ 云服务器（Linux，推荐 Ubuntu）
- ✅ 服务器已安装 Node.js 和 Nginx
- ✅ 本地已配置 SSH 密钥

### 快速步骤

#### 1. 修改部署脚本配置

编辑 `scripts/deploy-server.sh`，修改以下变量：

```bash
SERVER_USER="root"              # 服务器用户名
SERVER_IP="your-server-ip"     # 你的服务器IP或域名
SERVER_PATH="/var/www/blog"    # 服务器部署路径
```

#### 2. 配置 Nginx

```bash
# 复制配置文件到服务器
scp nginx.conf.example root@your-server-ip:/etc/nginx/sites-available/blog

# SSH 登录服务器
ssh root@your-server-ip

# 编辑配置文件，修改域名
nano /etc/nginx/sites-available/blog
# 将 your-domain.com 替换为你的域名

# 启用站点
ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/
nginx -t  # 测试配置
systemctl reload nginx
```

#### 3. 执行部署

```bash
# 在本地项目目录执行
./scripts/deploy-server.sh
```

#### 4. 配置 HTTPS（可选）

```bash
# SSH 登录服务器
ssh root@your-server-ip

# 安装 Certbot
apt install certbot python3-certbot-nginx

# 申请证书
certbot --nginx -d your-domain.com
```

---

## 📦 手动部署步骤

如果自动脚本不可用，可以手动部署：

### 1. 本地构建

```bash
npm install
npm run docs:build
```

### 2. 上传文件

```bash
# 使用 scp
scp -r docs/.vuepress/dist/* root@your-server-ip:/var/www/blog/

# 或使用 rsync（推荐）
rsync -avz docs/.vuepress/dist/ root@your-server-ip:/var/www/blog/
```

### 3. 设置权限

```bash
ssh root@your-server-ip
chown -R www-data:www-data /var/www/blog
systemctl reload nginx
```

---

## 🌐 GitHub Pages 部署（免费）

### 快速步骤

1. **修改 base 路径**（如果仓库名不是 `kinghy-blog`）
   
   编辑 `docs/.vuepress/config.js`：
   ```javascript
   base: '/your-repo-name/' // 替换为你的仓库名
   ```

2. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "配置部署"
   git push origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`，路径: `/ (root)`
   - Save

4. **等待部署完成**
   - GitHub Actions 会自动构建和部署
   - 访问：`https://your-username.github.io/your-repo-name/`

---

## ⚡ Vercel 部署（最快）

### 快速步骤

1. **访问 https://vercel.com**
2. **使用 GitHub 登录**
3. **导入项目**
   - 选择你的仓库
   - Framework Preset: `Other`
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vuepress/dist`
4. **Deploy**

---

## 🔍 部署检查清单

部署前确认：

- [ ] `base` 路径配置正确
- [ ] 已执行 `npm run docs:build` 构建成功
- [ ] 服务器 Nginx 配置正确
- [ ] 防火墙端口已开放（80/443）
- [ ] DNS 解析已配置（如果使用域名）

---

## ❓ 常见问题

### 页面空白？
- 检查 `base` 路径是否正确
- 检查浏览器控制台错误信息

### 404 错误？
- 确保 Nginx 配置了 `try_files` 规则
- 检查路由路径是否正确

### 图片不显示？
- 检查图片文件是否已上传
- 检查图片路径是否正确

---

**需要帮助？** 查看详细文档：`DEPLOY.md`
