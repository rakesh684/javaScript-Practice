function is_perfect(number){
   var temp = 0;
   const arr=new Array()
   for(var i=1;i<=number/2;i++){
       
         if(number%i === 0)
          {
            arr.push(i)
            temp += i;
          }
          
     }
     console.log(arr)
     console.log(temp)
     
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
    } 
    is_perfect(24);