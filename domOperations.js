function showResultInDomKvadrat(){
    const side = document.getElementById('dlinaStoroniKvadrata').value;    
    document.getElementById('ploschadKvadrata').innerHTML = getSquare(side, side);
}
function showResultInDomPriamougolnika(){
    const side1 = document.getElementById('pervayaStoronaPriamougolnika').value;    
    const side2 = document.getElementById('drugayaStoronaPriamougolnika').value;    
    document.getElementById('ploschadPriamougolnika').innerHTML = getSquare(side1, side2);
}
function showResultInDomParalelograma(){
    const side1 = document.getElementById('dlinaStoronyParalelograma').value;    
    const side2 = document.getElementById('dlinaVisotyParalelograma').value;    
    document.getElementById('ploschadParalelograma').innerHTML = getSquare(side1, side2);    
}
function showResultInDomRomba(){
    const side1 = document.getElementById('dlinaStoronyRomba').value;    
    const side2 = document.getElementById('dlinaVisotyRomba').value;    
    document.getElementById('ploschadRomba').innerHTML = getSquare(side1, side2);
}
