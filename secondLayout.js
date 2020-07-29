// Getting the canvas from html page
let canvas = document.getElementById("canvas");
let ctx = document.getElementById("canvas").getContext("2d");
let bodyCtx = document.querySelector("body");

window.onload = () => {
  firstPage();
};

function startGame() {
  isOutOfFirstPage = true;
  drawGameBoard();
}

// to draw the first page with bg and text on canvas
function firstPage() {
  drawFirstBg();
  let newText = new text(gameStory, 100, 150, 35);
  newText.update(100);
}

// function to remove objects from the objects array and from the canvas when they reach the end of the canvas
function removeObject(objectsArr) {
  for (let i = 0; i < objectsArr.length; i++) {
    if (objectsArr[i].y >= 700) {
      let index = objectsArr.indexOf(objectsArr[i]);
      objectsArr.splice(index, 1);
    }
    // remove the obstacles
    if (
      objectsArr[i] != undefined &&
      objectsArr[i].scoreType == "obstacles" &&
      objectsArr[i].x >= 1200
    ) {
      let index1 = objectsArr.indexOf(objectsArr[i]);
      objectsArr.splice(index1, 1);
    }
  }
}

// function to check if the new generated object collied with any of the items in the objects arry  to avoid
// objects overlapping
function crashesWithAnything(obj) {
  for (i = 0; i < objectsArr.length; i++) {
    if (obj.crash(objectsArr[i])) {
      return true;
    }
  }
  return false;
}

// draw function for the page after winning or losing the game
let drawEndGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // draw the bg
  // draw img if the player won
  if (!runningGame && !winGame) {
    drawEndGameBg();
    let winImg = new Image();
    winImg.src = "images/You-win.png";
    ctx.drawImage(winImg, 400, 300, 400, 50);
    // draw another img if the player lost
  } else {
    bodyCtx.style.backgroundImage =
      "url('images/stars.png'),url('images/endGameBg/background.png')";
    drawEndGameBg();
    let winImg = new Image();
    winImg.src = "images/lose.png";
    ctx.drawImage(winImg, 400, 300, 400, 50);
  }
  // press space to play the game again

  window.requestAnimationFrame(drawEndGame);
};

// For ending the game
let runningGame = true;

// for winning the game
let winGame = true;
// to stop the typing sound from playing
let isOutOfFirstPage = false;
//Animation frames
let animationFrame = 0;

// declare the counter
let counter = 0;

// declare an objects array for all objects
let objectsArr = [];

// declare an object for the score of each category
let scores = {
  money: 0,
  health: 0,
  entertainment: 0,
  love: 0
};

// function to draw the game on canvas
let drawGameBoard = () => {
  if (!runningGame) {
    drawEndGame();
    gameSound.pause();
    return;
  }

  gameSound.volume = 0.1;
  gameSound.play();
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // increase the counter
  counter++;

  //   draw background image
  drawGameBoardBg();

  // draw the player
  player.update();
  // and add the score for the object category.
  let ind;
  objectsArr.forEach((e, i) => {
    if (player.crash(e)) {
      // add the score
      if (scores[e.scoreType] <= 9) {
        scores[e.scoreType] += 1;
      }
      // get the index of the object in the array after the play with it
      ind = i;
      // play the sound depending on the score type
      if (e.scoreType == "money") {
        moneySound.play();
      }
      if (e.scoreType == "health") {
        healthSound.play();
      }
      if (e.scoreType == "entertainment") {
        entertainmentSound.play();
      }
      if (e.scoreType == "love") {
        loveSound.play();
      }

      if (e.scoreType == "obstacles") {
        runningGame = false;
        gameOverSound.play();
      }
    }

    // draw the object in the array
    if (e.scoreType == "obstacles") {
      //Animation frame counter

      if (counter % 8 === 0) {
        //To have the acces every %8 frame and update the index in the class obstacle
        e.currentImageIdx = (e.currentImageIdx + 1) % e.images.length;
      }
      e.update();
    } else {
      e.update();
    }
  });

  // delete the object from the array to clear from the screen when the player collied with it
  if (ind !== undefined) {
    objectsArr.splice(ind, 1);
  }

  // function to get random X position and creat random objects
  function randomObject() {
    // random X position
    // Creat a random object with random position
    let randomPoX = Math.floor(Math.random() * (canvas.width - 250) + 200);
    //to create more obstacles just multiply by more than 4
    switch (Math.floor(Math.random() * 5)) {
      case 1:
        return new objectMoney(randomPoX);
      case 2:
        return new objectHealth(randomPoX);
      case 3:
        return new objectLove(randomPoX);
      default:
        return new objectEntertainment(randomPoX);
    }
  }

  // draw 3 random objects on canvas
  if (counter % 120 === 0) {
    // for loop to great more than one object
    for (let i = 0; i < 3; i++) {
      let newObject = randomObject();
      // if it doesn't collied with any other object to add it to the array
      if (!crashesWithAnything(newObject)) {
        objectsArr.push(newObject);
      }
    }
  }

  // change the speed of objects at specific time
  if (counter % 330 === 0) {
    // loop inside the objects array to change y speed
    objectsArr.forEach(e => {
      if (e.speedY === 2) {
        e.speedY = 6;
      }
      if (e.speedY === 3) {
        e.speedY = 1;
      }
    });
  }

  if (counter % 500 === 0) {
    // for loop to great more than one object
    let randomPoY = Math.floor(Math.random() * (canvas.height - 250));
    let newObject = new obstacles(randomPoY);
    // if it doesn't collied with any other object to add it to the array
    if (!crashesWithAnything(newObject)) {
      objectsArr.push(newObject);
    }
  }

  if (counter % 700 === 0) {
    // for loop to great more than one object
    let randomPoY = Math.floor(Math.random() * (canvas.height - 250));
    let newObject = new obstacles(randomPoY);
    // if it doesn't collied with any other object to add it to the array
    if (!crashesWithAnything(newObject)) {
      objectsArr.push(newObject);
    }
  }

  if (counter <= 120) {
    ctx.drawImage(directionImg, 500, 200, 200, 200);
  }

  // to remove the objects from the array after going outside the canvas
  removeObject(objectsArr);

  //Draw the Items when picked in the pie chart
  drawMiddleAndAxis();
  if (scores.money <= 10) {
    drawItemMoney(scores.money);
  }
  if (scores.love <= 10) {
    drawItemLove(scores.love);
  }
  if (scores.health <= 10) {
    drawItemHealth(scores.health);
  }
  if (scores.entertainment <= 10) {
    drawItemEntertainment(scores.entertainment);
  }

  // to win the game
  if (
    scores.money === 10 &&
    scores.love === 10 &&
    scores.health === 10 &&
    scores.entertainment === 10
  ) {
    console.log("winner");
    //Draw winning image
    winGame = false;
    runningGame = false;
    winGameSound.play();
  }
  //Every 30 seconds the score will go down by one on every section
  if (counter % 1800 === 0) {
    if (scores.money != 0) {
      scores.money -= 1;
    }
    if (scores.love != 0) {
      scores.love -= 1;
    }
    if (scores.health != 0) {
      scores.health -= 1;
    }
    if (scores.leisure != 0) {
      scores.leisure -= 1;
    }
  }
  window.requestAnimationFrame(drawGameBoard);
};

// Function for moving player right, left, up, down

document.onkeydown = key;

let leftDir = false;
let rightDir = false;
let UpDownDir = false;
let gameStart = false;

function key(e) {
  switch (e.keyCode) {
    case 37:
      player.leftPressed();
      leftDir = true;
      break;
    case 39:
      player.rightPressed();
      rightDir = true;
      break;
    case 38:
      player.upPressed();
      UpDownDir = true;
      break;
    case 40:
      player.downPressed();
      UpDownDir = true;
      break;
  }
}
