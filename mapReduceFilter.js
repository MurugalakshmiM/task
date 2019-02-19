/*let array = [1,2,3,4,5,6,7,8,9,10];
let reducedarray = array.filter((currentValue, index)=>{
    if(currentValue%2 != 0){
       return currentValue;
    }
});
let mulArray = reducedarray.map((currentValue,index)=>{
    return currentValue*3;
})
console.log(mulArray);
*/
let array = [1,2,3,4,5,6,7,8,9,10];
let reducedarray = array.filter((currentValue, index)=>{
    if(currentValue%2 != 0){
       return currentValue;
    }
}).map((currentValue,index)=>{
    return currentValue*3;
})
console.log(reducedarray);