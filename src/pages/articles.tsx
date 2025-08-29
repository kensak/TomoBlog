import React from 'react';

const articles = [
  { id: 1, title: 'はじめての会話', summary: 'トモやんとしらっちの最初の会話。' },
  { id: 2, title: 'カフェでの発見', summary: 'カフェで見つけた面白いこと。' },
];

const Articles = () => (
  <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
    <h2>記事一覧</h2>
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <a href={`/articles/${article.id}`}>{article.title}</a>
          <p>{article.summary}</p>
        </li>
      ))}
    </ul>
    <a href="/">トップへ戻る</a>
  </main>
);

export default Articles;
