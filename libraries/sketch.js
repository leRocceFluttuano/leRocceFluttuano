let color1, color2;
let argent, antique, fontSize, fontSpacing;
let video;


function preload(){
  argent = loadFont('assets/ArgentPixelCF-Italic.otf');
  antique = loadFont('assets/AntiqueLegacy-Regular.otf');
  video = createImg('media/Website_video.gif');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '1');

  color1 = color(255);
  color2 = color(120, 190, 255);

  fontSize = windowWidth / 20;
  fontSpacing = windowWidth / 10;
  textSize(fontSize);

  video.style('z-index', '1');
  if (windowWidth < 1000) {
    video.size(1080 / 2, 1080 / 2);
  } else {
    video.size(1080, 1080);
  }
  video.position(windowWidth / 2 - video.width / 2, windowHeight / 2 - video.height / 2);
}

function draw() {
  noStroke();
  fill(255, 255, 255, 255);

  textFont(antique);
  textAlign(LEFT, TOP);
  text("LE", 0, height / 2 - fontSpacing);

  textFont(argent);
  textAlign(RIGHT, TOP);
  text("ROCCE", width / 2, height / 2 - fontSpacing);

  textFont(antique);
  textAlign(RIGHT, TOP);
  text("FLUTTUANO", width, height / 2 - fontSpacing);




  textAlign(LEFT, CENTER);
  text("NELL'", 0, height / 2);

  textFont(argent);
  textAlign(CENTER, CENTER);
  text("ARIA", width / 2, height / 2);

  textFont(antique);
  textAlign(RIGHT, CENTER);
  text("CON", width, height / 2);




  textAlign(LEFT, BOTTOM);
  text("UNA", 0, height / 2 + fontSpacing);
  
  textFont(argent);
  textAlign(RIGHT, BOTTOM);
  text("GRAZIA", width / 2, height / 2 + fontSpacing);

  textAlign(RIGHT, BOTTOM);
  text("SURREALE", width, height / 2 + fontSpacing);  
}

function setGradient(x, y, w, h, c1, c2){
  noFill();
  for(let i = y; i <= y + h; i++){
    let brightness = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, brightness);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateDimensions();
}

function updateDimensions() {
  clear();
  fontSize = windowWidth / 20;
  fontSpacing = windowWidth / 10;
  textSize(fontSize);

  if (windowWidth < 1000) {
    video.size(1080 / 2, 1080 / 2);
  } else {
    video.size(1080, 1080);
  }
  video.position(windowWidth / 2 - video.width / 2, windowHeight / 2 - video.height / 2);
}