let display={
details:function(skillset1,skillset2)
{
return this.fname+""+this.sname+""+this.age+skillset1+""+skillset2
}
}
let student1={
fname:"Joshi",
sname:"Vinay",
age:30,
}
let student2={

    fname:"Jhon",
    sname:"cena",
    age:45
}

//Apply
let result1=display.details.apply(student1,["JavaScript","ES6"])

//Call
let result2=display.details.call(student2,"JavaScript","ES6")

console.log(result1)
console.log(result2)
