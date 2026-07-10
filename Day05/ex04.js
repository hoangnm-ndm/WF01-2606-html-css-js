// export / import

import { products } from "./data.js";

/**
 * * 1. Lấy danh sách sản phẩm mới với mỗi sản phẩm chỉ còn cần tên, giá, đánh giá, danh mục, thương hiệu, mô tả. (dùng: map)
 * * 2. Từ mảng ở bài 1, hãy lấy ra mảng mới chỉ chứa các sản phẩm thuộc danh mục beauty và có giá dưới 100$ (dùng: filter)
 * * 3. Từ mảng ban đầu, lần này sắp xếp theo giá tăng dần (asc - ascending >< desc -  descending). (dùng: sort)
 * * 4. Tìm sản phẩm có mã SKU (Stock Keeping Unit) là "FRA-DOL-DOL-009" (dùng: find)
 */

const simplified = products.map((product) => ({
  title: product.title,
  price: product.price,
  rating: product.rating,
  category: product.category,
  brand: product.brand,
  description: product.description,
}));
console.log("B1");
console.log(simplified);

const cheapBeautyProducts = simplified.filter(
  (product) => product.category === "beauty" && product.price < 100
);
console.log("\n B2");
console.log(cheapBeautyProducts);

const sortedProductsByPrice = simplified.toSorted((a, b) => a.price - b.price);
console.log("\n B3");
console.log(sortedProductsByPrice);

const targetProduct = products.find(
  (product) => product.sku === "FRA-DOL-DOL-009"
);
console.log("\n B4");
console.log(targetProduct);

// Gặp bài khó quá -> Dùng AI hướng dẫn -> tự xem lại đáp án, kiểm tra, đối chiếu, xác nhận -> tích luỹ kiến thức -> Luyện code tay nếu có thời gian

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", function () {
  console.log("next");
});
prevBtn.addEventListener("click", function () {
  console.log("prev");
});
