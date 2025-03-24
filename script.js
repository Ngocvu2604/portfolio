function openPopup() {
  let overlay = document.getElementById("popupOverlay");
  let popup = document.getElementById("popupBox");

  overlay.style.display = "flex"; // Đảm bảo hiển thị lại overlay
  setTimeout(() => {
    overlay.classList.add("show");
    popup.classList.add("show");
  }, 10);
}

function closePopup() {
  let overlay = document.getElementById("popupOverlay");
  let popup = document.getElementById("popupBox");

  popup.classList.remove("show");
  setTimeout(() => {
    overlay.classList.remove("show");
    overlay.style.display = "none"; // Ẩn hoàn toàn sau khi animation kết thúc
  }, 300);
}

function submitContact() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (
    name.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Hiển thị kết quả
  document.getElementById("result").innerHTML = `
                <strong>Thông tin đã gửi:</strong><br>
                Họ tên: ${name.value} <br>
                Email: ${email.value} <br>
                Tin nhắn: ${message.value}
            `;

  // Reset input sau khi gửi
  name.value = "";
  email.value = "";
  message.value = "";

  closePopup();
}
