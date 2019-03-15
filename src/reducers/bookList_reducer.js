
export const BookList = (state = null, {type,payload}) => {
  switch (type) {
    case "BOOK_SELECTED":
      return { ...state, selectedBook: payload };
    case "FETCH_BOOKS":
      return { ...state, booksData: payload };
    default:
      return state;
  }
};
