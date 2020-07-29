// ****************************
// draw circle
// ****************************
let drawMiddleAndAxis = () => {
  //Center of the circle
  ctx.beginPath();
  ctx.arc(150, 150, 12, 0, Math.PI * 2);
  ctx.fillStyle = "black"; // !
  // fills the inner circle with black color
  ctx.fill();
  ctx.closePath();
  let moneyIcon = new Image();
  let loveIcon = new Image();
  let healthIcon = new Image();
  let entertainmentIcon = new Image();
  moneyIcon.src = "images/icons/cashIcon.png"
  loveIcon.src = "images/icons/heart-organIcon.png"
  healthIcon.src = "images/icons/van-damme-splitIcon.png"
  entertainmentIcon.src = "images/icons/musical-icon.png"
  ctx.drawImage(moneyIcon, 240, 20, 50, 50);
  ctx.drawImage(healthIcon, 20, 220, 50, 50); //240,20
  ctx.drawImage(loveIcon, 20, 20, 50, 50);
  ctx.drawImage(entertainmentIcon, 240, 220, 50, 50);
};

class Item {
  //40 as radius
  constructor(radius, startAngle, endAngle, color) {
    //40 as radius
    this.r = radius;
    this.x = 150;
    this.y = 150;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.antiClockwise = true;
    this.color = color;
  }
  drawPickedItem() {
    //console.log("hello");
    ctx.beginPath();
    // ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      this.antiClockwise
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = this.color; // !
    ctx.stroke();
    ctx.closePath();
  }
}
//console.log(cheese)
//To draw 1/4 of a circle in the top right side
//Which is MONEY!

let drawItemMoney = score => {
  let startAngleMoney = 0;
  let endAngleMoney = (3 * Math.PI) / 2;
  let colorMoney = "#1a7a12";
  let radius = 20;
  for (let i = 0; i < score; i++) {
    let item = new Item(radius, startAngleMoney, endAngleMoney, colorMoney);
    radius += 10;
    //We only need to catch the index in order to draw score!
    item.drawPickedItem();
  }
};

//To draw 1/4 of a circle in the top left side
//Which is LOVE!

let drawItemLove = score => {
  let startAngleLove = (3 * Math.PI) / 2;
  let endAngleLove = Math.PI;
  let colorLove = "#88001b";
  let radius = 20;
  for (let i = 0; i < score; i++) {
    let item = new Item(radius, startAngleLove, endAngleLove, colorLove);
    radius += 10;
    //We only need to catch the index in order to draw score!
    item.drawPickedItem();
  }
};

//To draw 1/4 of a circle in the bottom left side
//Which is HEALTH!

let drawItemHealth = score => {
  let startAngleHealth = Math.PI;
  let endAngleHealth = Math.PI / 2;
  let colorHealth = "#0f1ab3";

  let radius = 20;
  for (let i = 0; i < score; i++) {
    let item = new Item(radius, startAngleHealth, endAngleHealth, colorHealth);
    radius += 10;
    //We only need to catch the index in order to draw score!
    item.drawPickedItem();
  }
};

//To draw 1/4 of a circle in the bottom left side
//Which is Leisure!

let drawItemEntertainment = score => {
  let startAngleLeisure = Math.PI / 2;
  let endAngleLeisure = 0;
  let colorLeisure = "#fff200";

  let radius = 20;
  for (let i = 0; i < score; i++) {
    let item = new Item(
      radius,
      startAngleLeisure,
      endAngleLeisure,
      colorLeisure
    );
    radius += 10;
    //We only need to catch the index in order to draw score!
    item.drawPickedItem();
  }
};

// ctx.font = "18px serif";
// ctx.fillStyle = "black";
// ctx.fillText("Score ", 220, 255); //+points
// ctx.closePath();