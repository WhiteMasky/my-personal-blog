// src/pages/Article.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // 从后端获取所有文章
    fetch('http://localhost:5000/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article._id}>
            <h2>
              <Link to={`/articles/${article._id}`}>{article.title}</Link>
            </h2>
            <p>{article.content.substring(0, 100)}...</p> {/* 文章摘要 */}
            <p><strong>Author:</strong> {article.author}</p>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default Article;
