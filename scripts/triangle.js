function calculateTriangleArea(){
    const triangleBase = document.getElementById("triangle-base").value;
    const triangleHeight = document.getElementById("triangle-height").value;
    const triangleArea = document.getElementById("triangle-area");
    let b = parseFloat(triangleBase);
    let h = parseFloat(triangleHeight);

    triangleArea.innerText = 0.5 * b * h;

}