let on2 = false;
let on3 = false;
let guide1, guide2, guide3, guide4, guide5;
let imagewidth = 318;
let imageheight = 245;

function preload(){
  guide1 = loadImage('media/Guide_1_geo_nodes_properties_v2.png');
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
    image(guide1, mouseX - imagewidth / 2, mouseY - imageheight / 2,);
  }
  if(on3 == true){
    let count = 1

  }
}

function mouseOver2(){
  on2 = true;
}
function mouseOut2(){
  on2 = false;
}

function mouseOver3(){
  on3 = true;
}
function mouseOut3(){
  on3 = false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}