let a = 10;
console.log(typeof a);

let b = `Hoang`;
console.log(typeof b);
let x = 100;

let c = `ket qua la: ${a + x}`;
console.log(c);

console.log(10 + 1);
console.log(10 + "1");

console.log(10 - 1);
console.log(10 - "1");
console.log(10 - "Hoang"); // NaN = Not a Number
console.log(typeof NaN);

/**
 * * Kiểm tra xem 3 số bất kỳ có phải là 3 số đo cạnh của một tam giác không?
 * * * Bước 1: khai báo function `checkTriangle(a, b, c)`
 */

function checkTriangle(a, b, c) {}

// * Khánh
function check(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// * Tuấn Anh
// function checkTriangle(a,b,c){
//   if(a+b>c||a+c>b||b+c>a){
//     console.log('day la tam giac')
//   }else{
//     console.log("day khong la tam giac")
//   }
// }
// return checkTriangle()

let chieuCao = 1.8;
let taiChinh = 5_000_000_000;
let ngheNghiep = "IT";
console.log(chieuCao > 1.7 && taiChinh >= 1000_000_000 && ngheNghiep === "IT");

console.log("Hoang" && "CodeFARM" && 0); // AND
console.log(null || "CodeFARM" || 0); // OR
console.log(!!"Hoang");

/**
 * * 6 giá trị gọi là falsy falue:
 * * false
 * * 0
 * * ""
 * * null
 * * undefined
 * * NaN
 */

console.log("============");

console.log(Number(true));
console.log(Number(false));

console.log(true + true);

console.log(String(true));

console.log(Boolean(""));
console.log(Boolean("Hoang"));
console.log(Boolean(0));
console.log(Boolean(NaN));

const myInfor = {
  name: "hoang",
  age: 35,
};

console.log(myInfor.address);

let y;

console.log(y);

console.log(typeof null);
console.log(typeof undefined);
