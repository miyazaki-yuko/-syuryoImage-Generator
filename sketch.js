let x;
let y;

let end = "終";
let produced = "制作・著作";
let name;
let reverse_name = [];
let subject = [];

let r = 25;
let ellipse_num;


function setup() {

  pixelDensity(2.0);
  // container の横幅を取得する
  var width = document.getElementById("container").clientWidth;
  var c = createCanvas(width, width * 9 / 16);
  c.parent(document.getElementById("canvas"));

  name = "IA";
  subject = "プロトタイピング基礎";
  for (let i = name.length - 1; i >= 0; i--) {
    reverse_name.push(name[i]);
  }
  ellipse_num = reverse_name.length;
}

function draw() {
  background(0);
  x = width - (r * ellipse_num);
  y = height - 35;

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER); // 上下共にCENTER合わせ
  textSize(50);
  text(end, x, y - 60);
  textSize(30);
  text(subject, width / 2, height / 2);
  //console.log(x, y);
  textSize(12);
  text(produced, x, y - 25);

  let x1 = x - (ellipse_num * r / 2 + 10);
  let x2 = x + (ellipse_num * r / 2 + 10);

  stroke(255);
  strokeWeight(1.5);
  line(x1, y - 15, x2, y - 15);

  let j = -1 * (ellipse_num - 1);
  for (let i = 0; i < ellipse_num; i++) {
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(x + (-j * r / 2), y, r);
    fill(255);
    strokeWeight(1);
    textSize(12);
    text(reverse_name[i], x + (-j * r / 2), y + 0);
    //console.log(j);
    j += 2;

  }
  //ellipse(x, y, r);
}

function setText() {
  for (let j = 0; j < name.length; j++) {
    reverse_name.splice(0, 1);
  }
  name = document.getElementById("name").value;
  //console.log(name);
  subject = document.getElementById("subject").value;


  for (let i = name.length - 1; i >= 0; i--) {
    reverse_name.push(name[i]);
  }
  ellipse_num = reverse_name.length;
}

function saveImage() {
  save("end.png");
}