import React from 'react';


import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("/api/articles")
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Latest Racing Content</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} className="border p-2 my-2">
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

