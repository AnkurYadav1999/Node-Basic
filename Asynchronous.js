function start(){
    console.log("execution starts");
}

function BLogic(){

let data="Execution is happening";
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data)
        resolve();
    },2000)
})

}

function End(){
console.log("End execution");
}



async function Process(){
start();
await BLogic();
End();
}

Process();