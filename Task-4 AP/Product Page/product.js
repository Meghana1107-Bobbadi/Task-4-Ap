const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-Shirt", price: 30, category: "clothing" },
  { name: "Headphones", price: 80, category: "electronics" },
  { name: "Jeans", price: 60, category: "clothing" },
];

const productList = document.getElementById("productList");
const filter = document.getElementById("filter");
const sort = document.getElementById("sort");

function renderProducts(filtered = products) {
  productList.innerHTML = "";
  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
    productList.appendChild(div);
  });
}

function updateProducts() {
  let filtered = [...products];

  const selectedCategory = filter.value;
  const selectedSort = sort.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  filtered.sort((a, b) =>
    selectedSort === "asc" ? a.price - b.price : b.price - a.price
  );

  renderProducts(filtered);
}

filter.addEventListener("change", updateProducts);
sort.addEventListener("change", updateProducts);

// Load initial products
renderProducts();
