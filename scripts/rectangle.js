function calculateRectangleArea(){
    const length = parseFloat(document.getElementById('rectangle-length').value);
    const width = parseFloat(document.getElementById('rectangle-width').value);
    
    if(!isNaN(length * width))
        document.getElementById('calc-area').innerHTML = `Rectangle: <span>${length * width}</span> cm<sup>2</sup>`;

}