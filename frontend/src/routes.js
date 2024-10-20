// src/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import ArticleDetail from './pages/ArticleDetail';  // 引入文章详情组件

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Article />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />  {/* 动态路由 */}
    </Routes>
  );
}

export default AppRoutes;
