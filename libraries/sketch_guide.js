let on2 = false;
let on3 = false;
let guide1, guide2, guide3, guide4, guide5;
let count = 2;
let guideWidth = 960;
let guideHeight = 540;

function preload(){
  guide1 = loadImage('media/Guide_1_geo_nodes.png');
  guide2 = loadImage('media/Guide_2_shader.png');
  guide3 = loadImage('media/Guide_3_shader_rock.png');
  guide4 = loadImage('media/Guide_4_shader_moss.png');
  guide5 = loadImage('media/Guide_5_shader_mix.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '1');
}

function draw(){
  if(on2 == true){
    image(guide1, mouseX - guideWidth / 2, mouseY - guideHeight / 2, guideWidth, guideHeight);
  }

  if(on3 == true){
    if(count == 2){
      image(guide2, mouseX - guideWidth / 2, mouseY - guideHeight / 2, guideWidth, guideHeight);
    } else if(count == 3){
      image(guide3, mouseX - guideWidth / 2, mouseY - guideHeight / 2, guideWidth, guideHeight);
    } else if(count == 4){
      image(guide4, mouseX - guideWidth / 2, mouseY - guideHeight / 2, guideWidth, guideHeight);
    } else if(count == 5){
      image(guide5, mouseX - guideWidth / 2, mouseY - guideHeight / 2, guideWidth, guideHeight);
    }
  }
}

function mouseOver2(){
  on2 = true;
}
function mouseOut2(){
  on2 = false;
  clear();
}

function mouseOver3(){
  on3 = true;
}
function mouseOut3(){
  on3 = false;
  clear();
}

function incrementCount(){
  count++;
  if(count == 6){
    count = 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}