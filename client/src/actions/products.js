import * as request from 'superagent'

const baseUrl = 'http://localhost:4001'

export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

// fetching products from database

export const fetchAllProducts = () => (dispatch) => {
   request
    .get(`${baseUrl}/forsale`)
    .then(response => dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: response.body.forsale
    }))
    .catch(err => alert(err))
}

export const createProduct = (product) => (dispatch) => {
  request
    .post(`${baseUrl}/forsale`)
    .send(product)
    .then(response => dispatch({
      type: ADD_PRODUCT,
      payload: response.body
    }))
}
