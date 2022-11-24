const header = document.querySelector("[data-header]")
const doc = document.documentElement;
let left1 = (window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0);
let top1 = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);


window.addEventListener("scroll", () => {
    if(top.scrollY == 0 && header.classList.contains("black")) {
        header.classList.remove("black")
    }else if(top.scrollY > 65) {
        header.classList.add("black")
    }
})