let on2 = false;
let on3 = false;
let guide1, guide2, guide3, guide4, guide5, guide6, guide7;
let count = 2;

function preload(){
  guide1 = loadImage('media/Geo_nodes_modifier.png');
  guide2 = loadImage('media/Shader_rock_2.png');
  guide3 = loadImage('media/Shader_rock_3.png');
  guide4 = loadImage('media/Shader_rock_4.png');
  guide5 = loadImage('media/Shader_moss_5.png');
  guide6 = loadImage('media/Shader_moss_6.png');
  guide7 = loadImage('media/Shader_mix_7.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '1');
}

function draw(){
  if(on2 == true){
    image(guide1, mouseX - guide1.width / 2, mouseY - guide1.height / 2);
  }

  if(on3 == true){
    if(count == 2){
      image(guide2, mouseX - guide2.width / 2, mouseY - guide2.height / 2);
    } else if(count == 3){
      image(guide3, mouseX - guide3.width / 2, mouseY - guide3.height / 2);
    } else if(count == 4){
      image(guide4, mouseX - guide4.width / 2, mouseY - guide4.height / 2);
    } else if(count == 5){
      image(guide5, mouseX - guide5.width / 2, mouseY - guide5.height / 2);
    } else if(count == 6){
      image(guide6, mouseX - guide6.width / 2, mouseY - guide6.height / 2);
    } else if(count == 7){
      image(guide7, mouseX - guide7.width / 2, mouseY - guide7.height / 2);
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
  if(count == 8){
    count = 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}