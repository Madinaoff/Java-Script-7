// Task 1
let num = 42;
console.log(num)

// Task 2
let str = "Hello, world!";
console.log(str)

// Task 3
let isTrue = true;
console.log(isTrue)

// Task 4
let a = 5;
let b = 3;
console.log(a + b)

// Task 5
const pi = 3.14;
console.log(pi)

// Task 6
let name = "Madina";
console.log(name)

// Task 7
let age = 17;
console.log(age)

// Task 8
let messagee = "Welcome to my website";
console.log(messagee)

// Task 9
let x = 10;
let y = 5;
console.log(x - y)

// Task 10
let firstName = "Madina"
let lastName = "Mustafaeva"
console.log("firsName: "+name + ", lastName: "+lastName)

// Task 11
let width = 45;
let height = 23;
console.log(width - height) // Прямоугольник

// Task 12
let greeting = "Hello";
let name1 = "Madina"; 
let message1 = greeting + ", " + name1 + "!";
console.log(message1)

// Task 13
let radius = 5;
let area = Math.PI * radius * radius;
console.log(area)

// Task 14
let num1 = 10;
let num2 = 3;
console.log(num1 / num2)

// Task 15 
let num3 = 7;
let num4 = 2;
console.log(num3 % num4)

// 2 MEDIUM TASKS
// Task 1
let celsius = prompt("Введите температуру в градусах Цельсия:");
let choice = prompt("Преобразовать в (F)ahrenheit или (K)elvin? (Введите F или K):");

celsius = Number(celsius);

let result;
let message;

if (choice === 'F') {
    result = (celsius * 9/5) + 32;
    message = "Температура в градусах Фаренгейта: " + result.toFixed(2) + "°F";
} else if (choice === 'K') {
    result = celsius + 273.15;
    message = "Температура в Кельвинах: " + result.toFixed(2) + "K";
} else {
    message = "Неверный выбор. Пожалуйста, введите 'F' для Фаренгейта или 'K' для Кельвина.";
}

alert(message);

// Task 2
var deposit = 25000;
var rate = 0.05;

var OneYear = deposit * (1 + rate);
var TwoYears = deposit * Math.pow(1 + rate, 2);
var ThreeYears = deposit * Math.pow(1 + rate, 3);

alert('Сумма вклада через год: ' + OneYear.toFixed(2));
alert('Сумма вклада через два года: ' + TwoYears.toFixed(2));
alert('Сумма вклада через три года: ' + ThreeYears.toFixed(2));









