let eventCount = 0; // Biến đếm số lần sự kiện

function moveRandomEl(elm) {
    elm.style.position = "absolute";

    // Lấy kích thước phần tử và cửa sổ trình duyệt
    const elementWidth = elm.offsetWidth;
    const elementHeight = elm.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Tính toán giới hạn để phần tử không ra khỏi màn hình
    const maxTop = windowHeight - elementHeight - 100; 
    const maxLeft = windowWidth - elementWidth - 100;

    const randomTop = Math.random() * maxTop;
    const randomLeft = Math.random() * maxLeft;

    elm.style.top = randomTop + "px";
    elm.style.left = randomLeft + "px";

    // Tăng số lần sự kiện và giảm kích thước phần tử
    eventCount++;
    const scaleFactor = 1 - 0.1 * eventCount; // Giảm kích thước 10% mỗi lần
    elm.style.transform = `scale(${scaleFactor})`;

    // Kiểm tra nếu số lần sự kiện đạt 7 thì thực hiện hiệu ứng biến mất
    if (eventCount >= 7) {
        elm.classList.add("fade-out"); // Thêm lớp fade-out để làm mờ phần tử
        setTimeout(() => {
            elm.style.display = "none"; // Ẩn phần tử sau khi hiệu ứng hoàn tất
            const yesButton = document.getElementById("yes");
            yesButton.classList.add("grow"); // Làm to nút "Có"
            yesButton.classList.add("blink"); // Thêm hiệu ứng nhấp nháy và đổi màu liên tục
        }, 500); // Thời gian chờ phù hợp với thời gian hiệu ứng opacity
    }
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

moveRandom.addEventListener("click", function (e) {
    moveRandomEl(e.target);
});
