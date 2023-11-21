status="";
img="";
function preload(){
img = loadImage('th(3).jpg');
}
function setup(){
canvas = createCanvas(640,640);
canvas.center();
objectDetector = ml5.js.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML ="status:detecting objects";
}
function modelLoaded(){
    console.log("MODEL LOADED");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;

}