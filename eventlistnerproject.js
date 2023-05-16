let x = document.getElementById("eventButton1");
x.addEventListener("click", clickme);
function clickme(){
alert("Hey,you clicked me");
};

let y = document.getElementById("eventButton2");
y.addEventListener("dblclick", dblclickme);
function dblclickme(){
    alert("You clicked me twice");
};

let z = document.getElementById("eventButton3");
z.addEventListener("mouseover", msovr);
function msovr(){
    alert("You are using mouseover event");
};

let a = document.getElementById("eventButton4");
a.addEventListener("mouseout", msout);
function msout(){
    alert("You just out your mouse");
};

let b = document.getElementById("eventButton5");
b.addEventListener("keyup", kyup);
function kyup(val){
   b.innerText = val.key + " is pressed by user";
};

let c = document.getElementById("eventButton6");
c.addEventListener("keydown", kydown);
function kydown(val){
   c.innerText = "User has just released " + val.key + " key"
};

let d = document.getElementById("eventButton7");
d.addEventListener("keypress", kypress);
function kypress(val){
 d.innerText = "You have pressed :" + val.key;
 };
