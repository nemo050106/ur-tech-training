import {
  getInventorySummary,
  searchProducts,
  sortProducts,
  filterByCategory,
  formatPrice,
} from "../lib/products";

import products from "../data/products.json";

export default function Home() {
  const searchProductsResult = searchProducts(products, "Accessories");
  // console.log(searchProductsResult);
  const filterProductsResult = filterByCategory(products, "all");
  // console.log(filterProductsResult);
  const sortProductsResult = sortProducts(products, "price", "desc");
  // console.log(sortProductsResult)
  const getInventorySummaryResult = getInventorySummary(products);
  // console.log(getInventorySummaryResult);
  const formatPriceResult = formatPrice(20000)
  console.log(formatPriceResult)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <h1>Neyamul</h1>
        <h1>Shopdesk - Conflict Resolved</h1>
      </div>

      <div> watch the console to see the datas you are searching for</div>
    </div>
  );
}
