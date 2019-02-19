let a = [1,2,3,4,9,10,10],
    b = [3,1,8,7,9,6,5],
    micarray = a.concat(b),
    set = new Set(micarray),
    union =[...set],
    c = new Array();
console.log("union :" +union);
c = a.reduce((accumulator,items) => {
    if(b.includes(items)){
        accumulator.push(items);
    }
    return accumulator;
},[]);
console.log("intersection :"+c);
function difference(a,b){
    let x = a.reduce((accumulator,items) => {
        if( !( b.includes(items) ) ){
            accumulator.push(items);
        }
        return accumulator;
    },[]);
    return x;
}
let differencea = difference(a,b),
    differenceb = difference(b,a);
console.log("a-b :"+differencea);
console.log("b-a :"+differenceb);
