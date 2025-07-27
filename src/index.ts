// ======================================
// TypeScript課題3: インターフェースの定義と使用
// ======================================

// 【課題の説明】
// インターフェース（interface）を使って、構造化されたデータの型を定義しましょう。
// オブジェクトの形を事前に決めることで、型安全性を確保できます。

// ======================================
// 【練習問題】
// ======================================

// 1. Productインターフェースを定義してください
// プロパティ：
// - id: 数値
// - name: 文字列
// - price: 数値
// - category: 文字列
// - inStock: 真偽値

// interface Product {
//   // ここにプロパティを定義
// }

// 2. Productオブジェクトを表示する関数を作成してください
// 引数: product (Product型)
// 戻り値: 商品情報の文字列

// function displayProduct(product) {
//   const stockStatus = product.inStock ? "在庫あり" : "在庫なし";
//   return `商品名: ${product.name}, 価格: ¥${product.price}, カテゴリ: ${product.category}, ${stockStatus}`;
// }

// 3. 在庫がある商品の合計金額を計算する関数を作成してください
// 引数: products (Product配列)
// 戻り値: 合計金額 (数値)

// function calculateTotal(products) {
//   return products
//     .filter(product => product.inStock)
//     .reduce((total, product) => total + product.price, 0);
// }

// ======================================
// 【解答例】
// ======================================

// 1. Productインターフェースの定義
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// 2. 商品情報を表示する関数
function displayProduct(product: Product): string {
  const stockStatus = product.inStock ? "在庫あり" : "在庫なし";
  return `商品名: ${product.name}, 価格: ¥${product.price}, カテゴリ: ${product.category}, ${stockStatus}`;
}

// 3. 在庫商品の合計金額を計算する関数
function calculateTotal(products: Product[]): number {
  return products
    .filter((product) => product.inStock)
    .reduce((total, product) => total + product.price, 0);
}

// 4. 商品を検索する関数（追加）
function findProductsByCategory(
  products: Product[],
  category: string
): Product[] {
  return products.filter((product) => product.category === category);
}

// ======================================
// 【使用例・テスト】
// ======================================

console.log("=== 課題3: インターフェースの定義と使用 ===");

// テスト用の商品データ
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

// 全商品の表示
console.log("--- 全商品一覧 ---");
products.forEach((product) => {
  console.log(displayProduct(product));
});

// 在庫商品の合計金額
const totalPrice = calculateTotal(products);
console.log(`\n在庫商品の合計金額: ¥${totalPrice.toLocaleString()}`);

// カテゴリ別検索
const electronics = findProductsByCategory(products, "電子機器");
console.log(`\n電子機器カテゴリの商品数: ${electronics.length}件`);

// ======================================
// 【ポイント解説】
// ======================================

// 1. インターフェースの定義
//    interface インターフェース名 {
//      プロパティ名: 型;
//    }

// 2. インターフェースを型として使用
//    変数: インターフェース名
//    引数: インターフェース名
//    配列: インターフェース名[]

// 3. インターフェースの利点
//    - 型安全性の確保
//    - コードの可読性向上
//    - IDEの補完機能が効く
//    - 構造の統一

// ======================================
// 【追加練習】
// ======================================

// より高度なインターフェースの使用例

// 1. オプショナルプロパティを持つインターフェース
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // オプショナル
  isActive?: boolean; // オプショナル
}

// 2. 読み取り専用プロパティを持つインターフェース
interface Config {
  readonly apiUrl: string;
  readonly version: string;
  timeout: number;
}

// 3. インターフェースの継承
interface Employee extends User {
  employeeId: string;
  department: string;
  salary: number;
}

// 追加練習の使用例
console.log("\n=== 追加練習 ===");

const user: User = {
  id: 1,
  name: "James",
  email: "james@example.com",
  // age と isActive は省略可能
};

const config: Config = {
  apiUrl: "https://api.example.com",
  version: "1.0.0",
  timeout: 5000,
};

const employee: Employee = {
  id: 2,
  name: "Sophia",
  email: "sophia@example.com",
  age: 24,
  employeeId: "EMP001",
  department: "開発部",
  salary: 5000000,
};

console.log(`ユーザー: ${user.name} (${user.email})`);
console.log(`設定: API URL = ${config.apiUrl}, バージョン = ${config.version}`);
console.log(`従業員: ${employee.name} (${employee.department})`);

// config.apiUrl = "new url"; // エラー！読み取り専用プロパティは変更できない
