canvas.width=1024;
canvas.height=768;
const bg_color = "#101010"
const ctx=canvas.getContext("2d");

function clear(){
	ctx.fillStyle = bg_color;
	ctx.fillRect(0,0,canvas.width,canvas.height);
}

function transform_s2p(point){
	return {x: point.x+canvas.width/2,y: canvas.height/2-point.y};
}

function drawPoint(point){
	ctx.fillStyle = "#11cfa5"
	ctx.fillRect(point.x-10,point.y-10,10,10);
}

function drawLine(point1,point2){
	let dx=point2.x-point1.x;
	let dy=point2.y-point1.y;
	let steps;

	if(Math.abs(dx)>Math.abs(dy)){
		steps=Math.abs(dx);
	}
	else{
		steps=Math.abs(dy);
	}

	let x_i=dx/steps;
	let y_i=dy/steps;



	for(let i=0;i<steps;i++){
		drawPoint({x: point1.x+(x_i*i), y:point1.y+(y_i*i)});
	}
}

function projection({x,y,z}){
	const f=20;
	return {x: (x*f)/z,y: (y*f)/z};
}

function update(){
	return 0;
}

for(let z=1;z<10;z++){
drawPoint(transform_s2p(projection({x: 20,y: 20,z: z})));
drawPoint(transform_s2p(projection({x: 20,y: -20,z: z})));
drawPoint(transform_s2p(projection({x: -20,y: 20,z: z})));
drawPoint(transform_s2p(projection({x: -20,y: -20,z: z})));
}