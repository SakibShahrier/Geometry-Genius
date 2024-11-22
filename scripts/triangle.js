function calculateTriangleArea(){
    const triangleBase = document.getElementById("triangle-base").value;
    const triangleHeight = document.getElementById("triangle-height").value;
    const triangleArea = document.getElementById("calc-area");
    let b = parseFloat(triangleBase);
    let h = parseFloat(triangleHeight);


    if(!isNaN(0.5 * b * h))
        triangleArea.innerHTML = `Triangle: <span>${0.5 * b * h}</span> cm<sup>2</sup>`;

}