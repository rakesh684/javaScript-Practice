// var date1=new Date("June 14, 2019")
// var date2=new Date("June 20, 2019")
// const res=date2.getTime()-date1.getTime()
// console.log(res/(1000*3600*24))
// console.log(date1.getFullYear())
// console.log(date1.getDay())

function differenceDate(date1,date2){
    const date3=new Date(date1)
    const date4=new Date(date2)
    const res=date4.getTime()-date3.getTime()
    return res/(1000*3600*24)
}
const day=differenceDate("June 14, 2019","June 20, 2019")
console.log(day)