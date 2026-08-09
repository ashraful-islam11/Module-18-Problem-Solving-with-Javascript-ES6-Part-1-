// todo:    Module no - 18.1        topic: Fixing the order status bug and receipt generator

/**
 * Problem 1 :    fix the scope bug. 
 *    Rewrite use ing let to fix the output 
 */

// var status = 'Order Placed';
// for ( var i = 1; i<= 3 ; i++){
//      var status = 'processing item ' + 1;
//      console.log(status);
// }
// console.log('Final Status: ', status);





let status = 'Order Placed';

for ( let i = 1; i<= 3 ; i++){
     let status = 'processing item ' + 1;
     console.log(status);
}
console.log('Final Status: ', status);








/**
 *  problem no - 2:   Receipt |Generator (Template strings )
 *  Build a receipt generator using template strings - taka item name, 
 *  price, qty as input , output formatted multiline receipt. 
 * 
 *  example : input ('pen', 20, 3 ) -> Output "pen x3 = 60 Taka"
 *  */

function receiptGenerator ( name, price, qty){
    // console.log(name, price, qty);
    return `${name} x${qty} = ${price * qty} Taka`
}

console.log(receiptGenerator('pen', 20 , 3));
console.log(receiptGenerator('book', 200 , 5));
console.log(receiptGenerator('pencil', 60 ,  3));