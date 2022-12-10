difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initilized!');
}

function gotPOses(results)
{
    if(results)
    {
        console.log(results);

        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX +"rightWristX =" + rightWristX +" difference = " +difference);
    }
}

function draw() {
    Background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of the text will be ="+difference + "px";
    textSize(difference);
    fill('#FFE787')
text('Peter', 50, 400);
}