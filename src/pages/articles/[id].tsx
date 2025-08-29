import React from 'react';
import { useRouter } from 'next/router';

type TalkLine = {
  icon: string;
  name: string;
  text: string;
};
const articleData: Record<string, { title: string; content: TalkLine[] }> = {
  '1': {
    title: 'はじめての会話',
    content: [
      {
  icon: '/public/assets/tomoyan.svg',
        name: 'トモやん',
        text: 'ねえ、しらっち、最近気になることある？',
      },
      {
  icon: '/public/assets/shiracchi.svg',
        name: 'しらっち',
        text: 'うーん、昨日のカフェで見た新しいメニューかな。',
      },
    ],
  },
  '2': {
    title: 'カフェでの発見',
    content: [
      {
  icon: '/public/assets/tomoyan.svg',
        name: 'トモやん',
        text: 'あのカフェ、雰囲気よかったね！',
      },
      {
  icon: '/public/assets/shiracchi.svg',
        name: 'しらっち',
        text: 'うん、また行きたいな。',
      },
    ],
  },
};

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articleData[id as string];

  if (!article) return <div>記事が見つかりません。</div>;

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>{article.title}</h2>
      <div>
        {Array.isArray(article.content) && article.content.map((line, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
            <img src={line.icon} alt={line.name} width={40} height={40} />
            <span style={{ marginLeft: '1em' }}><b>{line.name}:</b> {line.text}</span>
          </div>
        ))}
      </div>
      <a href="/articles">記事一覧へ戻る</a>
    </main>
  );
};

export default ArticleDetail;
