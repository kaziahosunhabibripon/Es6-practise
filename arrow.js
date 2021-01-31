// function doubleIt(num){
//     return num*2;
// }
// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give4 = () => 5;
const result = add(5, 10);
const result2 = give4();


const bisahl =( x, y) =>{
    const sum = x + y ;
    const diff = x -y ;
    const result = sum * diff;
    return  result;
}
const result3 = bisahl(7, 5);
console.log(result3);