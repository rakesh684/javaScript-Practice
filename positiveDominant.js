function positiveDominant(arr){
    const result=new Set(arr)
    const arr3=[...result]
    let count1=0
    let count2=0
    for(let i=0;i<arr3.length;i++){
      arr3[i]>0?count1++:count2++
    }
    count1>count2?console.log("true"):console.log("false")
}
positiveDominant([1, 1, 1, 1,2,5,3,3,3,-3, -4])
