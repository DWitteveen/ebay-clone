import {FETCHED_ALL_PRODUCTS} from '../actions/products'

//Take the action and update the state
export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_PRODUCTS:
      return action.payload

      // case ADD_PRODUCT:
  	  // return [...state, action.payload]



    default:
      return state
  }
}
