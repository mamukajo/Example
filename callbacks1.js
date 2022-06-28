import fetch from 'node-fetch';

setTimeout(()=>{console.log("waited for 1 Second")},1000)


setTimeout(()=>{console.log("3");
                setTimeout(()=>{console.log("2");
                    setTimeout(()=>{console.log("1")},
                                1000)},
                        1000)},
                    1000)
                   

 fetch("https://pokeapi.co/api/v2/pokemon/ditto")
 .then((data)=>{console.log('data')})
 
 .catch((err)=>{console.log("failed")})