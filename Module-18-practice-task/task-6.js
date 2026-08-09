/**
 * todo: Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
 * * Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
 * * Input:  
 * * promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
 * * Output: 
 * * { name: "Rafi", title: "Senior Dev" }
 * * (original object still has title: "Junior Dev")
 * * 
 */

let promoteEmployee =(employee, newTitle) => {
    // console.log( employee, newTitle);

    let modify = {...employee}
    let {name, title} = modify;
     let output = {name,title :newTitle}
   return output;

}

let originalArray = { name: "Rafi", title: "Junior Dev" }
console.log(promoteEmployee(originalArray, 'Senior Dev'));
console.log(originalArray);