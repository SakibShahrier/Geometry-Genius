function calculateRhombusArea(){
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);
    
    if(!isNaN(0.5 * d1 * d2))
        document.getElementById('calc-area').innerHTML = `Rhombus: <span>${0.5 * d1 * d2}</span> cm<sup>2</sup>`;
}