let count = 1;

let book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14;
let bookWidth, bookHeight;

function preload(){
  book1 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale3.png');
  book2 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale4.png');
  book3 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale5.png');
  book4 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale6.png');
  book5 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale7.png');
  book6 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale8.png');
  book7 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale9.png');
  book8 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale10.png');
  book9 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale11.png');
  book10 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale12.png');
  book11 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale13.png');
  book12 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale14.png');
  book13 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale15.png');
  book14 = loadImage('media/Le_rocce_fluttuano_con_una_grazia_surreale16.png');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '1');

   bookWidth = windowWidth - windowWidth / 10;
   bookHeight = bookWidth / 2;
}

function draw(){
  if(count == 1){
    image(book1, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 2){
    image(book2, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 3){
    image(book3, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 4){
    image(book4, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 5){
    image(book5, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 6){
    image(book6, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 7){
    image(book7, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 8){
    image(book8, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 9){
    image(book9, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 10){
    image(book10, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 11){
    image(book11, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 12){
    image(book12, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 13){
    image(book13, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  } else if(count == 14){
    image(book14, windowWidth / 2 - bookWidth / 2, windowHeight / 2 - bookHeight / 2, bookWidth, bookHeight)
  }
}

function incrementCount(){
  count++;
  if(count == 15){
    count = 1;
  }
}

function decreaseCount(){
  count = count - 1;
  if(count == 0){
    count = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  bookWidth = windowWidth - windowWidth / 10;
  bookHeight = bookWidth / 2;
}