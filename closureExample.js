//closure examples
function createBase(x){
    return function (y){
        return (x+y);
    };
}
var addsix = createBase(6);
console.log(addsix(20));

function add(x){
    return function add1(y){
        return x+y;
    };
}
var a = add(2)(3);
console.log(a);

