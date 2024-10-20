const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression()); // 启用 Gzip 压缩

const PORT = process.env.PORT || 5000;

// // 连接 MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// const mongoose = require('mongoose');
require('dotenv').config();  // 加载 .env 文件中的环境变量

const MONGO_URI = process.env.MONGO_URI;

// 连接 MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));


// 测试路由
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// 引入文章路由
const articleRoutes = require('./routes/articleRoutes');
app.use('/api/articles', articleRoutes);

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


