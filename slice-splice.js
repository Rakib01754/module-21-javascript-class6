const numbersArray = [10, 14, 25, 47, 56, 89, 62, 20];

// take some items from an array by using slice //

// const copy = numbersArray.slice(3, 6);
// console.log(copy);
// console.log(numbersArray);

// take out or remove and replace  some items from an array by using splice  //

const removeItem = numbersArray.splice(0, 5, 5, 2, 3, 4, 7, 8);
console.log(removeItem);
console.log(numbersArray);