/*
 * coonst,letの練習
 */
// const val3 = "const定数";
// console.log(val3);

// const val4 = {
//   name: "ayk",
//   age: 1
// };
// // console.log(val4);
// val4.name = "ay";
// val4.address = "kumamoto";
// console.log(val4);

// // 配列
// const val5 = ["dog", "cat"];
// // console.log(val5);
// val5[0] = "bird";
// // console.log(val5);
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 * テンプレートリテラル ``
 */
// const name = "あや";
// const age = 112;
// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

/**
 * アロー関数
 */
// // 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("Func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aya",
//   age: 141
// };

// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 配列の分割代入
const myProfile = ["aya", 551];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);
