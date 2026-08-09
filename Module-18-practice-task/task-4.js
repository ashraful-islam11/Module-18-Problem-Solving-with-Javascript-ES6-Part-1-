/**
 * todo: Task 4: swapValues(a, b) — Destructuring 
 * * Return [b, a] using array destructuring assignment, no temporary variable.
 * * Input:  
 * * swapValues(5, 10)
 * * Output:
 * *  [10, 5]
 * * 
 */

let swapValues = (a,b) => {
    
       [b, a] = [a,b];
    //  console.log(a,b);
    return [a,b]
}

console.log(swapValues(10,5));

