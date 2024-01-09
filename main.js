img="";
status="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,450);
    fill("red");
    stroke("red");
    noFill();
    rect(300,70,330,330);
    text("Cat",300,90);
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();

objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:detecting objects";
}
function modelLoaded(){
    console.log("Model is loaded.");
    status=true;
    objectdetected.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
}