function removeDuplicate(arr){
    const res=new Set(arr)
    return [...res]
}

const result=removeDuplicate(['a','a','b'])
console.log(result)