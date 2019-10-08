import { sayHello } from './modules/greeting';
import { sum, product } from './modules/math-functions';

const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');

const a = 3;
const b = 7;

resultGreeting.textContent = sayHello('Nice to see you! 🙂');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}. ✨`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}. 🚀`;

document.addEventListener('DOMContentLoaded', () => {
  // console.log("xxx");
  // var xbtn = document.getElementById("xbtn");
  // xbtn.addEventListener('click', () => {
  //   console.log("xbtn click");
  //   console.log(sum(a, b));
  // });
  $("#xbtn").on("click", () => {
    console.log("xbtn click");
    console.log(sum(a, b));
    console.log(product(a, b));
  })
})
