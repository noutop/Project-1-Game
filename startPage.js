let gameStory = " Sometimes it can be hard to balance our life. This game will give you the possibility of      playing with different aspects that we considered important in order to have a good           balance. There are 4 sections and they will add up depending on the items you grab.        Once you achieve 10 items of each section the game will be won but... be  carefull since   there are robots that will kill you once you collide against them and there is only one         question to be answered here... Are you ready to start gaming with your life? "



// creat text class for writing on canvas
class text {
    constructor(string, x, y, lineHeight) {
        this.string = string;
        this.x = x;
        this.y = y;
        this.lineHeight = lineHeight;
        this.lineStartX = x;
    }
    // method to write it on the canvas letter by latter
    update(speed) {
        // declare an i counter to get the index of the letters from the string
        let i = -30;
        // declare an j counter to start writing on the canvas
        let j = 0;

        let typeText = setInterval(() => {
            // to get the width of each letter by using measureText 
            //which returns an object that contains the width of the specified text, in pixels
            let letterWidth = ctx.measureText(this.string.charAt(i)).width;
            // To not write out of the canvas width + margin to move to the next line 
            if (this.x + letterWidth >= canvas.width - this.lineStartX) {
                this.x = this.lineStartX;
                this.y += this.lineHeight;
            }
            // To start writing the text letter by letter after  30
            if (j >= 30) {
                ctx.fillStyle = "#B1B3B3FF"
                ctx.font = "25px Arial";
                ctx.fillText(this.string.charAt(i), this.x, this.y);
                typingSound.volume = 0.1
                typingSound.play()
            }
            j++;
            i++;
            // move the x by the width of the letter after writing it
            this.x += letterWidth;
            if (i === this.string.length || isOutOfFirstPage) {
                typingSound.pause()
                clearInterval(typeText);
            }
        }, speed);
    }
}