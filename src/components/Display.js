import React from "react"

function Display(props) {
	const { temperatureInfo, weatherInfo } = props

	return (
		<div>
			<h1>Display</h1>
			<p>{temperatureInfo} &#8451;</p>
			<p>{weatherInfo}</p>
		</div>
	)
}

export default Display