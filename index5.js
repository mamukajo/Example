const display1=

{

    firstname:"jhon",

    lastname:"cena",
    fullname:function()
{
return this.firstname+""+this.lastname
}
}

const studentdetails={
firstname:"Joshi",
lastname:"vinay"
}

let result=display1.fullname.bind(studentdetails)

console.log(result)