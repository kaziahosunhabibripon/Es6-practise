class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Z School";
    }

}

const student1 = new Student(12, "Suvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(29, "Bappy");
console.log(student1.name, student2.id, student3);