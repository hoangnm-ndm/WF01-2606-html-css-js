// * Cach 2: viet vao file external
const pElement = document.getElementsByTagName("p")[0];
console.log(pElement);

let countValue = 0;
function count() {
  countValue = countValue + 1;
  console.log(countValue);
  pElement.innerHTML = `Hiển thị số lần bấm nút: ${countValue} lần bấm`;
}
