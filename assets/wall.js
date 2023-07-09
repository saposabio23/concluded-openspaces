var image = document.querySelectorAll('.image')
var wall = document.querySelector('.wall')

var i = 0;
for (i = 1; i <= 50; i++) {
  let image = document.createElement("img");
  image.src = "assets/wall/image-" + i + ".jpg";
  wall.appendChild(image);

  image.addEventListener('click', (event) => {
    var topPos = image.getBoundingClientRect().top + window.scrollY + 'px';
    var leftPos = image.getBoundingClientRect().left + window.scrollX + 'px';

    console.log(event.currentTarget.src)

    let imageDup = document.createElement("img");
    imageDup.src = event.currentTarget.src;
    imageDup.className = 'top'
    imageDup.style.top = topPos;
    imageDup.style.left = leftPos;
    imageDup.style.zIndex = '998';
    wall.appendChild(imageDup);

    event.currentTarget.src = "assets/wall/white.png";
    event.currentTarget.classList.add('imageNone')

    draggablex()

  })
}

// function fullIndex(event) {
//   if (event.currentTarget.classList.contains("top")){
//     event.currentTarget.style.zIndex = '999';
//   }
// }

// image.addEventListener("mouseover", fullIndex());

function draggablex() {

let draggableElems = document.querySelectorAll(".top");
let initialX = {},
    initialY = {};
let moveElement = {};
//events object
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
};
let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
    try {
        //We try to create TouchEvent (it would fail for desktops and throw error)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

for (let i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    // start(mouse down/touch start)
    draggableElem.addEventListener(events[deviceType].down, (e) => {
        e.preventDefault();
        //initial x and y points
        initialX[this] = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        initialY[this] = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        // start movement
        moveElement[this] = true;
    });
    // Move
    draggableElem.addEventListener(events[deviceType].move, (e) => {
        //if movement==true then set top and left to new X and y while removing any offset
        if (moveElement[this]) {
            var elem = e.target;
            e.preventDefault();
            let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
            let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
            elem.style.top = elem.offsetTop - (initialY[this] - newY) + "px";
            elem.style.left = elem.offsetLeft - (initialX[this] - newX) + "px";
            initialX[this] = newX;
            initialY[this] = newY;
        }
    });
    //mouse up/touch end
    draggableElem.addEventListener(
        events[deviceType].up,
        (stopMovement = (e) => {
            //stop movement
            moveElement[this] = false;
        })
    );
    draggableElem.addEventListener("mouseleave", stopMovement);
    document.addEventListener(events[deviceType].up, (e) => {
        moveElement[this] = false;
    });
}
  
}