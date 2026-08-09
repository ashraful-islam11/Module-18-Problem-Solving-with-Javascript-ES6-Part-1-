// todo:        Module no - 18.6            topic: Real-world challenge, student result processor and cart summary

/**
 * *        problem no : 11    .    Add Grade to Each Student (without Changing Original)
 * 
 *          you hav an array of student objects, each with name and marks.
 *          create a NEW array where every student also has a "grade" field.
 *          based on their marks. The ORIGINAL array must stay exactly the same.
 * 
 * 
 *      Grading rule :
 *          marks   >= 90 ---> "A"
 *          marks   >= 80 ---> "A"
 *          marks   >= 60 ---> "B"
 *          below ---> "Fail"
 * 
 * 
 *      Input: 
 *          [
 *             {name : 'ashraful', marks : 85}
 *             {name : 'Rohim', marks : 45}
 *          ]
 * 
 *     output (new array):
 *          [
 *             {name : 'ashraful', marks : 85, grade: 'A'}
 *             {name : 'Rohim', marks : 45 ,   grade : 'fail' }
 *          ]
 *     Original array must remain untouched (no "grade", field added to it).
 */


  const studentsInfo = [
    { name : 'Ashraful islam', marks: 88},
    { name : 'Ariful islam', marks: 77},
    { name : 'Aminul islam', marks: 63},
    { name : 'Anarul islam', marks: 55}
  ]


  let getStudentGrade = students => {
    // console.log(students);
        // we want  Original array must remain untouched

        let modifyStudents = students.map(student => {
            //* step - 1.
            //   console.log(student);
            // let studentGrade = { name: student.name , marks: student.marks};
            // // console.log(studentGrade);
            // if( studentGrade.marks >= 90){
            //     console.log(studentGrade.grade = 'A+');
            // }
            // else if(studentGrade.marks  >= 80){
            //     console.log(studentGrade.grade = 'A');
            // } else if( studentGrade.marks  >= 60){
            //     console.log(studentGrade.grade = 'B');
            // }
            // else{
            //     console.log(studentGrade.grade = 'Fail');
            // }
            
            // return studentGrade;




            // *  step : 2.     -->   destructuring way:
              let {name, marks} = student;
              
              let studentGrade = {name, marks , grade : addGrade(marks)};
             return studentGrade;
        })
    //    console.log(modifyStudents); 
    return modifyStudents;
}

let addGrade = (marks) => {
    if( marks >= 90){
        return "A+"
    }
    else if( marks >= 80){
        return 'A';
    }
    else if( marks >= 60){
        return 'B';
    }
    else {
        return 'Fail'
    }
}


//   console.log(getStudentGrade( studentsInfo));
//   console.log(studentsInfo);



/**
 *  
 *  *problem : 12.      cart Total Calculator : 
 *  you have an array of cart items, each with a name, price, and qty
 *  (quantity). calculate :
 *   
 *   1. Total number of items in the cart (sum of all qty)
 *   2. Total cost ( sum of price x qty for each item )
 * 
 *  Then print one final message using a template string : 
 *  "Total :X items , Y Taka"
 * 
 * Input: 
 *      [
 *        {name: 'pen', prise: 100, qty : 1},
 *        {name: 'Notebook',  price: 100, qty: 2}
 *     ]
 * 
 * Output: 
 *      "Total : 3 items, 300 Taka"
 */

let products = [
        {name: 'pen', prise: 100, qty : 1},
        {name: 'Notebook',  prise: 100, qty: 2},
        {name: 'headphone',  prise: 500, qty: 2}
];

let cartTotalCalculator = (products) => {
    let totalQuantity = 0;
    let totalPrise = 0; 

    for( let product of products){
          let {name,prise, qty} = product;
        //   console.log(prise,qty);

        totalQuantity += qty;
        // totalPrise = totalPrise + ( prise * qty);
        totalPrise += prise * qty;
      

    }
    // console.log(totalPrise, totalQuantity);
    return `Total : ${totalQuantity} items, ${totalPrise} Taka `

}


// console.log(cartTotalCalculator(products));



//same problem : 

let carsInfo = [
    {name: 'lamborgini' , prise : 2000, quantity : 3},
    {name: 'bmw' , prise : 5000, quantity : 2},
    {name: 'marsitig' , prise : 2000, quantity : 1},
    {name: 'jip' , prise : 20000, quantity : 2},
];

 let calculateCarCost = (cars => {
      let totalCarPrise = 0;
      let totalCarQuantity = 0;
      


      for( let car of cars){
        // console.log(car);
        let {prise, quantity} = car
        // console.log(prise, quantity);
        totalCarQuantity += quantity;
        // totalCarPrise = totalCarPrise + (prise * quantity) ;
        totalCarPrise += prise * quantity;
      }
      return `Total : ${totalCarQuantity} items, ${totalCarPrise} Taka `
 })


 console.log(calculateCarCost(carsInfo));

 