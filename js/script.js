"use strict"

let hello;
hello = 'hello world';
console.log(typeof hello);
console.log(hello.length);
console.log(hello);
console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);
console.log(hello[3]);
console.log(hello[4]);
console.log(' ');

console.log(hello.toUpperCase());
console.log(hello.toLowerCase());
console.log(hello[0].toLowerCase());

console.log(' ');

hello = hello.toUpperCase();
console.log(hello.includes('H'));
console.log(' ');

hello = hello.toLowerCase();
console.log(hello.includes('wor'));

// hello = hello.slice(2, 8);
console.log(hello);

hello = hello.replace('world', 'ukraine');
console.log(hello);
console.log(' ');

let numberOne = 13;
// let numberTwo = 15.8;
// let numberTwo = 15.35;
// let numberTwo = 15.5;
let numberTwo = -15.5;
console.log(Math.floor(numberOne));
console.log(Math.floor(numberTwo));
console.log(Math.ceil(numberTwo));
console.log(Math.round(numberTwo));
console.log(Math.abs(numberTwo));
console.log(' ');

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(' ');

console.log(Math.max(0,5,8,3,8,1,85,812,99,58));
console.log(Math.min(0,5,8,3,8,1,85,812,99,58));
console.log(' ');

numberOne = `50.5%`;
console.log(typeof numberOne);
console.log(numberOne);
console.log(' ');

numberOne = parseFloat(numberOne);
console.log(typeof numberOne);
console.log(numberOne);
console.log(' ');

numberOne = parseInt(numberOne);
console.log(typeof numberOne);
console.log(numberOne);
console.log(' ');

numberOne = "50.5";
console.log(typeof numberOne);
console.log(numberOne);
console.log(' ');

numberTwo = 60;
console.log(typeof numberTwo);
console.log(numberTwo);
console.log(' ');

let numberThree = '18%';
console.log(typeof numberThree);
console.log(numberThree);
console.log(' ');

let summ = numberOne - numberTwo //- numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');


numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';

summ = numberOne / numberTwo /// numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';
numberThree = parseFloat(numberThree);
console.log(' ');

summ = numberOne * numberTwo * numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';
// numberThree = parseFloat(numberThree);

summ = numberOne + numberTwo + numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';
// numberThree = parseFloat(numberThree);

summ = numberOne % numberTwo //+ numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';
// numberThree = parseFloat(numberThree);

summ = +numberOne + numberTwo + numberThree;
console.log(typeof summ);
console.log(summ);

summ = --numberOne + ++numberTwo //+ numberThree;
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "50.5";
numberTwo = 60;
numberThree = '18%';
summ = numberOne < numberTwo < numberThree; //false false
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne > numberTwo < numberThree; //false false
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne < numberTwo //< numberThree; true
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberTwo > parseFloat(numberThree); //true
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne < numberTwo, numberTwo > numberThree; //true 
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne < numberTwo, numberTwo < numberThree; //true false, true
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne !== numberTwo;
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne <= numberTwo;
console.log(typeof summ);
console.log(summ);
console.log(' ');

summ = numberOne >= numberTwo;
console.log(typeof summ);
console.log(summ);
console.log(' ');


numberOne = "60";
numberTwo = 60;
numberThree = '18%';
summ = numberOne === numberTwo; 
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "60";
numberTwo = 60;
numberThree = '18%';
summ = !numberOne === !numberTwo; 
console.log(typeof summ);
console.log(summ);
console.log(' ');


numberOne = "60";
numberTwo = 60;
numberThree = '18%';
summ = numberTwo > numberThree || numberOne < numberTwo; 
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = "60";
numberTwo = 60;
numberThree = '18%';
summ = numberTwo > numberOne || numberOne <= numberTwo; 
console.log(typeof summ);
console.log(summ);
console.log(' ');

numberOne = 0;
numberTwo = 60;
numberThree = '18%';
summ = numberOne || numberTwo; 
console.log(typeof summ);
console.log(summ);
console.log(' ');

// numberOne = "0";
// numberOne = "60";
numberOne = 0;
numberTwo = "60";
numberThree = '18%';
summ = numberOne && numberTwo; 
// summ = numberTwo > numberOne || numberOne <= numberTwo; 
console.log(typeof summ);
console.log(Boolean(summ));
console.log(summ);
console.log(' ');

numberOne = 0;
numberTwo = "60";
numberThree = '18';
if (numberOne < numberThree) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}
console.log(' ');

numberOne = 0;
numberTwo = "60";
numberThree = '18';
if (numberOne > numberThree) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}else{
  summ = +numberThree + +numberTwo;
  console.log(summ);
}
console.log(' ');


numberOne = 50;
numberTwo = "60";
numberThree = '18';
if (numberOne > numberTwo) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}else if (numberOne===numberTwo){
  summ = +numberThree + +numberTwo;
  console.log(summ);
} else{
  summ =numberOne + +numberThree + +numberTwo;
  console.log(summ);
}
console.log(' ');

numberOne = 0;
numberTwo = "";
numberThree = '18';
if (numberOne) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}else if (numberTwo){
  summ = +numberThree + +numberTwo;
  console.log(summ);
} else{
  summ =numberOne + +numberThree + +numberTwo;
  console.log(summ);
}
console.log(' ');

numberOne = 1;
numberTwo = "5";
numberThree = '18';
let numberFour = 60;
if (numberOne || numberTwo) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}else if (numberTwo && numberFour){
  summ = +numberThree * +numberTwo;
  console.log(summ);
} else{
  summ =numberOne + +numberThree + +numberTwo + numberFour;
  console.log(summ);
}
console.log(' ');

numberOne = 1;
numberTwo = "5";
numberThree = '18';
numberFour = 60;
if (numberOne < 1) {
  summ = numberOne + +numberTwo; 
  console.log(summ);
}else if (numberTwo < 4){
  summ = +numberThree * +numberTwo;
  console.log(summ);
} else{
  summ =numberOne + +numberThree + +numberTwo + numberFour;
  console.log(summ);
}
console.log(' ');

let user = 1;
let totalUser = 40;

for (let i = 0; i<=totalUser; i++){
    if (i % 5 === 0) {
      console.log(i);
    }
}
console.log(' ');
for (let i = 0; i<=totalUser; i+=5){
      console.log(i);
}

let result =' ';
console.log(Boolean (result));
console.log(result ?? "11");
console.log(' ');

//Домашка - цикли
console.log('Домашка - цикли');
//1)
console.log(' ');
console.log('Задача №1');
console.log('цикл for');

for (let i=1; i <= 5; ++i){
  console.log(i);
};
console.log(' ');
console.log('цикл while');
let nums = 1;
while (nums <=5){
  console.log(nums);
  ++nums;
}

// 2)

// console.log('Задача №2');
// let nums = 8;
// while (nums){
//   console.log(nums);
//   num--;
// }

//3)
console.log(' ');
console.log('Задача №3');
console.log('цикл for');

for (let num=0; num < 3; num++){
  console.log(`число: ${num}`);
};

console.log(' ');
console.log('цикл while');
let num = 0;
while (num < 3){
  console.log(`число: ${num}`);
  ++num;
}

//4)
console.log(' ');
console.log('Задача №4');
firstFor:
for (let num=0; num < 2; num++){
  console.log(num);
  for (let size = 0; size < 3; size++){
    if (size == 1){
      continue firstFor;
    };
    console.log(size);
  }
};

console.log(' ');
console.log('Домашка - числа');

console.log('Задача №1');
let numOne = Math.round((Number.EPSILON + 1.005) * 100) / 100;
console.log(numOne);

console.log(' ');
console.log('Задача №2');
let value = `135.58px`;
console.log(parseFloat(value));

console.log(' ');
console.log('Задача №3');

let newValue = 58 + "фрілансер";
console.log(typeof newValue);
console.log(Boolean.newValue);
if (newValue) {
  console.log('Результат виразу NaN');
}

console.log(' ');
console.log('Задача №4');

console.log(Math.max(10, 58, 39, -150, 0));

console.log(' ');
console.log('Задача №5');
console.log(Math.floor(58.858));

console.log(' ');
console.log('Рядки');
console.log('Задача №1');
let fls = "фрілансер";
let text = 'привіт! я ${fls}';
console.log(text); 

console.log(' ');
console.log('Задача №2');
text = 'фрілансер';
console.log(text[5]); 

console.log(' ');
console.log('Задача №3');
text = 123 + "456";
console.log(text); 

console.log(' ');
console.log('Задача №4');
text = 'фрілансер';
console.log(text.toUpperCase()); 

console.log(' ');
console.log('Задача №5');
text = 'фрілансер';
text = text.slice(3, 6);
console.log(text); 

console.log(' ');
console.log('Задача №6');
text = 'фрілансер';
console.log(text.includes('лан', 4)); 

