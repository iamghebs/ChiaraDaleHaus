function preload() {
    // put preload code here
    Adieu = loadFont('assets/Adieu-Bold.otf');
}

var particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
	frameCount(24);
}

function mouseClicked() {
    particles.push(new Particle(mouseX, mouseY));
}

function draw() {
    background(25);
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }
	push();
	fill(25);
	textSize(50);
    textFont(Adieu);
    textAlign(CENTER, CENTER);
    var t = 'KWESTURAH  AWARDS  2019  SOON.';
    text(t, width / 4, height * 2 / 5, width / 2);
	pop();
}
