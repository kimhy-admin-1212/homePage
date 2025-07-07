fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("menu-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Lỗi tải menu:", error));

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Lỗi tải footer:", error));
