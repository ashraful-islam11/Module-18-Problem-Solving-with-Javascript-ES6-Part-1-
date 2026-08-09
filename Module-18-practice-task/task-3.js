/**
 * todo: Task 3: getLowestPrice(prices) — Spread Operator 
 * * Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
 * * Input:  
 * * [340, 120, 560, 90]
 * * Output: 
 * * 90
 * * 
 */

 let getLowestPrice = (prices) => {
    // console.log(prices);
    let spread = [...prices];
    let lowest = Math.min(...spread);
    // console.log(lowest);
    return lowest;

 }

 console.log(getLowestPrice([340, 120,33, 560, 90]));
 console.log(getLowestPrice([340, 120, 560, 90,0]));
 console.log(getLowestPrice([10, 3, 5, 3, 2, 1]));