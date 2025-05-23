let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // เลื่อนลง - ซ่อน Navbar
    navbar.style.top = "-80px";
  } else {
    // เลื่อนขึ้น - แสดง Navbar
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
