const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const scrollCate = document.getElementById("scroll-cate");

let scrollAmount = 180;
leftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollCate.scrollLeft -= scrollAmount
})
rightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollCate.scrollLeft += scrollAmount;
})