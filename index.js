alert("working");
var random=Math.random()*6;
random=Math.floor(random)+1;
var randomImage="./images"+"/dice"+random+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);
var random2=Math.floor(Math.random()*6)+1;
var randomImage2="./images"+"/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
if(random>random2){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(random2>random){
    document.querySelector("h1").innerHTML="🚩 player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}