const person ={name:'JAck William', age: 27, job:'faceboook', gfName:'Ema Watson', friend:"Tom Hank"};
// const gfName = person.gfName;
// const job = person.job;
const {job, gfName} = person;
// const gfName = person.gfName;

// console.log(gfName, job);
// console.log(gfName, job);
const complexObject ={
    name: 'abc',
    info:{
        address: " Kola bagan",
        leader: 'Tiger',
    }
}
// const friends = ['Sakib Khan',' Sharuk Kahn', "Amir Khan", "Salman khan"];
// const [first, next,...rest] = friends;

const {leader} =complexObject.info;
console.log(leader);