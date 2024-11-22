function calculatePentagonArea(){
    const p = parseFloat(document.getElementById('pentagon-p').value);
    const b = parseFloat(document.getElementById('pentagon-b').value);
    
    if(!isNaN(0.5 * p * b))
        document.getElementById('calc-area').innerHTML = `Pentagon: <span>${0.5 * p * b}</span> cm<sup>2</sup>`;
}