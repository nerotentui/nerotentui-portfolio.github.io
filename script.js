function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - scrollY}px; left: ${
      e.pageX
    }px; transform: translate(-50%, -50%);`
  );
});

let d = new Date();
let date = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

if (date < 10) {
  date = "0" + date;
}

if (month < 10) {
  month = "0" + month;
}

document.write("Date: ");
var dateStr = date + "/" + month + "/" + year;
document.write(dateStr);

AOS.init();
