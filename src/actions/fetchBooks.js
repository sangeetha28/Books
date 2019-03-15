import isbnDb from "../api/isbnDb";

export const fetchBooks = (query) => (dispatch) => {
    isbnDb.get(`/volumes?q=${query}`)
    .then(response => dispatch({type: 'FETCH_BOOKS', payload: response.data.items}))
    .catch(error => dispatch({type: 'ERROR', payload: error }));
}

