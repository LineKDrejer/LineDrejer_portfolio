const burgerIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector("header nav ul");

burgerIcon.addEventListener("click", ()=>{
    navigation.classList.toggle("mobile-nav")
    burgerIcon.classList.toggle('open');

})