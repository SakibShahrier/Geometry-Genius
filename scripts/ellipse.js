function calculateEllipseArea(){
    const a = parseFloat(document.getElementById('ellipse-a').value);
    const b = parseFloat(document.getElementById('ellipse-b').value);
    
    if(!isNaN(3.1416 * a * b))
        document.getElementById('calc-area').innerHTML = `Ellipse: <span>${3.1416 * a * b}</span> cm<sup>2</sup>`;
}