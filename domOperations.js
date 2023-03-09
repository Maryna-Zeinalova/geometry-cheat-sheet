function showResultInDomKvadrat() {
  const squareSide = document.getElementById("dlinaStoroniKvadrata").value;
  const squareAreaHTML = document.getElementById("ploschadKvadrata");
  if (squareSide > 0) {
    squareAreaHTML.innerHTML = calculateSquare(squareSide);
  } else {
    squareAreaHTML.innerHTML = "Enter a positive number";
  }
}

function showResultInDomPriamougolnika() {
  const side1 = document.getElementById("pervayaStoronaPriamougolnika").value;
  const side2 = document.getElementById("drugayaStoronaPriamougolnika").value;
  const squareRectangleHTML = document.getElementById("ploschadPriamougolnika");
  if (side1 && side2 > 0) {
    squareRectangleHTML.innerHTML = calculateRectangleSquare(side1, side2);
  } else {
    squareAreaHTML.innerHTML = "Enter a positive number";
  }
}

function showResultInDomParalelograma() {
  const side = document.getElementById("dlinaStoronyParalelograma").value;
  const height = document.getElementById("dlinaVisotyParalelograma").value;
  const squareParallelogramHTML = document.getElementById("ploschadParalelograma");
  if (side && height > 0) {
    squareParallelogramHTML.innerHTML = calculateParallelogramSquare(side, height);
  } else {
    squareParallelogramHTML.innerHTML = "Enter a positive number";
  }
}

function showResultInDomRomba() {
  const side = document.getElementById("dlinaStoronyRomba").value;
  const height = document.getElementById("dlinaVisotyRomba").value;
  const squareLozengeHTML = document.getElementById("ploschadRomba");
  if (side && height > 0) {
    squareLozengeHTML.innerHTML = calculateLozengeSquare(side, height);
  } else {
    squareLozengeHTML.innerHTML = "Enter a positive number";
  }
}
