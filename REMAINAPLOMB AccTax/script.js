const hamburgerMenu = document.querySelector(".hamburg-button");
const navContent = document.querySelector(".nav-content");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle( "active" );
    navContent.classList.toggle( "active" );
})
