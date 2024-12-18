//1
alert( null || 2 || undefined); // Выводит 2 ( "||" возвращает первое истинное значение из списка операндов)
//2
alert( alert(1) || 2 || alert(3) ); // Выводит 1, затем 2
//3
alert( 1 && null && 2 ); // Выводит null
//4
alert( alert(1) && alert(2) ); // выводит 1, затем undefined
//5
alert( null || 2 && 3 || 4 ); // Выводит 3
//6
var age = 20;
if(age >= 14 && age <= 90)
    alert(`Переменная ${age} между [14;90]`);
//7
var age = 10;
if(!(age >= 14 && age <= 90))
    alert(`1. Переменная ${age} НЕ находится между [14;90]`);
if(age <= 14 && age >- 90)
    alert(`2. Переменная ${age} НЕ находится между [14;90]`);
//8
if (-1 || 0) alert( 'first' ); //выполнилось, пишет "first"
if (-1 && 0) alert( 'second' ); //не выполнилось
if (null || -1 && 1) alert( 'third' ); //выполнилось, пишет "third"
//9
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
//10
var i = 3;
while (i) {
  alert( i-- );
} //последнее значение выведет "1", тк цикл не выполняется ещё раз с нулём
//11
alert("Префиксный вариант ++i");
let i = 0;
while (++i < 5) alert( i ); //были выведены числа: 1, 2, 3, 4.

alert("Постфиксный вариант i++");
i = 0;
while (i++ < 5) alert( i ); //были  выведены числа: 1, 2, 3, 4, 5.
//12
alert("Постфиксная форма:");
for (let i = 0; i < 5; i++) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.

alert("Префиксная форма:");
for (let i = 0; i < 5; ++i) alert( i ); //Будут выведены числа: 0, 1, 2, 3, 4.
//13
for(let i = 2; i <= 10; i+=2)
    alert(i);
//14
var i = 0;
while(i < 3)
{
    alert( `number ${i}!` );
    i++;
}
//15
let number = prompt("Введите число");
while(number <= 100 && number != null)
{
    number = prompt("Введите число");
}
//16
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
//17
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
//18
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
//19
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
//20
function twenty() {
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
}
