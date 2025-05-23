function toggleMenu() {
    let menu = document.getElementById("menu");
    
    // สลับคลาส hidden เพื่อแสดง/ซ่อนเมนู
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

