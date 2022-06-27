function student1(name,gender,age)
{
return name+""+gender+""+age

}

function student2(name ,gender,age)
{
    return name+""+gender+""+age

}

function student3(name,gender,age)
{
    return name+""+gender+""+age


}

function display(name,gender,age,callback)
{

return callback(name,gender,age)

}

let result=display("Joshi","Male",36,student1)

console.log(result)