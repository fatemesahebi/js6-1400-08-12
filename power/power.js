function Power(num,power){
    //check conditions
    if(typeof num!= 'number'|| typeof power != 'number') return ('please insert two number')

    //algorithm
    if(power===0) return 1
    return num*Power(num,power-1)
}

console.log(Power(2,3))