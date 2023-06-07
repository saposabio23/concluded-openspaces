const close = document.querySelector("#close");
const infoText = document.querySelector(".info-text");
const infoHelp = document.querySelector("#info-help");

function hideInfo() {
    infoText.classList.toggle ('info-hide')
    close.classList.toggle ('info-arrow')
  }
close.addEventListener('click', hideInfo);
infoHelp.addEventListener('click', hideInfo);
