// const arr=[2,3,[4,5,[6,7,[8,[20,[30,[50]]]]]]]
// const newArr=arr.flat(Infinity).length
// console.log(newArr)

function flatArray(arr){
    const newArray=arr.filter(n=>n)
    const stack=[...newArray]
    const res=[]
    while(stack.length){
        const next=stack.pop()
        if(Array.isArray(next)){
            stack.push(...next)
        }
        else{
            res.push(next)
        }
        
    }
    return res.sort((a,b)=>a-b)


}
const result=flatArray([2,3,,,,[4,5,[6,7,[8,[20,[30,[50]]]]]]])
console.log(result)