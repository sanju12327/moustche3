noseX = 0;
noseY = 0;

function preload()
{
    Clown_nose = loadImage("https://i.postimg.cc/fbVZbcfb/m.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.position(800, 500);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 400, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(Clown_nose, noseX, noseY, 30, 30);
}
 
function take_snapshot()
{
    save('MyFilter.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x+40;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}