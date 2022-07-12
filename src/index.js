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
// const myProfile = ["aya", 551];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;

/**
 * デフォルト値、引数など
 */
// (name = "ゲスト")　でデフォルトの値を渡す
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけえ");

/**
 * スプレッド構文　...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filterを使った配列の処理
 * map：既存の配列を加工して、新しい配列を作成したい時に便利。
 * filter：配列の中から、ある条件に合う要素全てを抽出し新しい配列として生成
 */
// const nameArr = ["田中", "山田", "じゃん"];
// 従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// 省略記法
// nameArr.map((name) => console.log(name));

// 条件に一致した値を取り出す　 = filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["田中", "山田", "じゃん"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// 実践的なmap
// const newNumArr = nameArr.map((name) => {
//   if (name === "じゃん") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件　 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
// console.log(formatedNum); //数値を入力して下さい

// 関数のreturnに三項演算子を使用
const checkNum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};
console.log(checkNum(100, 50)); // falseの値
