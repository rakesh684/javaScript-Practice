function trackRobot(N,E,S,W){
    let a=[0,0]
    if(N===undefined){
        N=0
    }
    if(E===undefined){
        E=0
    }
    if(S===undefined){
        S=0
    }
    if(W===undefined){
        W=0
    }
    a[1]=N-S
    a[0]=E-W
    return a
}
const result=trackRobot(20, 10)
console.log(result)