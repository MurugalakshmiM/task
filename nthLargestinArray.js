let array = [12,52,6,90,7,3,1,4,0,100];
let first=0,required=1;
for(let k=0; k<4; k++){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]<array[j]){
                if(array[j]>first )
                if(k>0){
                    if(array[j]<required){
                        first=array[j];
                    }
                } else{
                    first=array[j];
                }  
            }
        }
    }
    required=first;
    first=0;
}
console.log(required);