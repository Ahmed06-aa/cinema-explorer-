
function openform()  {
const signForm = document.getElementById("signForm");
    signForm.classList.add("open");
    
}
function closeform ()  {
    const closesignin = document.getElementById("signFoem");
    signForm.classList.remove("open");
}


function togglemenu() {
    const menuForm = document.getElementById("menuForm");
    if(menuForm.classList.contains("open"))  menuForm.classList.remove("open");
    else  menuForm.classList.add("open");
}

function scrollCarousel(direction) {
  const grid = document.getElementById('celebGrid');
  grid.scrollLeft += direction * 200;
}