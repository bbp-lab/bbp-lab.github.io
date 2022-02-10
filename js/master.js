//==========================
//nav bar active menu
//==========================

const li = document.querySelectorAll(".nav-item");
const sec = document.querySelectorAll(".nav-section");

function activeMenu(){
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
