function preload() {
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100, 80, 300, 250);
 
    stroke(168, 10, 10);
    fill (255, 51, 0);
         //x , y , d//
    circle(40, 40, 66);
    circle(460, 40, 66);
    circle(40, 360, 66);
    circle(460, 360, 66);
    

    stroke(50, 168, 82);
    fill(0, 153, 0);

        //x , y,  w,  h//
    rect(69, 28, 360, 20);
    rect(69, 347, 360, 20);
    rect(27, 69, 20, 260);
    rect(448, 69, 20, 260);
}

function take_snapshot(){
    save("student.png");
}