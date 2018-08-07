const lengthInput = document.querySelector('[name=length]');
const widthInput = document.querySelector('[name=width]');
const thicknessInput = document.querySelector('[name=thickness]');
const costInput = document.querySelector('[name=cost]');
const total = document.querySelector('.total');

function calculateBF() {
    let length = lengthInput.value;
    let width = widthInput.value;
    let thickness = thicknessInput.value;
    let cost = costInput.value;
    let bf = (length * width * thickness) / 12;

    showCost(bf, cost);
}

function showCost(bf, cost) {
    let val = bf * cost;
    if(!isNaN(val)) {
        total.innerHTML = "$" + val.toFixed(2);
    }
}

lengthInput.addEventListener('input', calculateBF);
widthInput.addEventListener('input', calculateBF);
thicknessInput.addEventListener('input', calculateBF);
costInput.addEventListener('input', calculateBF);

