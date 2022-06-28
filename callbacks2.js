//Reading the file data using callbacks
import * as fs from 'fs'
fs.readFile('./text.txt',{encoding:'utf-8'},(err,data)=>
{
if(err)
{
console.error("ERROR")
console.log(err)
}
else
{
console.log(data)
console.log("read sucess")
}


})

