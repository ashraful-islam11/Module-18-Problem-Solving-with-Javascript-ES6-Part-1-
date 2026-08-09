/**
 * todo: Task 9: splitFirstRest(arr) — Rest Syntax 
 * * Return { first, rest } where first is the first element and rest is an array of all remaining elements.
 * * Input:  [10, 20, 30, 40]
 * * Output: { first: 10, rest: [20, 30, 40] }
 * * 
 */
 // mt array pathale , 
// if (!Array.isArray(array) || array.length === 0) {
//         return { first: undefined, rest: [] };
//     }
let splitFirstRest = (array) => {
    let [ first, ...rest] = array;
    return { first, rest}
    
} 

console.log(splitFirstRest([10, 20, 30, 40]));