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
});

// Product-card-scrolling
const productLeftBtn = document.getElementById("product-left-btn");
const productRightBtn = document.getElementById("product-right-btn");
const scrollProduct = document.getElementById("scroll-product");

let productScrollAmount = 280;
productLeftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollProduct.scrollLeft -= productScrollAmount
})
productRightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollProduct.scrollLeft += productScrollAmount;
})