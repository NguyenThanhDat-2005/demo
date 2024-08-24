// 
function moveRandomEl(elm) {
  elm.style.position = "absolute";

  // Lấy kích thước phần tử và cửa sổ trình duyệt
  const elementWidth = elm.offsetWidth;
  const elementHeight = elm.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Tính toán giới hạn để phần tử không ra khỏi màn hình
  const maxTop = windowHeight - elementHeight - 100; // Giảm thêm để đảm bảo không chạm mép
  const maxLeft = windowWidth - elementWidth - 100;

  const randomTop = Math.random() * maxTop;
  const randomLeft = Math.random() * maxLeft;

  elm.style.top = randomTop + "px";
  elm.style.left = randomLeft + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

moveRandom.addEventListener("click", function (e) {
  moveRandomEl(e.target);
});
