import React from "react"

function Form(props) {
	
	const { newCity, handleChange, handleSubmit } = props
	
	return (
		<form onSubmit={handleSubmit}>
			<div id="searchBar">
				<b>Enter City:</b>
				<input 
					type="text"
					name="city"
					value={newCity}
					onChange={handleChange}
				/>
				<button id="formsubmit">Submit</button>
			</div>
		</form> 
	)
}

export default Form