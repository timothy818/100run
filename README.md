# 100_Run 健身追蹤器 PWA

## 檔案結構
```
fitness_pwa/
├── index.html        # 主應用程式（前端全部）
├── manifest.json     # PWA 設定（安裝至主畫面）
├── sw.js             # Service Worker（離線快取）
├── icons/
│   ├── icon-192.png  # App 圖示
│   └── icon-512.png  # App 圖示（大）
└── README.md
```

## 使用方式

### 方法 A — 直接開啟（本機）
雙擊 `index.html` 用瀏覽器開啟即可使用。
⚠️ 注意：直接開檔案時 PWA 安裝與 Service Worker 無法啟用。

### 方法 B — GitHub Pages（推薦，免費，iOS/Windows 皆可安裝）
1. 建立 GitHub 帳號（免費）：https://github.com
2. 新建 Repository → 命名為 `100run`
3. 上傳全部檔案
4. Settings → Pages → Branch: main → Save
5. 網址：`https://你的帳號.github.io/100run/`
6. iOS Safari 開啟 → 分享 → 加入主畫面
7. Windows Chrome 開啟 → 網址列右側安裝圖示

## Google Sheets 串接
1. 打開「100_Run」Google 試算表
2. 擴充功能 → Apps Script
3. 全選貼入 index.html 內 Sheets 分頁顯示的程式碼
4. 部署 → 網頁應用程式 → 執行者：我，存取：所有人
5. 複製 URL 貼入 App 的 Sheets 設定

## 功能清單
- 訓練記錄（距離、時間 hh:mm:ss.ms、配速自動計算）
- 平均/最大 心率、功率
- 有氧/無氧區間自動判定（Z1-Z5）
- 連續天數追蹤（不中斷累計）
- 26 週熱力圖
- 本週摘要統計
- 個人最佳 PR 自動計算
- 圖表趨勢（距離/配速/心率/功率/有氧無氧/體重）
- 體重記錄
- Google Sheets 即時同步
- CSV 匯出
- Excel (.xlsx) 匯出
- PWA 離線使用（iOS / Windows / Android）
