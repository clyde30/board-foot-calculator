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
    total.innerHTML = "$" + bf * cost;

    console.log(bf);
}

lengthInput.addEventListener('input', calculateBF);
widthInput.addEventListener('input', calculateBF);
thicknessInput.addEventListener('input', calculateBF);
costInput.addEventListener('input', calculateBF);

