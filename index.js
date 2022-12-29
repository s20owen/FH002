const slidingNav = document.getElementById("Sidenav");

function openNav(){
    slidingNav.style.width = "100%";
}

function closeNav(){
    slidingNav.style.width = "0";
}

const close = document.querySelectorAll(".close");
close.forEach(element => {
    element.addEventListener('click', () => {
        closeNav();
    });
});
