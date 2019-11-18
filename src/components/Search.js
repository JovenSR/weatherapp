import React, { useEffect } from "react"
import Form from "./Form"

function Search(props) {

	const { currentCity, newCity, setCurrentCity, setNewCity, composeData } = props

	useEffect(() => {
		composeData()	
	}, [currentCity]
	)
	
	function handleChange(event) {
		const { value } = event.target
		setNewCity(value)
	}

	function handleSubmit(event) {
		event.preventDefault()
		setCurrentCity(newCity)
		setNewCity("")
	}
	
	return (
		<Form newCity={newCity} handleChange={handleChange} handleSubmit={handleSubmit}/>
	)
}

export default Search