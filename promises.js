let myPromise=new Promise((resolve,reject)=>{

    let num1=[2,1,3,4,3,4]

    num2=num1.every((value)=>{

return value>0

    }) 

    if(num2==true)
    {

resolve("there are numbers divided by 2 in list");

    }
else{

    reject("wrong condition")
}

})

myPromise.then(()=>{console.log("sucess")}).catch((err)=>{console.error("fail");})


