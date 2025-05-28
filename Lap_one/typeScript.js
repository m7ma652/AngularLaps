function logProduct(product) {
    console.log("product id is: ".concat(product.id, " , and product name is: ").concat(product.name, "\n        , and it's cost is: ").concat(product.price, " EGP , and the product availability in stock is: ").concat(product.inStock));
}
var newProduct = {
    id: 77,
    name: "talagaa",
    price: 15000,
    inStock: true
};
logProduct(newProduct);
// ============================================================
var productOrError;
// ============================================================
function wrap(arr) {
    return arr[1];
}
// ============================================================
function productIfSuccess(product) {
    var productData = product.data;
    if (product.success === true) {
        console.log("##The message is:".concat(product.message, "  product id is: ").concat(productData.id, " , and product name is: ").concat(productData.name, "\n        , and it's cost is: ").concat(productData.price, " EGP , and the product availability in stock is: ").concat(productData.inStock, " ##"));
    }
}
var newProductIfSuccess = {
    data: newProduct,
    success: true,
    message: "from productIfSuccess function=> "
};
productIfSuccess(newProductIfSuccess);
