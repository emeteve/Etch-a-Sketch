const grid = document.getElementById('grid');

function makeBox(boxNum) {
    for (i = 1; i <= boxNum*boxNum; i++) {
        let boxes = document.createElement('div');
        grid.appendChild(boxes).id = 'box';    
    }
}

makeBox(16);

