import React, { useState, useEffect } from "react"
import Search from "./Search"
import Display from "./Display"

function Main() {
	const [currentCity, setCurrentCity] = useState("Vancouver")

	return (
		<div>
			<Search currentCity={currentCity} />
			<Display />
		</div>
	)	
}


export default Main