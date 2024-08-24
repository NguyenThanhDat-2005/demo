function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 95) + "%";
    elm.style.left = Math.floor(Math.random() * 95) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

  moveRandom.addEventListener("click", function (e) {
    moveRandomEl(e.target);
  });