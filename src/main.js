let heart = document.querySelector(".heart");
let favourite = false;

const toggleFavourite = () => {
    favourite = !favourite;
    heart.style.color = favourite ? "red" : "black";
};

heart.addEventListener("click", toggleFavourite);