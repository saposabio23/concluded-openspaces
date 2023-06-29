const $colu1 = document.getElementById("colu1");
const $colu2 = document.getElementById("colu2");
const $colu3 = document.getElementById("colu3");
const $colu4 = document.getElementById("colu4");
const $colu5 = document.getElementById("colu5");
const $colu6 = document.getElementById("colu6");
const $expand = document.querySelector(".expand");

function hoverNothing() {
  $expand.classList.remove("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.remove("expand6");
}
$colu1.addEventListener('mouseleave', hoverNothing);
$colu2.addEventListener('mouseleave', hoverNothing);
$colu3.addEventListener('mouseleave', hoverNothing);
$colu4.addEventListener('mouseleave', hoverNothing);
$colu5.addEventListener('mouseleave', hoverNothing);
$colu6.addEventListener('mouseleave', hoverNothing);


function hoverToExpand1() {
  $expand.classList.add("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.remove("expand6");
}
$colu1.addEventListener('mouseover', hoverToExpand1);


function hoverToExpand2() {
  $expand.classList.remove("expand1");
  $expand.classList.add("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.remove("expand6");
}
$colu2.addEventListener('mouseover', hoverToExpand2);


function hoverToExpand3() {
  $expand.classList.remove("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.add("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.remove("expand6");
}
$colu3.addEventListener('mouseover', hoverToExpand3);

function hoverToExpand4() {
  $expand.classList.remove("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.add("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.remove("expand6");
}
$colu4.addEventListener('mouseover', hoverToExpand4);

function hoverToExpand5() {
  $expand.classList.remove("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.add("expand5");
  $expand.classList.remove("expand6");
}
$colu5.addEventListener('mouseover', hoverToExpand5);

function hoverToExpand6() {
  $expand.classList.remove("expand1");
  $expand.classList.remove("expand2");
  $expand.classList.remove("expand3");
  $expand.classList.remove("expand4");
  $expand.classList.remove("expand5");
  $expand.classList.add("expand6");
}
$colu6.addEventListener('mouseover', hoverToExpand6);


