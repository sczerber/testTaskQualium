// var start = document.getElementById('button__start');
// start.onclick = function() {
//     animate();
// };

function init() {
    var currentPos = 0;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    var coordinationX = getRandomNumber(0, 620);
    var speedOfRectangle = getRandomNumber(1, 7);
    var colorOfRectangle = generateColor();
    var scores = 0;

    function count() {
        scores++;
        document.getElementById('score').innerHTML = scores;
    }

    function rectDown() {
        currentPos = getRandomNumber(-200, 0);
        coordinationX = getRandomNumber(0, 620);
        speedOfRectangle = getRandomNumber(1, 7);
        colorOfRectangle = generateColor();
    }


    function animate() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
        ctx.fillStyle = colorOfRectangle;
        ctx.strokeStyle = colorOfRectangle;
        ctx.fillRect(coordinationX, currentPos, 20, 20);
        currentPos += speedOfRectangle;
        if (currentPos >= canvas.clientHeight) {
            rectDown();
        }
        canvas.addEventListener('mousedown', function (e) {
            if (e.pageX > coordinationX && e.pageX < coordinationX + 40 && e.pageY > currentPos && e.pageY < currentPos + 40) {
                count();
                rectDown();
            }
        });

        requestAnimationFrame(animate);
    }

    document.body.onload = animate;

}
init();
