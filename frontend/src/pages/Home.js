import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Card } from 'antd';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Articles</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={articles}
        renderItem={article => (
          <List.Item>
            <Card title={article.title}>
              <p>{article.content}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
