import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'

// fetching priducts from database

export const fetchAllProducts = () => (dispatch) => {
   request
    .get(`${baseUrl}/forsale`)
    .then(response => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: response.body.forsale
    }))
    .catch(err => alert(err))
}
