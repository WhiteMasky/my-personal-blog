// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';  // 引入路由配置

function App() {
  return (
    <Router>
      <AppRoutes />  {/* 使用路由配置 */}
    </Router>
  );
}

export default App;
