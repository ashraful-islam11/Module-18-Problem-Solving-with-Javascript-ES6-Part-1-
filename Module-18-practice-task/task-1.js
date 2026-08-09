/**
 * todo:    Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
 * *Return the final bill after tax is applied. Default tax rate is 5% when not provided.
 * 
 * *Input:  
 * *calculateBill(1000)
 * 
 * *Output: 
 * *1050
 * 
 * *Input:  
 * *calculateBill(1000, 0.10)
 * 
 * *Output: 1100
 * *
 */

let calculateBill =( amount, taxRate = 5) =>{
      console.log(amount, taxRate);
      let charge = (amount / 100) * taxRate; 
      let totalAmount = amount + charge;
    //   console.log(totalAmount);
    return totalAmount

       
}
console.log(calculateBill( 1000, 10));
console.log(calculateBill( 1000));