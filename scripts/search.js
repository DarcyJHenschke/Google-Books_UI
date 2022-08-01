import { getBooks } from "./api.js";

export async function renderBooks(title) {
    let books = await getBooks(title);
    let html = "";
    books.forEach((book) => {
        const image =
            book.volumeInfo.imageLinks?.thumbnail ?? // when book img is N/A it returns default img
            "./../assets/defaultBook.jpeg";
        let htmlSegment = `<div class="book">
                            <img class="book__img" src="${image}" >
                            <div class='text-wrapper'>
                                <p class="book__text book__title">${book.volumeInfo.title}</p>
                                <p class="book__text book__authors">Author(s): ${book.volumeInfo.authors}</p>
                                <p class="book__text book__description">${book.volumeInfo.description}</p>
                            </div>    
                            <a href=${book.volumeInfo.infoLink} class='book__link' >Get book</a>
                            <div class='modal'>
                                <div class='modal__content'>
                                    <span class='modal__close'>&times;</span>
                                    <p class="modal__text">${book.volumeInfo.title}</p>
                                    <p class="modal__text">${book.volumeInfo.authors}</p>
                                    <p class="modal__text">${book.volumeInfo.description}</p>
                                    <p class="modal__text">${book.volumeInfo.industryIdentifiers[0].identifier}</p>
                                </div>
                            </div>                            
                        </div>`;

        html += htmlSegment;
    });
    let container = document.querySelector(".book-grid");
    container.innerHTML = html;
}
