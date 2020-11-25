console.clear()

var gui = new dat.GUI();
var settings = {
	totalPoints: 500,
	factor: 2,
	radius: 300,
	animate: false,
	speed: 0.01
}

function getVector(index){
	var angle = map(index, 0, settings.totalPoints, 0, PI*2);
	var vector = p5.Vector.fromAngle(angle + PI/2);
	vector.mult(settings.radius)
	return vector;
}

function setup(){
	createCanvas(innerWidth, innerHeight);
	// colorMode(HSB);
}

var count = 500;
var j = 0;
function draw(){
	background('#222')
	translate(width/2, height/2);
	// stroke(600)
	noFill();
	// circle(5, 20, settings.radius*2);

	for(let i = 0; i <  settings.totalPoints; i++){
		var a = getVector(i);
		var b = getVector(i * settings.factor);
		let color = map(i, 0, count, 0, 800);
		strokeWeight(sqrt(i/count))
		stroke(color, 255, 255, 255)
		line(a.x, a.y, b.x, b.y)
	}

	if(settings.animate){
		settings.factor += settings.speed
	}
}
addEventListener('resize', () =>{
	resizeCanvas(innerWidth, innerHeight)
});

gui.add(settings, 'totalPoints', 0, 700).step(1);
gui.add(settings, 'factor', -500, 500);
gui.add(settings, 'radius', 100, 800);
gui.add(settings, 'speed', -0.1, 0.1);
gui.add(settings, 'animate');
