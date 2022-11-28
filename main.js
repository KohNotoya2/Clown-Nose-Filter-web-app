noseY=0;
noseX=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/k4svVTDC/114-1147898-clown-nose-png-clip-art-clown-nose-transparent.png');
}
    function setup() {  
        canvas = createCanvas(400, 400);  
        canvas.center();  
        video = createCapture(VIDEO);  
        video.size(400, 400);  
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

function draw() {
    image(video,0,0,400,400);
    image(clown_nose,noseX,noseY,30,30);
}

function take_snapshot() {
    save('myFilterImg.png');
}

function modelLoaded() {   
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){ 
     if(results.length > 0)  {    
        console.log(results);    
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);    
        console.log("nose y = " + results[0].pose.nose.y);  
    }
}