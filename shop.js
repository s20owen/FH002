
// Navigation
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

// pass data
document.querySelectorAll('.content').forEach(item => {
    item.addEventListener('click', event => {
        
        const string = event.target.src;
        const result = string.split("/");
        const path = result[3] + '/' + result[4];

        const info = [item.dataset.name, item.dataset.details, item.dataset.price];

        let product = "../" + path;
        console.log(path);

        let params = new URLSearchParams();
        params.append("product", product),
        params.append("details", JSON.stringify(info));

        let url = "product.html?" + params.toString();
        location.href = url;
    });
});