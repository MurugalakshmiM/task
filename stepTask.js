<script>
    let array=[];
    let steps = prompt("total steps");
    let jump = prompt("steps to be jumped");
    let temp;
    for( let i = 1; i<=steps;i++){
        if(i<jump){
           array[i]=1;
        } else if(i==jump){
            array[i]=2;
        } else {
            array[i]=array[i-1]+array[i-jump];
        }
        temp = array[i];
    }
    alert(temp);

</script>