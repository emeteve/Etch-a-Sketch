const grid = document.getElementById('grid');

function makeBox(boxNum) {
    for (i = 1; i <= boxNum*boxNum; i++) {
        let boxes = document.createElement('div');
        grid.appendChild(boxes).id = 'box';    

        boxes.addEventListener('mouseover', () => {
            boxes.classList.add('blackHover');
        })

        boxes.addEventListener('mouseout', () => {
            boxes.classList.remove('blackHover');
        })

        boxes.addEventListener('click', () => {
            boxes.classList.add('blackClick');
        })
    }
}

makeBox(16);

