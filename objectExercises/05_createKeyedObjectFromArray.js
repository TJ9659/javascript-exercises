function groupById(users){
    
    const groupUsers = users.reduce((acc, currentUser) => {
        acc[currentUser.id] = currentUser;
        
        return acc;
    }, {})
    
    return groupUsers;
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/


/*
    BELOW IS THE PREFERRED SOLUTION


    function groupById(array) {
        return array.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {})
    }

*/