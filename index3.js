let developer1={

fname:"jhon",
sname:'cena',
age:45,
location:"USA",
pincode:502032

role:{primaryskill:"front end",secondaryskill:"backend"}

}

//Deep COPY
/*let developer2=Object.assign({},developer1)

developer2.fname="Joshi"
developer2.sname="vinay" */

//Nested OBJECT

let developer2=JSON.parse(JSON.stringify(developer1))

developer2.role.primaryskill="java"

developer1.role.secondaryskill="DQL"
console.log(developer2)
console.log(developer1)