document.getElementById("nav-toggler").addEventListener("click", toggleFunction);

var navLinks = document.getElementById("nav-links");

function toggleFunction() {

    if (navLinks.style.display=='none'){
        navLinks.style.display='block';
    }
    else{
        navLinks.style.display='none';
    }
        
}


