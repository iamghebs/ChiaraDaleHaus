function preload() {
    // put preload code here
    Adieu = loadFont('assets/Adieu-Bold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    // put setup code here
}

function draw() {
    strokeWeight(0.5);
    textSize(33);
    textFont(Adieu);
    textAlign(CENTER, CENTER);
    fill(10);
    var t = 'KWESTURAH  AWARDS  2019  SOON.';
    text(t, width / 4, height * 2 / 5, width / 2);
}

function mouseDragged() {
	noStroke();
    fill('240');
    ellipse(mouseX, mouseY, 100);
}
