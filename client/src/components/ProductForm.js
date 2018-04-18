import React, {PureComponent} from 'react'



//Creating inputfields from sellers
class ProductForm extends PureComponent {
	state = {}

	render() {
		return (
			<form>
				<div>
					<input name="name" id="name"  />
				</div>

				<div>
					<input name="price" id="price" />
				</div>

				<div>
					<input name="description" id="description" />
				</div>

				<button>Add item</button>
			</form>
		)
	}
}

export default ProductForm
