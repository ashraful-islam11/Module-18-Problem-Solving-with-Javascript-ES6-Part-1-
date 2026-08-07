// todo:    Module no - 18. 5       topic : Object methods and optional chaining, most expensive product finder.
/**
 * problem no : 9 : Most Expensive Product. 
 * Given an object of product prices, use object . keys() or object.entries() + Loop to find the most expensive product.
 * 
 * Example : {pen: 20, book:150, bag: 500} -> 'bag'
 * 
 */


let getExpensiveProduct = (product) => {
    // console.log(product);
    let expensivePrise = 0;
    let expensiveProductName = '';
    let keys = Object.keys(product);
    // console.log(keys);
    for( let key of keys){
        // console.log(key, product[key]);
        if( expensivePrise < product[key]){
            expensivePrise = product[key];
            expensiveProductName = key
        }

    }
    // console.log(expensivePrise);
    return expensiveProductName
}

// console.log(getExpensiveProduct({pen:20, book:150, bag: 500, laptop: 8000, smartPhone : 20000}));








/**
 * * problem no -10:   Safe Nested Access.
 * Safely access deeply nested optional data using ? . and  ?? without throwing errors.
 * 
 * Example : user?.address?.city ?? 'city not found ' when address is undefined.
 */

 let user1  = { 
    name: 'Ashraful islam',
    address : {
        city: 'nator'
    }
 }


 // optional chaining :    jodi address na thake, tobe toh error dibe, ty age thekei safe thakar jonno, ? optional chaining use korbo.
let getCity = (user) => {
    // console.log(user);
    // return user.address.city;
    return user.address?.city;
}

console.log(getCity( user1));


// amra jokhun API theke data pabo, tokhun sehi data alomelo hote pare. data nao thakte pare, ty optional chaining use korbo. ? 
