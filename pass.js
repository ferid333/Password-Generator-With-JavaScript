const tarsh=document.querySelector(".fa-trash-o")
const copy=document.querySelector(".fa-copy")
const copied=document.querySelector(".s")
const display=document.querySelector(".code")
const number1=document.querySelector(".number1")
const number2=document.querySelector(".number2")
const lower=document.querySelector("[name='lower']")
const upper=document.querySelector("[name='upper']")
const symbol=document.querySelector("[name='symbol']")
const number=document.querySelector("[name='number']")
const btn=document.querySelector(".genb")

tarsh.addEventListener('click',()=>{
    display.value=""
})
copy.addEventListener("click",()=>{
   copied.classList.add("actives")
   setTimeout(()=>{
      copied.classList.remove("actives")
      
   },1000)

   display.select();
    display.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(display.value);  
})

number1.addEventListener("input",()=>{
   number2.value=number1.value

})
number2.addEventListener("input",()=>{
    number1.value=number2.value
 })


 btn.addEventListener("click",()=>{
   display.value=""
     x=0;
     var res=[];
     const lowers=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
     const numbers=["1","2","3","4","5","6","7","8","9","0"]
     const symbols=["!","@","#","$","%","^","&","*","(",")","~"]
     const uppers=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
     if(upper.checked){
      res= res.concat(uppers)
     }
     if(symbol.checked){
        res=res.concat(symbols)
     }
     if(number.checked){
      res=res.concat(numbers)
   }
   if(lower.checked){
      res=res.concat(lowers)
   }
   
   if(res.length){
      while(x<number1.value){
         x++
        var rnd =Math.floor(Math.random()*res.length)
        
       display.value=display.value + res[rnd]
     }
     
   }
   else{
      return;
   }
  

   
 })








