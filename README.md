# Nami Takagi Portfolio

## 開発時
```bash
npm install
```
### 起動
```bash
npm run dev
```
### 整形
```bash
npm run format
```

## 🚀 ファイル構成

```text
/
├── dist/
├── src/
│   ├── components/
│   │   ├── blog/ （ブログ：工事中）
│   │   ├── common/ （共通）
│   │   └── portfolio/ （ポートフォリオ）
│   ├── layouts/
│   │   └── LayoutPortfolio.astro （ポートフォリオ用レイアウト）
│   │   └── LayoutTree.astro （共通）
│   ├── lib/
│   │   └── microcms.ts
│   └── pages/
│       ├── blog/ （ブログ：工事中）
│       ├── portfolio/ （ポートフォリオ）
│       ├── 404.astro
│       └── index.astro
└── package.json
```

## CSSについて
Tailwind CSSを主に使用。
Tailwind CSSで再現できないスタイルは、CSSを使うことも可とする。

## アニメーションについて
GSAPを使用する。

## CMSについて
[micro CMS](https://microcms.io/)を使用する。
.envファイルを作成し、下記の内容を記述する。
```
MICROCMS_SERVICE_DOMAIN=[microCMSのドメイン]
MICROCMS_API_KEY=[microCMSから取得したAPIキー]
```

## ホスティングについて
Vercelを使用する。

