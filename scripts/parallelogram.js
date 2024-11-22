function calculateParallelogramArea(){
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);
    
    if(!isNaN(base * height))
        document.getElementById('calc-area').innerHTML = `Parallelogram: <span>${base * height}</span> cm<sup>2</sup>`;
}