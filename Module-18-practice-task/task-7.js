/**
 * todo: Task 7: sumAllPrices(prices) — for...of 
    * * Given an array of numbers, return their sum using for...of.
    * * Input:  [100, 250, 75]
    * * Output: 425
    * * 
 */

let sumAllPrices = ( prices) => {
    console.log(prices);
    let sum = 0;
    for( let price of prices){
         sum = sum+ price;
    }
    return sum;
}

console.log(sumAllPrices( [100, 250, 75]));