# Nami Takagi Portfolio
---
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
│       ├── blog/
│       ├── portfolio/
│       ├── 404.astro
│       └── index.astro
└── package.json
```

## CSSについて
Tailwind CSSを主に使用。
Tailwind CSSで再現できないスタイルは、CSSを使うことも可とする。

## アニメーションについて
GSAPを使用する。

