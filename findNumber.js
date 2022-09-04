function sevenBoom(arr) {
    const result=arr.some(element=>element.toString().split('').includes('7'))
    if(result==true){
        console.log("Boom")
    }
    else{
        console.log("there is no 7 in the array")
    }
	// for(let el of arr) {
    //     if(el.toString().split('').includes('7')) {
    //         return console.log("Boom!")
    //     }
    // }
    // return console.log("there is no 7 in the array")
    }
   
sevenBoom([2,3,4,5,7])