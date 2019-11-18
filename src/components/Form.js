import React from "react"

function Form(props) {
	const { newCity, handleChange, handleSubmit} = props
	
	return (
		<form className="form" onSubmit={handleSubmit}>
			<div id="searchBar">
				<input 
					type="text"
					name="city"
					value={newCity}
					onChange={handleChange}
					placeholder="Enter City"
				/>
				<button id="formsubmit">Search</button>
			</div>
		</form> 
	)
}

export default Form