const fruits=["banana","orange","apple","cherry"]

let fruits1=fruits.map((value)=>{

return value.split("").reverse().join("")


})


console.log(fruits1)
console.log(fruits)