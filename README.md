___
# МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕСИОНАЛЬНОГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
### ***<center>Лабораторная работа №3. «Основы языка JavaScript».</center>*** <br><p align="right">Подготовил студент направления подготовки 01.03.02 «Прикладная математика и информатика»<br> Института естественных наук и техносферной безопасности<br> Зураев Дмитрий Бакенович.</p><br><p align="right">Научный руководитель:<br> Соболев Евгений Игоревич</p><br> <center>Южно-Сахалинск 2023 г.</center>
___
### <center>Введение</center>
<p align="justify">JavaScript (JS) - это высокоуровневый язык программирования, который используется для создания интерактивных и динамических веб-страниц. JS является одним из трех основных языков, используемых веб-браузерами (наряду с HTML и CSS), и позволяет добавлять функциональность и взаимодействие на веб-страницах.
Лабораторная работа по JavaScript (JS) предоставляет возможность познакомиться с одним из самых популярных языков программирования, используемых для разработки веб-приложений.</p>

### <center>Цели</center>
<p align="justify"></p>

### <center>Задачи</center>
<p align="justify">Применить технологию JS.</p>

____________________
## <center>_Решение_</center>
1. Что выведет код ниже?
```javascript
alert( null || 2 || undefined );
```
```js
alert( null || 2 || undefined); // Выводит 2 ( "||" возвращает первое истинное значение из списка операндов)
```
2. Что выведет код ниже?
```javascript
alert( null || 2 || undefined );
```
```js
alert( alert(1) || 2 || alert(3) ); // Выводит 1, затем 2
```
3. Что выведет код ниже?
```javascript
alert( 1 && null && 2 );
```
```js
alert( 1 && null && 2 ); // Выводит null
```
4. Что выведет `alert (И)`?
```javascript
alert( alert(1) && alert(2) );
```
```js
alert( alert(1) && alert(2) ); // выводит 1, затем undefined
```
5. Что выведет этот код?
```javascript
alert( null || 2 && 3 || 4 );
```
```JS
alert( null || 2 && 3 || 4 ); // Выводит 3
```
6. Напишите условие `if` для проверки, что переменная `age` находится в диапазоне между 14 и 90 включительно. «Включительно» означает, что значение переменной `age` может быть равно 14 или 90.
```javascript
var age = 20;
if(age >= 14 && age <= 90)
alert(`Переменная ${age} между [14;90]`);
```
7. Напишите условие `if` для проверки, что значение переменной `age` НЕ находится в диапазоне 14 и 90 включительно. Напишите два варианта: первый с использованием оператора НЕ `!`, второй – без этого оператора.
```javascript
var age = 10;
if(!(age >= 14 && age <= 90))
    alert(`1. Переменная ${age} НЕ находится между [14;90]`);
if(age <= 14 && age >- 90)
    alert(`2. Переменная ${age} НЕ находится между [14;90]`);
```
8. Какие из перечисленных ниже `alert` выполнятся?
Какие конкретно значения будут результатами выражений в условиях `if(...)`?
```javascript
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
```
```JS
if (-1 || 0) alert( 'first' ); //выполнилось, пишет "first"
if (-1 && 0) alert( 'second' ); //не выполнилось
if (null || -1 && 1) alert( 'third' ); //выполнилось, пишет "third"
```
9. Проверка логина
важность: 3
Напишите код, который будет спрашивать логин с помощью `prompt`.<br><br>
Если посетитель вводит «Админ», то `prompt` запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».<br><br>
Пароль проверять так:<br><br>
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
Блок-схема:<br><br>
![flowchart](block(9).png)<br><br>
Для решения используйте вложенные блоки `if`. Обращайте внимание на стиль и читаемость кода.<br><br>
Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращает `null`.
```javascript
let user_login = prompt("Введите логин: ");

if (user_login == "Админ")
{
    let user_passwd = prompt("Введите пароль");

    if (user_passwd == "Я главный"){
        alert("Здравствуйте!");
    } else if (user_passwd == null) {
        alert("Отменено");
    } else {
        alert("Неверный пароль")
    }
} 
else if (user_login == null){
    alert("Я вас не знаю");
} else {
    alert("Отменено");
}
```
10. Какое последнее значение выведет этот код? Почему?
```javascript
let i = 3;
while (i) {
  alert( i-- );
}
```
```js
var i = 3;
while (i) {
alert( i-- );
} //последнее значение выведет "1", тк цикл не выполняется ещё раз с нулём
```
11. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.<br><br>
Оба цикла выводят `alert` с одинаковыми значениями или нет?<br><br>
Префиксный вариант `++i`:
```js
let i = 0;
while (++i < 5) alert( i );
```
Постфиксный вариант `i++`
```javascript
let i = 0;
while (i++ < 5) alert( i );
```
```js
alert("Префиксный вариант ++i");
let i = 0;
while (++i < 5) alert( i ); //были выведены числа: 1, 2, 3, 4.

alert("Постфиксный вариант i++");
i = 0;
while (i++ < 5) alert( i ); //были  выведены числа: 1, 2, 3, 4, 5.
```
12. Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом. Оба цикла выведут `alert` с одинаковыми значениями или нет?<br><br>
Постфиксная форма:
```js
for (let i = 0; i < 5; i++) alert( i );
```
Префиксная форма:
```js
for (let i = 0; i < 5; ++i) alert( i );
```
```javascript
alert("Постфиксная форма:");
for (let i = 0; i < 5; i++) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.

alert("Префиксная форма:");
for (let i = 0; i < 5; ++i) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.
```
13. При помощи цикла `for` выведите чётные числа от 2 до 10.
```javascript
for(let i = 2; i <= 10; i+=2)
    alert(i);
```
14. Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.
```javascript
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
);
```
```js
var i = 0;
while(i < 3)
{
    alert( `number ${i}!` );
    i++;
}
```
15. Напишите цикл, который предлагает `prompt` ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее. Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC). Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
```javascript
let number = prompt("Введите число");
while(number <= 100 && number != null)
{
    number = prompt("Введите число");
}
```
16. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. Другими словами, `n` > 1 – простое, если при его делении на любое число кроме 1 и `n` есть остаток. Например, 5 — это простое число, оно не может быть разделено без остатка на 2, 3 и 4. Напишите код, который выводит все простые числа из интервала от 2 до `n`. Для `n` = 10 результат должен быть 2,3,5,7.
```javascript
let n = prompt("Введите n: "); 
let primes = []; 

if (n > 1) { 
  for (let i = 2; i <= n; i++) { 
      let isPrime = true; 
      for (let j = 2; j < i; j++) { 
          if (i % j === 0) { 
              isPrime = false; 
              break; 
          } 
      } 
      if (isPrime) { 
          primes.push(i); 
      } 
  } 
  alert("Простые числа от 2 до " + n + ": " + primes.join(", ")); 
} else { 
  alert("Пожалуйста, введите число больше 1."); 
} 
```
17. Напишите `if..else`, соответствующий следующему `switch`:
```javascript
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;
  default:
    alert( 'We hope that this page looks ok!' );
}
```
```js
let browser = prompt("What browser are you using?");
if (browser == 'Edge')
{
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == 'Firefox'
            || browser =='Safari' || browser == 'Opera'){
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
```
18. Перепишите код с использованием одной конструкции `switch`:
```javascript
 const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
```
```js
switch(parseInt(prompt("Введите число между 0 и 3"))){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}
```
19. Следующая функция возвращает `true`, если параметр `age` больше 18. В ином случае она запрашивает подтверждение через `confirm` и возвращает его результат:
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
```
Будет ли эта функция работать как-то иначе, если убрать `else`?
```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
```
Есть ли хоть одно отличие в поведении этого варианта?
```js
checkAge1(parseInt(prompt("1. Введите возраст:")));

checkAge2(parseInt(prompt("2. Введите свой возраст:")));

function checkAge1(age) {
if (age > 18) {
    return true;
} else {
    //...
    return confirm('Родители разрешили?');
}
}

function checkAge2(age) {
if (age > 18) {
    return true;
}
//...
return confirm('Родители разрешили?');
} //отличий в поведении двух функций нет, так как во втором сразу выходит из фунции с первого return
```

20. Следующая функция возвращает `true`, если параметр `age` больше 18. В ином случае она задаёт вопрос `confirm` и возвращает его результат.
```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
```
Перепишите функцию, чтобы она делала то же самое, но без `if`, в одну строку.<br><br>
Сделайте два варианта функции `checkAge`:<br><br>
Используя оператор ?<br>
Используя оператор ||
```js
alert("Используя оператор ?");
    checkAge3(parseInt(prompt("Введите возраст:")));
alert("Используя оператор ||");
    checkAge4(parseInt(prompt("Введите свой возраст:")));

function checkAge3(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge4(age) {
    return age > 18 || confirm('Родители разрешили?');
}
```

21. Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.<br><br>
Пример вызовов:
```javascript
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```
```js
function min(a, b){
    if (a <= b)
        return a;
    else 
        return b;
}
var a = parseInt(prompt("Введите a: "));
var b = parseInt(prompt("Введите b: "));
alert(min(a, b));
```
22. Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.
```javascript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```
Создайте страницу, которая запрашивает `x` и `n`, а затем выводит результат `pow(x,n)`.
```js
function my_pow(x, n){
    var answer = x;
    for (let i = 1; i < n; i++) {
        answer *= x;
    }

    return answer;
}
var x = parseInt(prompt("Введите x: "));
var n = parseInt(prompt("Введите n: "));
alert(my_pow(x, n));
```
[23 Kata](https://www.codewars.com/kata/highest-and-lowest)
```javascript
function highAndLow(numbers){
  let result = numbers.split(' ').map(Number);
  let maxx = Math.max(...result);
  let minn = Math.min(...result);
  return `${maxx} ${minn}`;
}
```
[24 Kata](https://www.codewars.com/kata/disemvowel-trolls)
```javascript
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
  let newStr = "";
  for(let i = 0; i < str.length; i++){
    if(!vowels.includes(str[i])){
        newStr += str[i];
    }
}
return newStr;
}
```
[25 Kata](https://www.codewars.com/kata/isograms)
```javascript
function isIsogram(str){
  str = str.toLowerCase();
  let letterCount = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letterCount[letter]) {
        return false;
    } else {
        letterCount[letter] = 1;
    }
}
  
return true;
}
```
[26 Kata](https://www.codewars.com/kata/digits-explosion)
```javascript
function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) { 
    let digit = parseInt(s[i]);
      for (let j = 0; j < digit; j++) {
        result += s[i];
      }
  }
  return result; 
}
```
[27 Kata](https://www.codewars.com/kata/handshake-problem)
```javascript
function getParticipants(handshakes) { 
  let participants = 0; 
  let totalHandshakes = 0;
  while (totalHandshakes < handshakes) { 
    participants++; 
    totalHandshakes += participants - 1; 
  }

return participants;
}
```
[28 Kata](https://www.codewars.com/kata/duplicate-encoder)
```javascript
function duplicateEncode(word){
  word = word.toLowerCase();
  let charCount = {}; 
  for(let i = 0; i < word.length; i++){ 
    let char = word[i]; 
    if(charCount[char])
    { 
      charCount[char]++;
    } else 
    { 
      charCount[char] = 1; 
    } 
  }

  let result = ""; 
  for(let i = 0; i < word.length; i++)
  { 
    let char = word[i]; 
    if(charCount[char] > 1)
    { 
      result += ")"; 
    } 
    else { 
      result += "("; 
    } 
}
return result; 
}
```
[29 Kata](https://www.codewars.com/kata/n-th-fibonacci)
```javascript
function nthFibo(n) { 
  if (n === 1) { 
    return 0; 
  } else if (n === 2) { 
    return 1; 
  } else { 
    let a = 0; 
    let b = 1; 
    let result = 0; 
    for (let i = 3; i <= n; i++) { 
      result = a + b; 
      a = b; 
      b = result; 
    } 
    return result; 
  } 
}
```
[30 Kata](https://www.codewars.com/kata/multiples-of-3-or-5)
```javascript
function solution(number){ 
  if(number < 0){ 
    return 0; 
  }
  let sum = 0;
  for(let i = 1; i < number; i++){ 
    if(i % 3 === 0 || i % 5 === 0){ 
      sum += i; 
    } 
  }
  
  return sum; 
}
```
## <center>_Вывод_</center>
Таким образом, я повторил и изучил работу с циклами. Также закрепил навык создания собственных функций в JavaScipt.