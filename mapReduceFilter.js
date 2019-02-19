let array = [1,2,3,4,5,6,7,8,9,10];
let reducedarray = array.reduce( ( accumulator, items ) => { 
    if(items %2 != 0){
        accumulator.push(items*3)
    }
    return accumulator;
},[]);
console.log(reducedarray);
