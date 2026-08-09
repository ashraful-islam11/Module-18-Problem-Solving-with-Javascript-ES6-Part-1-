/**
 * todo:Task 5: getEmployeeDept(employee) — Nested Destructuring 
 * * Given { name, job: { title, department } }, return { title, department } using nested destructuring.
 * * Input:  
 * * { name: "Nadia", job: { title: "PM", department: "Product" } }
 * * Output: 
 * * { title: "PM", department: "Product" }
 * * 
 */

let getEmployeeDept = ( employee)=>{
      // console.log(employee);
      return employee.job;

}

console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }));