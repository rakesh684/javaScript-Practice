function sortConsecutive(arr1,arr2){
    let arr3=[]
    arr3=[...arr1,...arr2]
    arr3.sort((a,b)=>a-b)

    for(var i=1;i<arr3.length;i++){
        if(arr3[i]!=arr3[i-1]+1){
            return false
        }
    }
        return true
}
const result=sortConsecutive([44, 46], [45])
if(result==true){
    console.log(true)
}else{
    console.log(false)
}