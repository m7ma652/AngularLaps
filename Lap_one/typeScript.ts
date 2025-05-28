interface Product {
    id: number
    name: string
    price: number
    inStock: boolean
}
function logProduct(product: Product): void {
    console.log(`product id is: ${product.id} , and product name is: ${product.name}
        , and it's cost is: ${product.price} EGP , and the product availability in stock is: ${product.inStock}`);
}

const newProduct: Product = {
    id: 77,
    name: "talagaa",
    price: 15000,
    inStock: true
}
logProduct(newProduct);
// ============================================================
var productOrError: Product | string;
// ============================================================
function wrap<T>(arr: T[]): T {
    return arr[1];
}
// ============================================================
interface ApiResult<T> {
    data: T
    success: boolean
    message: string
}
// ============================================================
function productIfSuccess(product: ApiResult<Product>): void {
    const productData = product.data;
    if (product.success === true) {
        console.log(`##The message is:${product.message}  product id is: ${productData.id} , and product name is: ${productData.name}
        , and it's cost is: ${productData.price} EGP , and the product availability in stock is: ${productData.inStock} ##`);
    }
}
const newProductIfSuccess: ApiResult<Product> = {
    data: newProduct,
    success: true,
    message: "from productIfSuccess function=> "
}
productIfSuccess(newProductIfSuccess);