var mousePressed = false;
var canvas;
var lastX, lastY, my_context;
var isDown = false;
var context

window.onload = function(){
	Init();
	console.log('ready');
}
	

	function Init(){
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	
	canvas.addEventListener("mousedown", function(e) {
	mousepressed = true;
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	console.log('x= ', x, 'y= ', y);
	});
	
	function Draw(x, y, isDown) {
	if(isDown){
		context.beginPath();
		context.strokeStyle = selColour.value;
		context.lineWidth = selWidth.value;
		context.lineJoin = "round";
		context.moveTo(lastX, lastY);
		context.lineTo(x,y);
		context.closePath();
		context.stroke();
		console.log("test");
	}
	lastX= x;
	lastY= y;
	}

canvas.addEventListener("mousemove", (function(e){
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	Draw(x, y, isDown);
	})
	);
	
	canvas.addEventListener("mousedown", (function(e){
	isDown = true;
	})
	);
	
	canvas.addEventListener("mouseup", (function(e){
	isDown = false;
	}));
	
		  
	
};