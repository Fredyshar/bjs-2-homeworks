"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant === 0) {
    let res = -b/(2*a);
    arr.push(res);
  } else if (discriminant > 0) {
    let res1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let res2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(res1);
    arr.push(res2);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } 
  let P = (percent / 100) / 12; /*Месячная процентная ставка*/
  let amountOfCredit = amount - contribution;
  let monthlyPayment = amountOfCredit * (P + (P / ((Math.pow((1 + P), countMonths) - 1))));
  let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
  return totalAmount;
}
