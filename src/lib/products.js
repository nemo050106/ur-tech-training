import products from "../data/products.json";

// console.log(products);

// search function(number 1)

export const searchProducts = (products, query) => {
  const searchTerm = query.trim().toLowerCase();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm),
  );
};

// filter by category function(number 2)
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

// sorting function(number 3)

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

// summury function
// export const getInventorySummary = (products) => {
//   return products.reduce(
//     // summary = ACCUMULATOR
//     // It stores the result while reduce() goes through each product.
//     (summary, product) => {

//       // Count total number of products
//       summary.totalProducts += 1;

//       // If the product is active, increase active product count
//       if (product.isActive) {
//         summary.activeProducts += 1;
//       }

//       // If stock is 0, the product is out of stock
//       if (product.stock === 0) {
//         summary.outOfStock += 1;
//       }

//       // Calculate total value of this product's stock
//       // price × stock = stock value
//       summary.totalStockValue += product.price * product.stock;

//       // Return the updated accumulator for the next product
//       return summary;
//     },

//     // Initial value of the ACCUMULATOR
//     {
//       totalProducts: 0,
//       activeProducts: 0,
//       outOfStock: 0,
//       totalStockValue: 0,
//     }
//   );
// };

// Fetch products from DummyJSON API (number 6)
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    throw new Error(`Unable to load products: ${error.message}`);
  }
};
