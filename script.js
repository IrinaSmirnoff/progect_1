'use strict';

let money, time;

function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    do {
        money = +prompt('Ваш бюджет на месяц?', '');
    } while(isNaN(money) || money == '' || money == null);
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = +prompt('Во сколько обойдется?', '');
        
            if (a && !isNaN(b) && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay + ' руб.');
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Размер суммы накоплений?');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIncom = save/100/12*percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncom);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncom: function () {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую', '');

        if (items == '' || typeof(items) == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        } else {
            appData.incom = items.split(', ');
            appData.incom.push(prompt('Мщжет что-то ещё?', ''));
            appData.incom.sort()
        }
        appData.incom.forEach(function (itemmassive, i) {
            alert('Способы дополнительного заработка: ' + (i + 1) + ' - ' + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}



//цикл while

/*let i = 0;
while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }

    i++;
}
*/


//цикл do...while

/*let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }

    i++;
} while (i < 2);
*/
