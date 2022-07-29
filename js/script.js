const grid = document.getElementById('grid');

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
            boxes.classList.add('black');
        })
        boxes.addEventListener('mouseout', () => {
            boxes.classList.remove('black');
        })

        grid.appendChild(boxes).id = 'box';    
    }
}

function color(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else {
        e.target.style.backgroundColor = `black`;
    }
}

function removeAllChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function grid16() {
    removeAllChild(grid);
    makeBox(16);
}

function grid64() {
    removeAllChild(grid);
    makeBox(64);
}

function grid32() {
    removeAllChild(grid);
    makeBox(32);
}

grid16();
