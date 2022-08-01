// this function calls the api and returns the array containing all the desired information
export const getBooks = async (search) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12`,
    );
    const data = await response.json();
    const items = await data.items;
    console.log(items);

    return items;
};
