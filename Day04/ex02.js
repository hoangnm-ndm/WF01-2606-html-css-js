/**
 * * Kiểm tra xem 1 số có phải số chẵn không?
 * * Bước 1: khai báo function `checkEvenNumber(number)`
 * * Bước 2: Trong function, kiểm tra nếu number chia hết cho 2 thì trả về true, ngược lại trả về false
 */

const number = Number(window.prompt("Nhập vào 1 số bất kì: "));

function checkEvenNumber(number) {
  // if (number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  // * Boolean -> Kiểu dữ liệu luận lí, chỉ có 2 giá trị true/false
  console.log(`${number} la 1 so ${number % 2 === 0 ? "chan" : "le"}`);
}

checkEvenNumber(number);
