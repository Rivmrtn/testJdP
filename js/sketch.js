let cam;
function setup() {
createCanvas(windowWidth,windowHeight)
 cam = createCapture(VIDEO);
 cam.hide()
}

function draw() {
    image(cam,0,0,width,height)

}

