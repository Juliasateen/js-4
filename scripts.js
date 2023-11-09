"use strict";

/** task 1 **/

{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
         console.log(arr[i]);
     }
}

/** task 2 **/

 {
     let number;

     let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

     for (let i = 0; i < arr.length; i++) {
         number = arr[i];
         // console.log(number, typeof number);

         if (number > -10 && number < -3 && number < 0)
         console.log(number);
    }
 }

/** task 3 **/

{
     let arr1 = [];
     let arr2 = [];
     let result = 0;

     for (let i = 23; i <= 57; i++) {
         arr1.push(i);
         result += i;

     }
     console.log(arr1);
     console.log(result);


     let j = 23;
     while (j <= 57) {
         arr2.push(j);

         j++;
     }
     console.log(arr2);
}

/** task 4 **/
{
     let number;
     let numberString = ['10', '20', '30', '50', '235', '3000'];

     for (let i = 0; i <= numberString.length; i++) {
         number = numberString[i];

         if (number.startsWith('1') || number.startsWith('2') || number.startsWith('5')) {
         console.log(number);
         }
     }
}


/** task 5 **/

{
     let daysWeek = [];

     daysWeek[0] = 'ПН';
     daysWeek[1] = 'ВТ';
     daysWeek[2] = 'СР';
     daysWeek[3] = 'ЧТ';
     daysWeek[4] = 'ПТ';
     daysWeek[5] = 'СБ';
     daysWeek[6] = 'ВС';

     console.log(daysWeek);

     for (let i = 0; i < daysWeek.length; i++) {

         // if (daysWeek[i] === 'СБ' && daysWeek[i] === 'ВС') {
         //     document.write(<b>${daysWeek[i]}</b>);
         // }
         console.log(daysWeek[i]);
     }
}


/** task 6 **/

{
     let products = ['Хлеб', 'Молоко', 'Сметана', 'Шоколад']
     console.log(products);

     products.pop();
     console.log(products);

     products.push('Конфеты');
     console.log(products);

     console.log(products[products.length - 1]);

}

/** task 7 **/
{
     let numbers = [];

     let num;
     let i = 0;
     let numbersSort;


     while (true) {

         num = +prompt('Введите любое число.');
         console.log(num, typeof num);

         if (num == '') {
         break;
         }

         if (isNaN(num)) {
             prompt('Ошибка ввода! Введите любое число.');
             continue;
         }

         i++;

         numbers.push(num);
     }

     console.log(numbers, 'массив с введенными числами');

     function compareNumbers(a, b) {
         return a - b;
       }

     numbersSort = numbers.sort(compareNumbers);

     console.log(numbersSort, 'отсортированные числа');
}

/** task 8 **/

{
     let data = [12, false, 'Текст', 4, 2, -5, 0];
     console.log(data);

     let dataReverse = [];

     data.reverse();
     console.log(data);

     let i = data.length - 1;

     while (i >= 0) {
         console.log(data[i]);
         dataReverse.push(data[i]);

         i--;
     }
         console.log(dataReverse, 'массив reverse');
 
}

/** task 9 **/

{
    let empty = 0;

    let arrNumbers = [5, 9, 21, , , 9, 78, , , , 6];
    console.log(arrNumbers);
    console.log(arrNumbers[3], typeof arrNumbers[3]);

    for (let i = 0; i < arrNumbers.length; i++) {
        if (typeof arrNumbers[i] === 'undefined') {
            empty++;
        }
    }
    console.log(empty, 'количество пустых элементов');
}








