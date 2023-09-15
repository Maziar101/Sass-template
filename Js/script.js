const switchDark = document.getElementById("switch-to-dark");
const switchLight = document.getElementById("switch-to-light");
switchDark.addEventListener("click" , ()=>{
    document.querySelector(".dark").classList.toggle("dark-bg");
    document.querySelector(".do-div").classList.toggle("dark-bg");
    document.querySelector(".draw-div").classList.toggle("dark-bg");
    document.querySelector(".draw-back").classList.toggle("dark-bg");
    document.querySelector(".end-txt").classList.toggle("dark-bg");
    document.querySelector(".end").classList.toggle("dark-bg");
    switchDark.style.display = "none";
    switchLight.style.display = "block";
});
switchLight.addEventListener("click",()=>{
    document.querySelector(".dark").classList.toggle("dark-bg");
    document.querySelector(".do-div").classList.toggle("dark-bg");
    document.querySelector(".draw-div").classList.toggle("dark-bg");
    document.querySelector(".draw-back").classList.toggle("dark-bg");
    document.querySelector(".end-txt").classList.toggle("dark-bg");
    document.querySelector(".end").classList.toggle("dark-bg");
    switchDark.style.display = "block";
    switchLight.style.display = "none";
});