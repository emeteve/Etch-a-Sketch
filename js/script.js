const grid = document.getElementById('grid');
const rainbowButton = document.getElementById('rainbowb');
let blackColor = true;
let rainbowColor = false;
let monotoneColor = false;
let erasing = false;
let size = 16;
let index = 0;

rainbowButton.addEventListener('click', () => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    rainbowButton.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
})

function colors() {
    blackColor = false;
    rainbowColor = false;
    monotoneColor = false;
    erasing = false;
}

function black() {
    colors();
    blackColor = true;
}

function rainbow() {
    colors();
    rainbowColor = true;
}

function monotone() {
    colors();
    monotoneColor = true;
}

function eraser() {
    colors();
    erasing = true;
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function makeBox(boxNum) {
    grid.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`
    
    for (i = 1; i <= boxNum*boxNum; i++) {
        let boxes = document.createElement('div');

        boxes.addEventListener('mouseover', color);
        boxes.addEventListener('mousedown', color);

        boxes.addEventListener('mouseenter', () => {
            if(blackColor === true) {
                boxes.classList.add('black');
            } else if(rainbowColor === true) {
        
            } else if(monotoneColor === true) {
        
            } else if(erasing === true) {
                boxes.classList.add('white');
            }
        })
        boxes.addEventListener('mouseout', () => {
            if(blackColor === true) {
                boxes.classList.remove('black');
            } else if(rainbowColor === true) {
        
            } else if(monotoneColor === true) {
        
            } else if(erasing === true) {
                boxes.classList.remove('white');
            }
        })

        grid.appendChild(boxes).id = 'box';    
    }
}

function color(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else if(blackColor === true) {
        e.target.style.backgroundColor = `black`;
        e.target.style.opacity = 1;
    } else if(rainbowColor === true) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.opacity = 1;
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if(monotoneColor === true) {
        e.target.style.backgroundColor = `rgb(0, 0, 0)`
        e.target.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
    } else if(erasing === true) {
        e.target.style.backgroundColor = `white`;
    }
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function gridSize() {
    size = prompt('Choose a size.', '');
    size = +size;
    if (typeof size === "number" && size <= 100 && size > 0) {
        removeAllChild(grid);
        makeBox(size);
    } else {
        alert('Error');
    }
}

function reset() {
    removeAllChild(grid);
    makeBox(size);
}

makeBox(16);