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
  if (searchItem === "all") {
    return products;
  } else
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchItem) ||
        product.category.toLowerCase().includes(searchItem),
    );
};

// sorting function

export const sortProducts = (products, field, direction) => {
  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    if (field === "name") {
      return direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }

    if (field === "price") {
      return direction === "asc" ? a.price - b.price : b.price - a.price;
    }

    if (field === "createdAt") {
      return direction === "asc"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    }

    return 0;
  });

  return sortedProducts;
};
