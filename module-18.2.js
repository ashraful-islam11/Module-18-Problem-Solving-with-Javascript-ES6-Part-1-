// todo:        Module no - 18.2            topic : Default parameters and spread/rest, total calculator and array merge

/**
 * *     problem no - 3. Flexible total calculator:
 * calculateTotal (... prise) using rest params, sums any number of prices.
 * example : calculateTotal ( 0, 100, 200, 300) -> 600
 * example : calculateTotal ( 10, 100, 200) --> 270   ( 10 = discount %)
 */

  let prise = (discount, ...prises) => {
    //   console.log(discount, prises);

      let calculateSumUseReduce =  prises.reduce((accumulator, element) => accumulator + element, 0);
    //   console.log(calculateSumUseReduce);

      let calculateDiscount = (calculateSumUseReduce * discount ) / 100;
      let finalDiscount = calculateSumUseReduce - calculateDiscount ;
    //   console.log(finalDiscount);

    return ` After discount your total bill is :  ${finalDiscount} `;


  }
//   console.log(prise(10, 100, 200, 300,));
//   console.log(prise(10, 100, 200, 300,600));
//   console.log(prise(10, 100, 200, 300, 400));




/** 
 * * problem no : 4 :--
 * *   merge & deduplicate Arrays merge two arrays and remove duplicates using spread + set.
 * example : [1,2,3] + [2,3,4] +[1,2,3,4] */


let firstArray = [11, 22, 33, 44, 55];
let secondArray = [33, 44, 66, 77, 11, 99, 88];

// marge : firstArray and SecondArray

let marge = [...firstArray , ...secondArray];
console.log(marge);

// remove the duplicates number,
// let newArray = []
// for( let i = 0; i<marge.length; i++){
//     if(!newArray.includes(marge[i])){
//         newArray.push(marge[i]);
      
//     }
// }
// console.log(newArray);

// spread operator and new Set .

let newArray =[... new Set(marge)];          //  new Set method diye toh ,duplicates gulo alada korlam.
console.log(newArray);


let willConvertNewArray = Array.from(marge)
console.log(willConvertNewArray);




