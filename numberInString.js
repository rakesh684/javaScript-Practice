function numString(arr){
    return arr.filter(arr=>arr.match(/\d/))
}
const result=numString(["a1","ss","a9","88","jj"])
console.log(result)
