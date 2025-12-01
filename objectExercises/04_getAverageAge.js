const getAverageAge = (arr) => {
    const totalAge = arr.reduce((ageAcc, currentPerson) => {
        ageAcc += currentPerson.age;
        return ageAcc;
    }, 0)

    return totalAge / arr.length;
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28


/*
    BELOW IS THE PREFERRED SOLUTION


    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    }

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    alert( getAverageAge(arr) ); // 28
    

*/