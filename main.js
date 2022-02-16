song = "" ;

function preload() {
    song = loadSound("ROCKSTAR.mp3") ;
}

function setup() {
    canvas = createCanvas(550,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,550,550) ;
}

function start() {
    song.play() ;
}