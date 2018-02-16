
var rectangleSize = 20;
var scores = 0;
var rects = [getNewRect()];


function getNewRect () {
    return {
        xCoord: getRandomNumber(0, 620),
        yCoord: 0,
        speed: getRandomNumber(1, 3),
        color: generateColor()
    }
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function countScores() {
    scores++;
    document.getElementById('score').innerHTML = scores;
}


function animate(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);

    rects.forEach((item, index) => {
        ctx.fillStyle = item.color;
    ctx.strokeStyle = item.color;
    ctx.fillRect(item.xCoord, item.yCoord, rectangleSize, rectangleSize);
    if(item.yCoord >= canvas.clientHeight) {
        rects.splice(index, 1);
    } else {
        item.yCoord += item.speed;
    }
})
    requestAnimationFrame(animate.bind(null, canvas));
}

function init() {
    canvas = document.getElementById('canvas');

    canvas.addEventListener('mousedown', (e) => {
        console.log(e)
    var coords = {
        x: e.offsetX,
        y: e.offsetY
    }
    rects.forEach((item, index) => {
        if (item.xCoord <= coords.x && item.xCoord + rectangleSize >= coords.x && item.yCoord <= coords.y && item.yCoord + rectangleSize >= coords.y) {
        rects.splice(index, 1);
        countScores();
    }
})
})
    document.getElementById('start').onclick = function() {
        if (scores === 0) {
            animate(canvas);
        } else {
            rects = [];
            scores = 0;
        }
    };
    document.getElementById('stop').onclick = function() {
        rects =[];
        clearInterval(intervalId);
    };



    intervalId = setInterval(() => {
            if (getRandomNumber(1, 3) === 3) {
        rects.push(getNewRect());
    }
}, 100);
}
document.body.onload = init;

