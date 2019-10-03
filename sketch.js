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
    textSize(50);
    text('PC: gratta lo schermo e scopri il messaggio', width / 4, height / 15, width / 2);
    text('touch: tocca lo schermo con più di 5 dita', width / 4, height * 2 / 15, width / 2);
    pop();
    // put setup code here
}

function draw() {
    if (touches.length > 5)
        var colore = 'rgb(28, 230, 96)';
    else var colore = 10;
    fill(colore);
    textSize(100);
    textFont(Adieu);
    textAlign(CENTER, CENTER);
    var t = 'KWESTURAH  AWARDS  2019  SOON.';
    text(t, width / 4, height * 2 / 5, width / 2);
    if (touches.length == 0) {
        push();
        fill('rgb(28, 230, 96)');
        let speed = abs(winMouseX - pwinMouseX);
        ellipse(mouseX, mouseY, 20 + speed);
        pop();
    }
}


function touchStarted() {
    return false;
}

function mouseClicked() {
    console.log("Press");
}
