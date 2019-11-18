import React from "react"

function Display(props) {
	const { temperatureInfo, weatherInfo, currentCity, humidity, wind, icon } = props
	
	return (
		<div className="display">
			<div className="title">
				<h1 id="city">{currentCity.toUpperCase().split(",")[0]}</h1>
			</div>
			<div className="climate">
				<img id="img" src={icon} alt="" />
				<h3 id="temp">{temperatureInfo} &#8451;</h3>
				<p id="info">{weatherInfo.toUpperCase()}</p>
			</div>
			<div className="extra">
				<p id="humid">Humidity: {humidity}%</p>
				<p id="wind">Wind: {wind} km/h</p>
			</div>	
			
		</div>
	)
}

export default Display