# Advanced Charts: Connecting data via the Datafeed API

> __Note__
>
> This repository contains sample code for a tutorial on connecting data via the Datafeed API.
> You can find the full step-by-step guide in the [Advanced Charts documentation].

## What is Advanced Charts

Advanced Charts is a standalone solution that you can download, host on your servers, connect your own data to,
and use in your site or app for free.
Learn more about Advanced Charts on the [TradingView website].

## What is This Tutorial About

This tutorial explains how to implement real-time data streaming to Advanced Charts step-by-step using the Datafeed API.
As an example, the tutorial describes connection via free CryptoCompare API that provides data from different crypto exchanges.

[Advanced Charts documentation]: https://www.tradingview.com/charting-library-docs/latest/tutorials/implement_datafeed_tutorial/
[TradingView website]: https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?feature=technical-analysis-charts


## 部署

### 环境要求
- Node.js (建议版本 14.0.0 或更高)
- npm (Node.js 包管理器)

### 部署步骤

1. 克隆项目
```bash
git clone https://github.com/tradingview/charting-library-tutorial.git
cd charting-library-tutorial
```

2. 安装依赖
```bash
npm install
```

3. 启动服务器
```bash
npm start
```

4. 访问应用
打开浏览器访问 `http://localhost:3000`

### 注意事项
- 确保已安装 Node.js 和 npm
- 如果遇到端口占用问题，可以在 `server.js` 中修改端口号
- 项目使用了 CryptoCompare API，如需使用其他数据源，请相应修改 `src/datafeed.js` 文件
