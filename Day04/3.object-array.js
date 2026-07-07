const product = {
  id: 1,
  name: "Vay di choi",
  price: 200,
  color: "violet",
  "danh muc": "quan ao",
  "tinh nang": function () {},
};

const myDog = {
  speak: function () {
    console.log("gau gau");
  },
};

// properties (props) -> method (phương thức)

myDog.speak();

console.log(typeof myDog);

const myObj = new Object({
  name: "Hoang",
});

console.log(product);
console.log(myObj);

console.log("==========");

const animal = ["dog", "mouse", "cat", "dodo"];

console.log(animal);
console.log(animal[1]);
console.log(animal[-1]);

// console.log(Object.prototype);
console.log(Array.prototype);

// * prototype chain

animal.push("bee");
console.log(animal);

animal = ["horse"];

/**
 * * Bộ nhớ heap/stack trong js, cách hoạt động của js với dữ liệu tham chiếu
 * * Cấu trúc điều khiển rẽ nhánh và vòng lặp
 * * Thứ 6 sẽ: Giải quyết các bài toán nền tảng của lập trình với JS: tìm kiếm, phân loại, phân trang, lọc, sắp xếp, chọn, cập nhật...
 */
