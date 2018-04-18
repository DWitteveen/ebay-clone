import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/products'
// import {Link} from 'react-router-dom'
import ProductForm from './ProductForm'


//class create
class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  //fetch the items from the database with an (action)
  componentWillMount() {
    this.props.fetchAllProducts()
  }


//render to screen
//product display
// adding advertisement fields
  render() {
    const {products} = this.props
    return (
      <div>
        <h1>All Adds</h1>



        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>&euro; {product.price}.00</td>
              <td><button>Buy</button></td>

            </tr>)) }
          </tbody>
				</table>

        <h1>Add Items</h1>
        <form>add items </form>
        <ProductForm />

      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {fetchAllProducts})(ProductsList)
