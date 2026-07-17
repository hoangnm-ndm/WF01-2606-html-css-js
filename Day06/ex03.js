async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products/1");
  const data = await res.json();
  console.log(data);
}

fetchProducts();

/**
 * * READ - GET: one/all/search...
 * * CREATE - POST:
 * * UPDATE - PUT/PATCH: cap nhat
 * * DELETE - DELETE: xoa
 * * C R U D
 * * Request:
 * * - headers:
 * * - body: dữ liệu phức tạp, bảo mật
 * * - params: thường là các tham số động (dynamic) - để lấy thông tin chi tiết của một bản ghi VD: ao-polo-40001858
 * * - query: các tuỳ chọn để lấy đúng dữ liệu: pagination, search, filter, sort, ....
 */
