// todo:        Module no - 18.4              topic :   Object and array destructuring, API response extractor and variable swap  



/**
 * problem no - 7. nested Response ExtraCtor : 
 * Extract Specific fields from a neste API -like Response Object using 
 * destructuring, with  renaming + default value.
 * 
 * Example: { user : {name:'rafi', age: 22}}  -> Extract name as userName , default age = 18 if missing .
 */

// amra jeta shikhlam : destructuring nested object.  and default value set in destructuring variable.

let responseExtractor = (obj) => {
    let {user :{name: myName , age = 18}  } = obj;
    // console.log(name , age );
    return {myName,age}   // {} er vetore return korchi, ty output object hisebe dekhabe.  {myname:'rafi, age: 18}

}

 console.log(responseExtractor({ user : {name:'rafi', }}));
 console.log(responseExtractor({ user : {name:'Ashraful islam', age: 20 }}));
 console.log(responseExtractor({ user : {name:'Md Ashraful islam', age: 21 }}));









/**
 *  Problem - 8.   Swap * Rest Extractor. 
 * Swap to Variables and extract first/rest elements from an Array
 *  using destructuring, no temp variable.
 * 
 * topic: 1. Example : [a,b] = [b,a].
 * topic: 2. Example: [ first, ...rest] = [10, 20, 30, 40] --> first =10 , rest=[20,30,40]
 * 
 */

// topic: 1.  a= 5; b = 10.  ekhun amader value gulo swap korte hobe. 

// let a =b ; and let b = a ;   ---> a = 10;  b= 10. wrong ❌ 


 let a = 5;
 let b = 10;

 // traditional way: 
let temporal = a;

a =b; 
b= temporal;
console.log(a,b);
console.log(` value of a =${a} .    value of b ${b}`);


// destructuring way:  any value swap use destructuring.

let x = 10; 
let y  = 20;

[y, x] = [x, y];
console.log(` The value of x = ${x} and  The value of y = ${y}  `);



//* topic :  2. 

let numbers = [12, 33, 44, 55, 66,77];

let [ fast,second, ...rest] = numbers;
console.log(fast , second,  rest);