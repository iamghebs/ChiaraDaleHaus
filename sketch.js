function preload() {
    // put preload code here
    Adieu = loadFont('assets/Adieu-Bold.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
	frameRate(50);
	//noStroke();
	push();
	stroke(255);
	strokeWeight(1);
	noFill();
	textSize(22);
	text('gratta lo schermo e scopri il messaggio', width / 4, height /15, width / 2);
	pop();
    // put setup code here
}

function draw() {

	push();
	fill(10);
	textSize(50);
    textFont(Adieu);
    textAlign(CENTER, CENTER);
    var t = 'KWESTURAH  AWARDS  2019  SOON.';
    text(t, width / 4, height * 2 / 5, width / 2);
	pop();
	push();
	fill('rgb(28, 230, 96)');
	ellipse(mouseX, mouseY, 100);
	pop();
}

// function mouseDragged() {
// 	noStroke();
//     fill('rgb(28, 230, 96)');
//     ellipse(mouseX, mouseY, 100);
// 	return false;
// }

function mouseClicked(){
	console.log("Press");
}
