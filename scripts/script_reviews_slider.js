const reviewsCarusel = document.querySelector(".reviews-owner-carusel");
const arrowReviewsBtns = document.querySelectorAll(".cont-reviews-owner .arrow-reviews-owner");
const cardWidth = reviewsCarusel.querySelector(".card-reviews-owner").offsetWidth;

let reviewsIsDragging = false, startReviewsX, startReviewsScrollLeft;

arrowReviewsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        reviewsCarusel.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth
    })
})

const reviewsDraggingStart = (e) => {
    reviewsIsDragging = true;
    reviewsCarusel.classList.add("dragging");
    startReviewsX = e.pageX;
    startReviewsScrollLeft = reviewsCarusel.scrollLeft;
}

const reviewsDragging = (e) => {
    if (!reviewsIsDragging) return
    reviewsCarusel.scrollLeft = startReviewsScrollLeft - (e.pageX - startReviewsX)
}

const reviewsDraggingStop = () => {
    reviewsIsDragging = false;
    reviewsCarusel.classList.remove("dragging");
}

reviewsCarusel.addEventListener("mousemove", reviewsDragging);
reviewsCarusel.addEventListener("mousedown", reviewsDraggingStart)
document.addEventListener("mouseup", reviewsDraggingStop)