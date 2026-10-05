import {
  getInventorySummary,
  searchProducts,
  sortProducts,
  filterByCategory,
  formatPrice,
} from "../lib/products";

import type { Product } from "../types/product";
import productsData from "../data/products.json";

const products: Product[] = productsData.map((product) => ({
  ...product,
  category: product.category as Product["category"],
}));

export default function Home() {
  const searchProductsResult = searchProducts(products, "Accessories");
  console.log(searchProductsResult);

  const filterProductsResult = filterByCategory(products, "all");
  console.log(filterProductsResult);

  const sortProductsResult = sortProducts(products, "price", "desc");
  console.log(sortProductsResult);

  const getInventorySummaryResult = getInventorySummary(products);
  console.log(getInventorySummaryResult);

  const formatPriceResult = formatPrice(500000);
  console.log(formatPriceResult);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1>Neyamul</h1>
        <h1>Shopdesk - Conflict Resolved</h1>
      </div>

      <div>Watch the console to see the data you are searching for.</div>
    </div>
  );
}