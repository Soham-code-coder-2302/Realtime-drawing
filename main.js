noseX=0
noseY=0

leftWristX=0
leftWristY=0

RightWristX=0
RightWristY=0

difference=0

function setup () {
canvas=createCanvas(550,550)
canvas.position(1090,260)

vid=createCapture(VIDEO,)
vid.position(200,260)
vid.size(550,550)

posenet=ml5.poseNet(vid,modelloaded)
}

function draw() {
background("gray")
posenet.on('pose',gotposes)
square(noseX,noseY,difference)
fill("pink")
}

function modelloaded () {
console.log("model is loaded")
}

function gotposes(result) {
if (result.length>0) {
console.log(result)

noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;

console.log(noseX,noseY)

leftWristX=result[0].pose.leftWrist.x
leftWristY=result[0].pose.leftWrist.y

console.log(leftWristX,leftWristY)

RightWristX=result[0].pose.rightWrist.x
RightWristY=result[0].pose.rightWrist.y

console.log(RightWristX,RightWristY)

difference=floor(leftWristX-RightWristX)
console.log(difference)

document.getElementById("square_size").innerHTML="The lenth of the side of the square is "+difference+" px"
}
}