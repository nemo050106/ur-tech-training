import products from "../data/products.json";

console.log(products);

// search function

export const searchProducts = (products, query) => {
  const searchTerm = query.trim().toLowerCase();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  );
};

// filter by category function
export const filterByCategory = (products, category) => {
  const searchItem = category.trim().toLowerCase();
  if(searchItem === 'all'){
    return products

  }
  else return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchItem) ||
      product.category.toLowerCase().includes(searchItem),
  );
};
