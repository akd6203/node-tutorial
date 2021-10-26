const amount = 9;

if(amount<10){
    console.log('Small Number');
}else{
    console.log('Large Number');
}

console.log(`hey it's my first node app!!!`);

// Globals
console.log(__dirname)
console.log(__filename)
console.log(module)

setInterval(()=>{
    console.log('hello');
},1000);