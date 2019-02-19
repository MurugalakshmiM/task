let a = [1,2,3,4,9,10];
let b = [3,1,8,7,9,6,5];
let micarray = a.concat(b);
let union = new Array();
let set = new Set(micarray);
for(let i of set){
    union.push(i);
}
console.log("union :" +union);
let c = new Array();

for(let i=0; i<micarray.length ;i++){
    for(let j=i+1; j<micarray.length; j++){
        if(micarray[i]==micarray[j]){
            c.push(micarray[i]);
        }
    }
}
console.log("intersection :"+c);
function difference(a,b){
    let x = a.concat([]),
        y = b.concat([]);
    for(let i=0; i<y.length;i++){
        for(let j=0;j<x.length;j++){
            if(y[i]===x[j]){
                x.splice(j,1);
            }
        }
    }
    return x;
}
let differencea = difference(a,b),
    differenceb = difference(b,a);
console.log("a-b :"+differencea);
console.log("b-a :"+differenceb);
