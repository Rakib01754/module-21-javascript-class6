const numbers = [12, 15, 17, 16, 23, 12, 12, 52, 14, 17, 98, 78, 23, 23, 52];

function removeDuplicate() {

    const uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let index = numbers[i];
        if (uniqueNumbers.includes(index) === false) {
            uniqueNumbers.push(index);

        }
    }
    return uniqueNumbers;
}
const result = removeDuplicate(numbers);
console.log(result);
