
var currentPos = 0;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var x = rand(0, 640);
var speedRec = rand(1, 20);

function animate() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
    ctx.fillRect(x, currentPos, 20, 20);
    currentPos += speedRec;
    if(currentPos >= canvas.clientHeight) {
        currentPos = 0;
        x = rand(0, 640);
        speedRec = rand(1, 20);
    }
    requestAnimationFrame(animate);
}
document.body.onload = animate;
