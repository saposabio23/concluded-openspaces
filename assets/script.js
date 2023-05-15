const $alert = document.querySelector(".alert");

function hideAlert() {
    $alert.style.display = "none";
  }
$alert.addEventListener('click', hideAlert);


const $colu1 = document.getElementById("colu1");
const $colu2 = document.getElementById("colu2");
const $colu3 = document.getElementById("colu3");
const $expand = document.querySelector(".expand");

function hoverToExpand1() {
    $expand.classList.add("expand1");
    $expand.classList.remove("expand2");
    $expand.classList.remove("expand3");
  }
$colu1.addEventListener('mouseover', hoverToExpand1);


function hoverToExpand2() {
    $expand.classList.remove("expand1");
    $expand.classList.add("expand2");
    $expand.classList.remove("expand3");
  }
$colu2.addEventListener('mouseover', hoverToExpand2);


function hoverToExpand3() {
    $expand.classList.remove("expand1");
    $expand.classList.remove("expand2");
    $expand.classList.add("expand3");
  }
$colu3.addEventListener('mouseover', hoverToExpand3);

