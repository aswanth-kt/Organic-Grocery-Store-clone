
const scrollBtn = (leftId, rightId, containerId, scrollAmount) => {
    const leftBtn = document.getElementById(leftId);
    const rightBtn = document.getElementById(rightId);
    const scrollContainer = document.getElementById(containerId);

    if (leftBtn) {
        leftBtn.addEventListener("click", (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft -= scrollAmount;
        })
    } else {
        rightBtn.addEventListener("click", (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += scrollAmount;
        })
    }
};