let player = {
    x: (canvas.width / 2) - 100,
    y: 400,
    width: 200,
    height: 220,
    img: new Image(),
    // to move the player to the right
    rightPressed: function () {
        // to keep it inside the canvas
        if (this.x < canvas.width - this.width) {
            this.x += 50;

        }
    },
    // to move the player to the left
    leftPressed: function () {
        // to keep it inside the canvas
        if (this.x >= 0) {
            this.x -= 50;

        }
    },
    upPressed: function () {
        if (this.y >= 50) {
            this.y -= 50;
        }
    },
    downPressed: function () {
        if (this.y <= canvas.height - this.height - 20) {
            this.y += 90;
        }
    },
    // to draw the player on the canvas
    update: function () {

        ctx.fillStyle = "red";

        this.imgSrc = ["/images/player/face.png", "/images/player/profileboy.png", "/images/player/profilegirl.png"]
        if (gameStart) {
            this.img.src = this.imgSrc[0]
            gameStart = false
        }
        if (UpDownDir) {
            this.img.src = this.imgSrc[0]
            UpDownDir = false
        }
        if (leftDir) {
            this.img.src = this.imgSrc[2]
            leftDir = false
        }
        if (rightDir) {
            this.img.src = this.imgSrc[1]
            rightDir = false
        }
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    },
    // declare the player borders
    left: function () {
        return this.x + 80;
    },
    top: function () {
        return this.y + 30;
    },
    right: function () {
        return this.x + this.width - 30;
    },
    bottom: function () {
        return this.y + this.height - 30;
    },
    // to check if the player collide with the objects
    crash: function (object) {
        return !(
            this.bottom() < object.top() ||
            this.top() > object.bottom() ||
            this.right() < object.left() ||
            this.left() > object.right()
        );
    }
};
// Create object class
class object {
    constructor(posX) {
        this.x = posX;
        this.y = 0;
        this.width = 50;
        this.height = 50;
    }
    // draw the object on canvas
    update() {
        ctx.fillStyle = this.color;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.y += this.speedY;
    }
    // declare the player borders
    top() {
        return this.y;
    }
    left() {
        return this.x;
    }
    bottom() {
        return this.y + this.height;
    }
    right() {
        return this.x + this.width;
    }
    crash(object) {
        return !(this.right() < object.left() || this.left() > object.right());
    }
}

// subclass for the money object
class objectMoney extends object {
    constructor(posX) {
        super(posX);
        this.color = "green";
        this.img = new Image();
        this.imgSrc = [
            "images/work/robber.png",
            "images/work/cash.png",
            "images/work/cook.png",
            "images/work/keyboard.png"
        ];
        this.img.src = this.imgSrc[Math.floor(Math.random() * this.imgSrc.length)];
        this.scoreType = "money";
        // add speed Y to change the speed later
        this.speedY = 2;
    }
}
// subclass for the health object
class objectHealth extends object {
    constructor(posX) {
        super(posX);
        this.color = "blue";
        this.img = new Image();
        this.imgSrc = [
            "images/health/strong-man.png",
            "images/health/avocado.png",
            "images/health/canned-fish.png",
            "images/health/cycling.png",
            "images/health/hot-meal.png",
        ];
        this.img.src = this.imgSrc[Math.floor(Math.random() * this.imgSrc.length)];
        this.scoreType = "health";
        // add speed Y to change the speed later
        this.speedY = 2;
    }
}

// subclass for the love object
class objectLove extends object {
    constructor(posX) {
        super(posX);
        this.color = "red";
        this.img = new Image();
        this.imgSrc = [
            "images/love/headshot.png",
            "images/love/heart-organ.png",
            "images/love/paw-heart.png"
        ];
        this.img.src = this.imgSrc[Math.floor(Math.random() * this.imgSrc.length)];
        this.scoreType = "love";
        // add speed Y to change the speed later
        this.speedY = 3;
    }
}

// subclass for the leisure object
class objectEntertainment extends object {
    constructor(posX) {
        super(posX);
        this.color = "yellow";
        this.img = new Image();
        this.imgSrc = [
            "images/entertainment/coffee-beans.png",
            "images/entertainment/airplane-departure.png",
            "images/entertainment/console-controller.png",
            "images/entertainment/medieval-pavilion.png",
            "images/entertainment/musical-score.png",
            "images/entertainment/popcorn.png",
            "images/entertainment/tv.png",
            "images/entertainment/wine-glass.png"
        ];
        this.img.src = this.imgSrc[Math.floor(Math.random() * this.imgSrc.length)];
        this.scoreType = "entertainment";
        // add speed Y to change the speed later
        this.speedY = 3;
    }
}
//subclass for objects
class obstacles extends object {
    constructor(posY) {
        super();
        this.y = posY;
        this.x = 0;
        this.width = 150;
        this.height = 150;
        this.speedX = 4;
        //this index will be changes from 0 to 7 with a certain frame
        this.currentImageIdx = 0
        this.imgSrc = [
            "/images/animation/Run (1).png",
            "/images/animation/Run (2).png",
            "/images/animation/Run (3).png",
            "/images/animation/Run (4).png",
            "/images/animation/Run (5).png",
            "/images/animation/Run (6).png",
            "/images/animation/Run (7).png",
            "/images/animation/Run (8).png"
        ];
        //In this empty array the new Image is created with its source
        this.images = []
        this.imgSrc.forEach((src) => {
            let i = new Image()
            i.src = src
            this.images.push(i)
        })
        this.scoreType = "obstacles";
    }
    // Override update form parent to make enemies move horizontal
    update() {
        //The image will be drawn depending on the frames on secondLayout with its current index
        ctx.drawImage(this.images[this.currentImageIdx], this.x, this.y, this.width, this.height);
        this.x += this.speedX;
    }
    top() {
        return this.y + 40;
    }
    left() {
        return this.x + 40;
    }
    bottom() {
        return this.y + this.height - 40;
    }
    right() {
        return this.x + this.width - 40;
    }




}