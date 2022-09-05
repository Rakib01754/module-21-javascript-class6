const phones = [
    { name: 'oppo', model: 'A1k', ram: 6, camera: '12mp', price: 17000 },
    { name: 'samsung', model: 'j7', ram: 4, camera: '15mp', price: 13000 },
    { name: 'xiaomi', model: 'note 7', ram: 6, camera: '12mp', price: 12000 },
    { name: 'realme', model: 'c21', ram: 6, camera: '10mp', price: 22000 },
    { name: 'itel', model: 'm96', ram: 6, camera: '16mp', price: 25000 },
    { name: 'walton', model: 'i50', ram: 6, camera: '12mp', price: 19000 },
    { name: 'iphone', model: '5s', ram: 6, camera: '10mp', price: 35000 }
]

function expensivePhone(phones) {
    let expensive = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        // console.log(phone);
        if (phone.price > expensive.price) {
            expensive = phone;
        }
    }
    return expensive;
}

const theHighest = expensivePhone(phones);
console.log(theHighest);