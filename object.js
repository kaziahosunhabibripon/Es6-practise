const students = [
    {id: 21, name: 'omar sunny' },
    {id: 31, name: 'Mannnnna'},
    {id: 41, name:'Moyori'},
    {id: 71, name: 'Depjol'}
];

// const student = [];
// for(var i = 0; i< students.length; i++){
//     const Names = students.name;
//     student.push(students[i]);
// }
// console.log(student);
const names = students.map(s => s.name);    
const ids = students.map(s => s.id);     
const bigger = students.filter(s => s.id>40);  
const bigger1 = students.find(s => s.id>40);   
console.log(ids);
