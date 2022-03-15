'use strict';

let printForecast = function (arr) {
  let i = 0;
  let strNew = '';
  while (i < arr.length) {
    strNew += `${arr[i]}°C in ${i + 1} days ... `;
    i++;
  }
  console.log(strNew);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
