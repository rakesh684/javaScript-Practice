function sevenBoom(arr) {
	const result=arr.filter(arr=>
        arr===7
    )
    // console.log(result)
    if(result==""){
        console.log("there is no 7 in the array")
    }
    else{
        console.log("Boom")
    }
}
sevenBoom([2,3,4,5,7,7])