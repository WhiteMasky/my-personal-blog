const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// 获取所有文章
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();  // 获取所有文章
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 获取单篇文章
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ message: 'Invalid article ID format' });
    }
    res.status(500).json({ message: err.message });
  }
});

// 处理 POST 请求，创建新文章
router.post('/', async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // 创建文章对象
  const newArticle = new Article({
    title,
    content,
    author,
  });

  try {
    // 将新文章保存到数据库
    const savedArticle = await newArticle.save();
    // 返回新创建的文章数据
    res.status(201).json(savedArticle);
  } catch (error) {
    // 错误处理
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
