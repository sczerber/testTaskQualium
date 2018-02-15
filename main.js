
var currentPos = 0;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

var x = rand(-10, 620);
var speed = rand(1, 7);
var color = generateColor();


function animate() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.fillRect(x, currentPos, 20, 20);
    currentPos += speed;
    if(currentPos >= canvas.clientHeight) {
        currentPos = 0;
        x = rand(-10, 620);
        speed = rand(1, 7);
        color = generateColor();
    }
    requestAnimationFrame(animate);
}
document.body.onload = animate;
