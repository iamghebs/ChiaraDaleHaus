// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

function Particle(x, y) {
    this.x = x;
    this.y = y;

    this.history = [];

    var iterX = x;
    var iterY = y;
	var ini = 0;

    this.update = function() {
        this.x = noise(ini+100)*width;
        this.y = noise(ini)*height;
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
		ini+=1;

        // for (var i = 0; i < this.history.length; i++) {
        //     this.history[i].x += random(-2, 2);
        //     this.history[i].y += random(-2, 2);
        // }

        var v = createVector(this.x, this.y);

        this.history.push(v);

        if (this.history.length > 50) {
            this.history.splice(0, 1);
        }
    }

    this.show = function() {
        noStroke();
        ellipse(this.x, this.y, 50, 50);

        //beginShape();
        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            fill('rgba(28, 230, 96, 0.2)');
            ellipse(pos.x, pos.y, 100, 100);
            //vertex(pos.x, pos.y);
        }
        //endShape();


    }

}
