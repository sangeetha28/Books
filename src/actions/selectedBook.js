export const selectedBook = book => {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};
