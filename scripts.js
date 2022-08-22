// const placeForResults = document.getElementById("results")

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })

console.log("It is working");

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", ()  => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click",  () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))