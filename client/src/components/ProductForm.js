import React, {PureComponent} from 'react'
import './style.css'




//Creating inputfields from sellers components
class ProductForm extends PureComponent {
	state = {}

	render() {
		return (
			<form className="forminput">
				<div>
					Title:
					<br />
					<input name="title" id="title"  />
				</div>

				<div>
					Price:
					<br />
					<input name="price" id="price" />
				</div>

				<div>
					Description:
					<br />
					<input name="description" id="description" />
				</div>

				<div>
					Email:
					<br />
					<input name="email" id="email" />
				</div>

				<div>
					Phonenumber:
					<br />
					<input name="phonenumber" id="phonenumber" />
				</div>

				<button>Add item</button>
			</form>
		)
	}
}

export default ProductForm
