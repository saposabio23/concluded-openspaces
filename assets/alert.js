const $alert = document.querySelector(".alert");

function hideAlert() {
    $alert.style.display = "none";
  }
$alert.addEventListener('click', hideAlert);
