// type of and isarray  //

const name = 'Rakib';
const age = 26;
const phone = {
    phoneName: 'samsung',
    model: 'j7',
    publish: 2022,
    price: 20000
}
function sum(num1, num2) {
    const total = num1 + num2;
}
const friends = ['nayeem', 'rabbani', 'romon', 'ashik'];
const moreFriends = ['rana', 'nadim']

// console.log(typeof phone);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof sum);

// console.log(Array.isArray(friends));


// -------------includes-------------- //


// const isThere = friends.includes('nayeem');
// console.log(isThere);

//--------- concat------------//

const adjust = friends.concat(moreFriends);
console.log(adjust);