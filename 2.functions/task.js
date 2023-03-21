function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum +=arr[i]; 
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, item) => acc + item, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let res = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return res;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}



function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let element of arrOfArr) {
    const res = func(...element);    
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}
