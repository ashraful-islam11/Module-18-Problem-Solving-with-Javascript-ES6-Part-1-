// todo:        Module no - 18.3            topic: Arrow functions, calculate shipping and get grade.

/** 
 * *  problem no : 5.  Arrow function with Default parameters & logic 
 *    write an arrow function that calculates shipping cost based on order amount. Free shipping if amount >= 1000, otherwise charge o default free 60 taka  .
 * 
 * example : calculateShipping(1200);           --> "Free Shipping".
 * example : calculateShipping(500));           --> "Shipping fee: 60 taka".
 * example : calculateShipping(500, 100);           --> "Shipping Fee : 100 taka"
 * */

let calculateShipping = ( orderAmount , discount = 60) => {
    // if(orderAmount >= 1000){
    //     return "Free Shipping";
    // }
    // else{
    //     return `Shipping fee: ${discount} taka`
    // }

//   *    ternary operator use korlam.
    return orderAmount >= 1000 ? 'Free Shipping': `Shipping fee : ${discount} taka`;
}

console.log(calculateShipping(1000));
console.log(calculateShipping(500));
console.log(calculateShipping(500,100));






/**
 *  problem : 6.   Arrow Function with Multiple Conditions
 *  write an arrow function that assigns a grade based on marks.
 *  90+ -> 'A+' , 80-89 -> 'A' , 60 - 79 -> 'B', below -60 -> " Fail"
 * 
 * example: getGrade(95) -> "A+",
 * example: getGrade(82) -> "A",
 * example: getGrade(45) -> "Fail",
 * 
 *  */

// myPractice: 

let getGrade = mark => {
    // if(typeof mark !== 'number'){
    //     return 'Invalid'
    // }


    // if( mark >= 90){
    //     return 'A+';
    // }
    // else if(mark >= 80 ){
    //     return 'A';
    // }
    // else if( mark >= 60 ){
    //     return 'B';
    // }
    // else {
    //     return 'Fail' 
    // }

    // * use ternary operator: 

    return (typeof mark !== 'number' || mark > 100) ? 'Invalid' : mark >=90  ? 'A+' : mark >= 80 ? 'A' : mark >= 60 ? 'B' :'Fail'
}

console.log(getGrade( 90));
console.log(getGrade( 89));
console.log(getGrade( 59));
console.log(getGrade( []));
console.log(getGrade( 'ashraful islam'));
console.log(getGrade(101));


  