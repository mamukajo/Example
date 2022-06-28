//reading data from text filr using async/await

import * as fs from 'fs'

const loadFile=async()=>
{

const data=await fs.promises.readFile('./text.txt',{encoding:'utf-8'})

console.log(data)


}

loadFile();