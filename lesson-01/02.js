// Создай рандомное число при помощи
//
// let number1 = Math.floor(Math.random() * 100)
//
//  а затем проверь их выводя в консоль: «[вставь сюда полученное число] :Это четное число» или
//  «[вставь сюда полученное число] :Это нечетное число». С каждой перезагрузкой страницы у тебя будет
//  новое число.

let number1 = Math.floor(Math.random() * 100);
console.log(number1 % 2 === 0 ? `${number1}: Это четное число` : `${number1}: Это нечетное число`);
