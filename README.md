# Parse Server 開發環境設定

這個專案提供了一個完整的 Parse Server 開發環境，使用 Docker Compose 來管理所有必要的服務。

## 系統需求

- Docker
- Docker Compose

## 包含的服務

- MongoDB：資料庫服務
- Parse Server：後端 API 服務
- Parse Dashboard：管理介面

## 快速開始

1. 啟動所有服務：
```bash
docker compose up -d
```

2. 服務存取位址：
   - Parse Server: http://localhost:1337/parse
   - Parse Dashboard: http://localhost:4040

3. Parse Dashboard 登入資訊：
   - 帳號：admin
   - 密碼：admin

## 環境設定說明

### Parse Server
- Application ID: yourAppId
- Master Key: yourMasterKey
- 資料庫：MongoDB
- 允許的 Master Key IP: 0.0.0.0/0

### Parse Dashboard
- 已設定允許 HTTP 存取
- 使用統一的設定檔管理應用程式和使用者

## 注意事項

1. 這是開發環境設定，不建議直接用於生產環境
2. 生產環境請務必：
   - 更改所有預設密碼
   - 設定 HTTPS
   - 限制 Master Key 的存取範圍
   - 加強資料庫安全性設定

## 常見問題排解

1. 如果無法存取 Parse Dashboard：
   - 確認所有容器都在運行中：`docker compose ps`
   - 檢查容器日誌：`docker logs parse-dashboard`
   - 確認防火牆設定允許存取相關端口

2. 如果需要重置環境：
```bash
docker compose down -v  # 這會清除所有資料
docker compose up -d    # 重新啟動服務
```