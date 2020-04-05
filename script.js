'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answerFirst = prompt('Введите обязательную статью расходов в этом месяце', '');
let answerSecond = prompt('Во сколько обойдется?', '');
let answerThird = prompt('Введите обязательную статью расходов в этом месяце', '');
let answerFourth = prompt('Во сколько обойдется?', '');

appData.expenses[answerFirst] = answerSecond;
appData.expenses[answerThird] = answerFourth;

alert(appData.budget / 30);



/*Ответы на вопросы к заданию:
1. В JS существует семь типов данных;
2. console.log();
3. Оператор && возвращает true только тогда, когда оба операнда имеют значение true, оператор || возвращает true, если хотя бы один из операндов имеет значение true.
*/