let coloFondo;

function setup() {
  createCanvas(400, 650);
  colorFondo = color(220);
}

function draw() {
  background(colorFondo);
  mitadAncho = mouseX;
  mitadAlto = mouseY;

  if (keyIsPressed) {
    if (key == "a" || key == "A") {
      colorFondo = color(78, 9, 9);
    } else if (key == "s" || key == "S") {
      colorFondo = color(16, 15, 76);
    } else if (key == "d" || key == "D") {
      colorFondo = color(220);
    }
  }
  //Cuadrado rojo
  strokeWeight(0);
  fill(150, 5, 5);
  quad(185, 440, 160, 330, 270, 300, 295, 410);

  //Cuadrado negro
  fill(0);
  rect(mouseX + 0, mouseY + 0, 170, 170);
}
