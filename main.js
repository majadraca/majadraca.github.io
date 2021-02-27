// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Nav-bar on Phone
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navItem = document.querySelectorAll(".nav-item");

    burger.addEventListener("click", () => {

        //Burger Animation
        burger.classList.toggle("toggle");

        //Nav-item Animation
        navItem.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 4 + 0.3
                }s`;
            }
        });
    });  
}



navSlide();