function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,450);
    canvas.position(600,125);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#4169E1');
}
function modelLoaded(){
    console.log("Posenet is initialised.");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    };
};