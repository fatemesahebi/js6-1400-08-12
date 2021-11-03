function contain(obj,prm){
    //check conditions
    if (!(obj instanceof Object)) return ('please insert an object')

    //algorithm
    if (!(obj instanceof Object) && obj.key!==prm) return false
    for (let key in obj){
        if (obj[key]===prm) return true
        if (obj[key] instanceof Object) return contain(obj[key], prm)
    }
    return false
}

const object = {
    d: {
        c: {
            b: {
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}

// console.log(contain(object,20))

let obj2={
    num:20,
    a:{
        b:{
            c:{
                d:{
                    num:10,

                }
            }
        }
    }

}
obj3='adf'
console.log(contain(obj2,40))
console.log(contain(obj2,20))
console.log(contain(obj2,10))
console.log(contain(obj3,10))
