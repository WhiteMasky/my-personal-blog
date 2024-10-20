// src/pages/ArticleDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // 获取动态路由参数

function ArticleDetail() {
  const { id } = useParams();  // 获取文章的 ID
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // 根据文章 ID 从后端获取文章详情
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error('Error fetching article:', error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;  // 数据加载时显示加载提示
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleDetail;
