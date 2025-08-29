import React from 'react';
import { useRouter } from 'next/router';

const articleData: Record<string, { title: string; content: string }> = {
  '1': {
    title: 'はじめての会話',
    content: `
      <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/assets/tomoyan.svg" alt="トモやん" width="40" />
        <span style={{ marginLeft: '1em' }}><b>トモやん:</b> ねえ、しらっち、最近気になることある？</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/assets/shiracchi.svg" alt="しらっち" width="40" />
        <span style={{ marginLeft: '1em' }}><b>しらっち:</b> うーん、昨日のカフェで見た新しいメニューかな。</span>
      </div>
    `,
  },
  '2': {
    title: 'カフェでの発見',
    content: `
      <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/assets/tomoyan.svg" alt="トモやん" width="40" />
        <span style={{ marginLeft: '1em' }}><b>トモやん:</b> あのカフェ、雰囲気よかったね！</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="/assets/shiracchi.svg" alt="しらっち" width="40" />
        <span style={{ marginLeft: '1em' }}><b>しらっち:</b> うん、また行きたいな。</span>
      </div>
    `,
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
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <a href="/articles">記事一覧へ戻る</a>
    </main>
  );
};

export default ArticleDetail;
