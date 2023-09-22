function calculateFibonacci() {
    const input = document.getElementById('fibonacciInput').value;
    const resultDiv = document.getElementById('fibonacciResult');
    
    let fibonacci = [0, 1];
    for (let i = 2; i < input; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    resultDiv.textContent = `Deret Fibonacci: ${fibonacci.join(', ')}`;
}

function calculateVolume() {
    const shapeSelect = document.getElementById('shape');
    const selectedShape = shapeSelect.value;
    const resultDiv = document.getElementById('volumeResult');

    let volume;

    if (selectedShape === 'cube') {
        const side = parseFloat(document.getElementById('cubeSide').value);
        volume = side * side * side;
    } else if (selectedShape === 'sphere') {
        const radius = parseFloat(document.getElementById('sphereRadius').value);
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    } else if (selectedShape === 'cylinder') {
        const radius = parseFloat(document.getElementById('cylinderRadius').value);
        const height = parseFloat(document.getElementById('cylinderHeight').value);
        volume = Math.PI * Math.pow(radius, 2) * height;
    }

    resultDiv.textContent = `Volume: ${volume.toFixed(2)}`;
}

document.getElementById('shape').addEventListener('change', function() {
    const cubeInputs = document.getElementById('cubeInputs');
    const sphereInputs = document.getElementById('sphereInputs');
    const cylinderInputs = document.getElementById('cylinderInputs');

    if (this.value === 'cube') {
        cubeInputs.style.display = 'block';
        sphereInputs.style.display = 'none';
        cylinderInputs.style.display = 'none';
    } else if (this.value === 'sphere') {
        cubeInputs.style.display = 'none';
        sphereInputs.style.display = 'block';
        cylinderInputs.style.display = 'none';
    } else if (this.value === 'cylinder') {
        cubeInputs.style.display = 'none';
        sphereInputs.style.display = 'none';
        cylinderInputs.style.display = 'block';
    }
});
