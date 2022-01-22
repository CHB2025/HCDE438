const element = document.getElementsByClassName('uw-patch')[0];
let rotation = 0;

element.style.transition = 'transform 250ms linear'

const updateRotation = () => {
   rotation += 10;
   element.style.transform = `rotate(${rotation}deg)`
}

setInterval(updateRotation, 250);
