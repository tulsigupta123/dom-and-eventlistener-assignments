
try{
let decrementButton = document.getElementById("decrement");
let displayButton = document.getElementByClassName("display");
let resetButton = document.getElementByClassName("reset");
let incrementButton = document.getElementById("increment");

let counterValue;
incrementButton.addEventListener("click", incre);
function incre(){
  if(counterValue >= 0)
  { counterValue = counterValue + 1;
    displayButton.innerText = counterValue;
}
};

decrementButton.addEventListener("click", decre);
function decre(){
    if(counterValue > 0){
    counterValue =
     counterValue - 1;
    displayButton.innerText = counterValue;
    }else{
        alert("Negative value is not allowed");
    }
};

resetButton.addEventListener("click", reset);
function reset(){
    displayButton.innerText = 0;
};

}
catch(err){
    console.log("there is an error: ", err);
}

