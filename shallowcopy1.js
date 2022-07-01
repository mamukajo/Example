var fruits=["banana",'orange',"apple"]
var fruitscopy=fruits;
var fruitscopy=Object.assign([...fruits])
fruitscopy.push("pappaya")
console.log(fruitscopy)
console.log(fruits)
