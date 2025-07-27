# TypeScript 課題 3: インターフェースの定義と使用

## 概要

このプロジェクトは、TypeScript のインターフェース（interface）機能を学習するための課題です。商品管理システムを例に、インターフェースを使った型安全なプログラミングを実践します。

## 学習目標

- インターフェースの基本的な定義方法を理解する
- インターフェースを使った型安全なコードの書き方を学ぶ
- オプショナルプロパティ、読み取り専用プロパティの使い方を習得する
- インターフェースの継承について理解する

## プロジェクト構成

```
typescript_assignment3/
├── src/
│   ├── index.ts          # メインのTypeScriptファイル
│   └── index.js          # コンパイル後のJavaScriptファイル
├── package.json          # プロジェクト設定
├── package-lock.json     # 依存関係のロック
└── tsconfig.json         # TypeScript設定
```

## 環境要件

- Node.js (>= 14.17)
- TypeScript (^5.8.3)

## セットアップ

1. 依存関係のインストール

```bash
npm install
```

2. TypeScript のコンパイル

```bash
npx tsc
```

3. 実行

```bash
node src/index.js
```

## 実装内容

### 1. 基本インターフェース

#### Product インターフェース

商品情報を表現するための基本的なインターフェース：

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}
```

### 2. 実装関数

#### `displayProduct(product: Product): string`

- **機能**: 商品情報を読みやすい文字列形式で表示
- **引数**: `product` - Product 型のオブジェクト
- **戻り値**: 商品情報の文字列

#### `calculateTotal(products: Product[]): number`

- **機能**: 在庫がある商品の合計金額を計算
- **引数**: `products` - Product 型の配列
- **戻り値**: 合計金額（数値）

#### `findProductsByCategory(products: Product[], category: string): Product[]`

- **機能**: 指定されたカテゴリの商品を検索
- **引数**:
  - `products` - Product 型の配列
  - `category` - 検索するカテゴリ名
- **戻り値**: 該当する商品の配列

### 3. サンプルデータ

以下の商品データを使用してテストを実行：

```typescript
const products: Product[] = [
  {
    id: 1,
    name: "ノートPC",
    price: 120000,
    category: "電子機器",
    inStock: true,
  },
  { id: 2, name: "マウス", price: 3000, category: "電子機器", inStock: false },
  {
    id: 3,
    name: "キーボード",
    price: 8000,
    category: "電子機器",
    inStock: true,
  },
  { id: 4, name: "デスク", price: 25000, category: "家具", inStock: true },
  { id: 5, name: "チェア", price: 15000, category: "家具", inStock: false },
];
```

### 4. 高度なインターフェース機能

#### オプショナルプロパティ

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // オプショナル
  isActive?: boolean; // オプショナル
}
```

#### 読み取り専用プロパティ

```typescript
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  timeout: number;
}
```

#### インターフェース継承

```typescript
interface Employee extends User {
  employeeId: string;
  department: string;
  salary: number;
}
```

## 実行結果例

```
=== 課題3: インターフェースの定義と使用 ===
--- 全商品一覧 ---
商品名: ノートPC, 価格: ¥120000, カテゴリ: 電子機器, 在庫あり
商品名: マウス, 価格: ¥3000, カテゴリ: 電子機器, 在庫なし
商品名: キーボード, 価格: ¥8000, カテゴリ: 電子機器, 在庫あり
商品名: デスク, 価格: ¥25000, カテゴリ: 家具, 在庫あり
商品名: チェア, 価格: ¥15000, カテゴリ: 家具, 在庫なし

在庫商品の合計金額: ¥153,000

電子機器カテゴリの商品数: 3件

=== 追加練習 ===
ユーザー: James (james@example.com)
設定: API URL = https://api.example.com, バージョン = 1.0.0
従業員: Sophia (開発部)
```

## 学習ポイント

### インターフェースの利点

1. **型安全性の確保**: コンパイル時にプロパティの存在や型をチェック
2. **コードの可読性向上**: オブジェクトの構造が明確になる
3. **IDE サポート**: 自動補完や型チェックが効く
4. **構造の統一**: チーム開発での一貫性を保つ

### TypeScript 設定

- **target**: ES2016 に設定
- **module**: CommonJS モジュール形式
- **strict**: 厳密な型チェックを有効化

## 課題の進め方

1. `src/index.ts`のコメントアウトされた練習問題を確認
2. 解答例を参考に自分で実装してみる
3. TypeScript コンパイラでエラーがないことを確認
4. 実行して期待通りの結果が得られることを確認

## 次のステップ

このインターフェースの基礎を習得したら、以下のトピックに進むことをお勧めします：

- ジェネリック型
- ユニオン型とインターセクション型
- 型エイリアス
- より複雑なオブジェクト指向プログラミング
