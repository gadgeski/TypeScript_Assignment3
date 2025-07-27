// ======================================
// TypeScript課題3: インターフェースの定義と使用
// ======================================
// 2. 商品情報を表示する関数
function displayProduct(product) {
    var stockStatus = product.inStock ? "在庫あり" : "在庫なし";
    return "\u5546\u54C1\u540D: ".concat(product.name, ", \u4FA1\u683C: \u00A5").concat(product.price, ", \u30AB\u30C6\u30B4\u30EA: ").concat(product.category, ", ").concat(stockStatus);
}
// 3. 在庫商品の合計金額を計算する関数
function calculateTotal(products) {
    return products
        .filter(function (product) { return product.inStock; })
        .reduce(function (total, product) { return total + product.price; }, 0);
}
// 4. 商品を検索する関数（追加）
function findProductsByCategory(products, category) {
    return products.filter(function (product) { return product.category === category; });
}
// ======================================
// 【使用例・テスト】
// ======================================
console.log("=== 課題3: インターフェースの定義と使用 ===");
// テスト用の商品データ
var products = [
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
products.forEach(function (product) {
    console.log(displayProduct(product));
});
// 在庫商品の合計金額
var totalPrice = calculateTotal(products);
console.log("\n\u5728\u5EAB\u5546\u54C1\u306E\u5408\u8A08\u91D1\u984D: \u00A5".concat(totalPrice.toLocaleString()));
// カテゴリ別検索
var electronics = findProductsByCategory(products, "電子機器");
console.log("\n\u96FB\u5B50\u6A5F\u5668\u30AB\u30C6\u30B4\u30EA\u306E\u5546\u54C1\u6570: ".concat(electronics.length, "\u4EF6"));
// 追加練習の使用例
console.log("\n=== 追加練習 ===");
var user = {
    id: 1,
    name: "James",
    email: "james@example.com",
    // age と isActive は省略可能
};
var config = {
    apiUrl: "https://api.example.com",
    version: "1.0.0",
    timeout: 5000,
};
var employee = {
    id: 2,
    name: "Sophia",
    email: "sophia@example.com",
    age: 24,
    employeeId: "EMP001",
    department: "開発部",
    salary: 5000000,
};
console.log("\u30E6\u30FC\u30B6\u30FC: ".concat(user.name, " (").concat(user.email, ")"));
console.log("\u8A2D\u5B9A: API URL = ".concat(config.apiUrl, ", \u30D0\u30FC\u30B8\u30E7\u30F3 = ").concat(config.version));
console.log("\u5F93\u696D\u54E1: ".concat(employee.name, " (").concat(employee.department, ")"));
// config.apiUrl = "new url"; // エラー！読み取り専用プロパティは変更できない
