# TomoBlog

TomoBlogは、Next.js + React + TypeScriptで構築されたブログサイトです。

## 主な機能
- トップページ、記事一覧、記事詳細ページ
- キャラクターアイコン（SVG）表示
- 会話表示機能
- Azure Static Web Apps対応

## ディレクトリ構成
```
├── src/
│   ├── pages/         # ページコンポーネント
│   ├── public/assets/ # アイコン画像
│   ├── ...
├── docs/              # ドキュメント
├── public/            # 静的ファイル
├── .gitignore         # Git管理除外設定
├── package.json       # プロジェクト設定
```

## セットアップ
```sh
npm install
npm run dev
```

## デプロイ
Azure Static Web Appsに対応しています。詳細は `docs/デプロイ.md` を参照してください。

## ライセンス
MIT
