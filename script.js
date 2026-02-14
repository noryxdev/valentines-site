const startBtn=document.getElementById("startBtn");
const startScreen=document.getElementById("startScreen");
const content=document.getElementById("content");
const music=document.getElementById("music");

startBtn.onclick=()=>{
music.play();
startScreen.style.display="none";
content.classList.remove("hidden");
typeWriter();
};

const text="Sen hayatıma gelen en güzel tesadüfsün.";
let i=0;

function typeWriter(){
if(i<text.length){
document.getElementById("typeText").innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,50);
}
}

let current=0;
const pages=document.querySelectorAll(".page");

function openBook(){
document.getElementById("bookWrapper").classList.remove("hidden");
}

function nextPage(){
if(current<pages.length-1){
pages[current].classList.remove("active");
current++;
pages[current].classList.add("active");
}
}

function prevPage(){
if(current>0){
pages[current].classList.remove("active");
current--;
pages[current].classList.add("active");
}
}

/* Hearts + Flowers */

const canvas=document.getElementById("bg");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let items=[];

function create(){
items.push({
x:Math.random()*canvas.width,
y:-20,
size:Math.random()*20+10,
speed:Math.random()*2+1,
emoji:Math.random()>0.5?"❤️":"🌸"
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

items.forEach((item,i)=>{
ctx.font=item.size+"px serif";
ctx.fillText(item.emoji,item.x,item.y);
item.y+=item.speed;

if(item.y>canvas.height){
items.splice(i,1);
}
});
}

setInterval(create,300);

function animate(){
draw();
requestAnimationFrame(animate);
}

animate();