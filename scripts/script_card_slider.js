const carousel = document.querySelector(".carusel-search-pet");
const arrowBtns = document.querySelectorAll(".cont-search-pet .arrow-search-pet")
const firstCardWidth = carousel.querySelector(".card-search-pet").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging')
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragging = false
    carousel.classList.remove('dragging')
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);