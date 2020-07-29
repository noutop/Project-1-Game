// var elem = document.getElementById('myCanvas'),
let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;
// context = elem.getContext('2d'),

class btnToClick {
    constructor(top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
}

let startBtn = new btnToClick(400, 500, 200, 50);
let replayBtn = new btnToClick(430, 500, 200, 50);
let btns = [startBtn, replayBtn];

// Add event listener for `click` events.
canvas.addEventListener(
    "click",
    function (event) {
        let x = event.pageX - canvasLeft;
        let y = event.pageY - canvasTop;

        // Collision detection between clicked offset and element.
        btns.forEach(function (btn) {
            if (
                y > btn.top &&
                y < btn.top + btn.height &&
                x > btn.left &&
                x < btn.left + btn.width
            ) {
                keyEnterSound.play();
                if (!gameStart) {
                    startGame();
                    gameStart = true;
                }
                if (!runningGame) {
                    location.reload();
                }
            }
        });
    },
    false
);