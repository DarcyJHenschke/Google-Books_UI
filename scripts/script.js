import { renderBooks } from "./search.js";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector(".searchBar__input");
    const container = document.querySelector(".book-grid");
    container.classList.toggle(
        "book-grid__active",
        container.style.backgroundColor != "#2b2c28",
    );
    const searchWrapper = document.querySelector(".title-wrapper");
    searchWrapper.classList.toggle(
        "title-wrapper__active",
        container.style.backgroundColor != "#2b2c28",
    );

    console.log(renderBooks(input.value));

    renderBooks(input.value);
});
