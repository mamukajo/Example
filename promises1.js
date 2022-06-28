//Read the file from the data

import * as fs from 'fs'

fs.promises.readFile('./text.txt',{encoding:'utf-8'})
.then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})