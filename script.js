/****************************************** Метод console.log() *************************************** */

console.log(1); /* Это способ вывода информации в console браузера для разработчика */


//*************************************** Типы данных **************************************//

console.log('string'); /* Строковый тип данных */
console.log(22); /* Числовой тип данных */
console.log(true); /* Булевое значение true = истина */
console.log(false); /* Булевое значение false = лож */

var name = 'Name';
var year = 35;
var boolean = true;
var und; /* Отдаст в итоге undefined (не определено) */

console.log(name); /* Отдаст в итоге Name (строковый тип данных) */
console.log(year); /* Отдаст в итоге 35 (числовой тип данных) */
console.log(boolean); /* Отдаст в итоге true (boolean) */
console.log(und); /* Отдаст в итоге undefined (не определено) */

console.log('Я ' + name + ' мне ' + year + ' лет!'); /* операция склеивания данных КОНКАТЕНАЦИЯ  */

var allInfo = 'Я ' + name + ' мне ' + year + ' лет!';
console.log(allInfo);

console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(10 / 3);
console.log(10 % 3);  /* ОСТАТОК ОТ ДЕЛЕНИЯ */

console.log('6 + 3 = ' + (6 + 3));
console.log('6 - 3 = ' + (6 - 3));
console.log('6 * 3 = ' + 6 * 3);
console.log('6 / 3 = ' + 6 / 3);
console.log('6 % 5 = ' + 6 % 5);

var str = prompt('Введите своё имя'); /* показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный текст в поле ввода */
alert(str); /* показывает сообщение. */

var num = +prompt('Введите число');
alert(num);
console.log(num);