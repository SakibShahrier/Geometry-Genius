function calculateRectangle(){
    const length = parseFloat(document.getElementById('rectangle-length').value);
    const width = parseFloat(document.getElementById('rectangle-width').value);document.getElementById('rectangle-area').innerText = length * width;
}