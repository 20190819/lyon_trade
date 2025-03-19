const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// 启用 CORS
app.use(cors());

// 提供静态文件服务
app.use(express.static(path.join(__dirname)));

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 