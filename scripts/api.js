export const getBooks = async (search) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12`,
    );
    const data = await response.json();
    const items = await data.items;
    console.log(items);

    return items;
};
getBooks("order of the pheonix");

async function renderBooks(title) {
    let books = await getBooks(title);
    let html = "";
    books.forEach((book) => {
        let htmlSegment = `<div class="book">
                            <img class="book__img" alt="Image N/A" src="${book.volumeInfo.imageLinks.thumbnail}" >
                            <p class="book__text book__title">${book.volumeInfo.title}</p>
                            <p class="book__text book__authors">${book.volumeInfo.authors}</p>
                            <a href="${book.volumeInfo.previewLink} target="_blank" class="book__link">Description</a>
                        </div>`;

        html += htmlSegment;
    });
    let container = document.querySelector(".book-grid");
    container.innerHTML = html;
}

const searchButton = document.querySelector(".searchBar__button");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".searchBar__input");

    renderBooks(input.value);
});
