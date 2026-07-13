// console.log("cong viec A");
// console.log("cong viec B");
// console.log("cong viec C");

setTimeout(() => {
  console.log("cong viec A");
}, 3000);
console.log("cong viec B");
console.log("cong viec C");

let result;
// ! async
fetch("https://dummyjson.com/products?limit=4&skip=0")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    result = data;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finish!");
  });

console.log(result);

/**
 * * 1. callback -> dùng một hàm phụ truyền vào hàm chính như 1 tham số.
 * * 2. Promise - lới hứa - thực ra là một đối tượng đặc biệt trong JS liên kết giữa 2 công việc (công việc 2 cần chờ kết quả từ công việc 1)
 * * 3. Async/await - là cú pháp hiện đại để promise dễ viết hơn.
 */

function subTask() {
  console.log("ho tro ban X");
}
function mainTask(callback) {
  setTimeout(() => {
    console.log("Cong viec chinh");
    callback();
  }, 1000);
}

mainTask(subTask);
