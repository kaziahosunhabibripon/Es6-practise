function add(num1, num2 = 0){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
console.log(total);

const firstName = "Justin";
const lastName = "Langer";
const fullName = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName} ${20+30} is a good boy.`
console.log(fullName2);