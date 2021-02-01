let bonus = 20; // global  scope
function sum(first, last){
    let result = first + last + bonus;
    console.log(bonus);
    if (result> 9){
        var mood = "Happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
    
    // console.log(result); local scope
}
const output =  sum(3, 9);
console.log(bonus);
console.log(output);
