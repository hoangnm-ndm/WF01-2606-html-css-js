async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=4&skip=0");

  const data = await res.json();
  console.log(data);
}

fetchProducts();
