

const hamburgerToggle = document.querySelector(".hamburg-button");
const navMenu = document.querySelector(".navigation-menu");

let header = document.querySelector("header");

hamburgerToggle.addEventListener("click", () => {
    hamburgerToggle.classList.toggle( "active" );
    navMenu.classList.toggle( "active" );
    header.classList.toggle("white-bg");
})


window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
})

function resetToggle( event ){
    hamburgerToggle.classList.remove( "active" );
    navMenu.classList.remove( "active" );
    header.classList.remove("white-bg");
}
  
window.addEventListener("resize", resetToggle);
