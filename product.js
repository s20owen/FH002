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


const cont = document.getElementById("product-container");
// content from shop page
function get () {
    // (A) GET THE PARAMETERS
    let params = new URLSearchParams(window.location.search),
       product = params.get("product"),
       details = JSON.parse(params.get("details"));
  
    
    cont.innerHTML += 
        `<div class="left"> 
            <img src="${details[0]}">
        </div>

        <div class="right">
            <h1>${details[1]}</h1>
            <p>${details[2]}</p>
            <p>${details[3]}</p>
            
            <input class="stepper" type="number" id="quantity" name="quantity" step="1" value="1">
            <p>quantity</p>
            <span>ADD TO CART</span>
        </div>
    `;
    console.log("details " + details[0]); 
}

get();