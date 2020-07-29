imgBuilding = new Image();
imgBuilding.src = "images/l4_buildings01.png";
imgLamps = new Image();
imgLamps.src = "images/l7_lamps.png";
imgBg = new Image();
imgBg.src = "images/l1_background.png";
imgStars = new Image();
imgStars.src = "images/stars.png";
imgSun = new Image();
imgSun.src = "images/l2_sun.png";
imgClouds = new Image();
imgClouds.src = "images/l4_clouds.png";
btnImgStartGame = new Image()
btnImgStartGame.src = "images/Start-game.png"
keyboardArrows = new Image()
keyboardArrows.src = "/images/keyboard_arrows.png"


function drawFirstBg() {
    ctx.drawImage(this.imgBg, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgStars, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgBuilding, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgLamps, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.btnImgStartGame, 500, 400, 200, 50);
    // ctx.drawImage(this.keyboardArrows, 540, 500, 120, 80);
}

imgBuildingBoardGame = new Image();
imgBuildingBoardGame.src = "images/gameCityBg/buildings01.png";
imgLampsBoardGame = new Image();
imgLampsBoardGame.src = "images/gameCityBg/lamps.png";
imgBgBoardGame = new Image();
imgBgBoardGame.src = "images/gameCityBg/background.png";
imgSunBoardGame = new Image();
imgSunBoardGame.src = "images/gameCityBg/sun.png";
imgCloudsBoardGame = new Image();
imgCloudsBoardGame.src = "images/gameCityBg/clouds.png";
imgGroundBoardGame = new Image();
imgGroundBoardGame.src = "images/gameCityBg/ground.png";
imgBuildings2BoardGame = new Image();
imgBuildings2BoardGame.src = "images/gameCityBg/l6_buildings02.png";

function drawGameBoardBg() {
    ctx.drawImage(this.imgBgBoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgSunBoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgCloudsBoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgBuildingBoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgBuildings2BoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgGroundBoardGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgLampsBoardGame, 0, 0, ctx.canvas.width, canvas.height);

}

imgBuildingEndGame = new Image();
imgBuildingEndGame.src = "images/endGameBg/buildings.png";
imgLampsEndgame = new Image();
imgLampsEndgame.src = "images/endGameBg/lamps.png";
imgBgEndGame = new Image();
imgBgEndGame.src = "images/endGameBg/background.png";
imgMoonEndGame = new Image();
imgMoonEndGame.src = "images/endGameBg/moon.png";
imgStarsEndGame = new Image();
imgStarsEndGame.src = "images/endGameBg/stars.png";
imgGroundEndGame = new Image();
imgGroundEndGame.src = "images/endGameBg/ground.png";
btnImgPlayAgain = new Image()
btnImgPlayAgain.src = "images/Play-again.png"

function drawEndGameBg() {
    ctx.drawImage(this.imgBgEndGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgMoonEndGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgStarsEndGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgBuildingEndGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgGroundEndGame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.imgLampsEndgame, 0, 0, ctx.canvas.width, canvas.height);
    ctx.drawImage(this.btnImgPlayAgain, 500, 430, 200, 50);
}

let directionImg = new Image()
directionImg.src = "images/Direction.png"