const date = document.querySelector("#datepicker");


const outputDiv = document.querySelector(".output");

const checkButton = document.querySelector("#check");




const outputleap = "<div><h2>Heeey You are born in a leap year <h2></div>"
const outputnotleap = "<div><h1>You are not born on a leap year </h1></div>"

checkButton.addEventListener("click",(e)=>{
  
    e.preventDefault();
    console.log("cliked");
   
    const dateString = (date.value).split('-');
    var year = Number(dateString[0]);
    console.log(dateString)
    console.log(year);
   
    
    if(year%400 === 0){
        outputDiv.innerHTML = outputleap
        return
    }

    if(year%4 === 0){
        outputDiv.innerHTML = outputleap
        return
    }

    if(year%100 === 0){
        outputDiv.innerHTML = outputnotleap
        return
      
    }
    outputDiv.innerHTML = outputnotleap
    
})