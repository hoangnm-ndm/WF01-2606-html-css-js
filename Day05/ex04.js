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
  thumbnail: product.thumbnail,
}));

// Gặp bài khó quá -> Dùng AI hướng dẫn -> tự xem lại đáp án, kiểm tra, đối chiếu, xác nhận -> tích luỹ kiến thức -> Luyện code tay nếu có thời gian

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const currentPageEle = document.getElementById("currentPage");
const productsEle = document.getElementById("products");
let currentPage = 1;
let limit = 4;
let start = (currentPage - 1) * limit;
let paginatedProducts = simplified.slice(start, start + 4);

nextBtn.addEventListener("click", function () {
  currentPage++;
  reRender(currentPage);
});
prevBtn.addEventListener("click", function () {
  currentPage--;
  reRender(currentPage);
});

function reRender(currentPage = 1) {
  start = (currentPage - 1) * limit;
  currentPageEle.innerText = currentPage;
  paginatedProducts = simplified.slice(start, start + 4);
  const productContent = paginatedProducts
    .map(
      (item) =>
        `<div>
      <h2>${item.title}</h2>
      <img src="${item.thumbnail}" alt="" />
      <p>Price: ${item.price}</p>
    </div>`
    )
    .join("");
  productsEle.innerHTML = productContent;
}

reRender();

/**
 * Validate page
 */
