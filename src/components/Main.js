import React, { useState } from "react"
import Search from "./Search"
import Display from "./Display"
import ErrorMsg from "./ErrorMsg"

function Main() {
	const [currentCity, setCurrentCity] = useState("Vancouver")

	const [newCity, setNewCity] = useState("")
	
	const [temperatureInfo, setTemperatureInfo] = useState("")

	const [weatherInfo, setWeatherInfo] = useState("")

	const [humidity, setHumidity] = useState("")

	const [wind, setWind] = useState("")

	const [icon, setIcon] = useState("")

	const [errorLoad, setErrorLoad] = useState(false)
	
	const url = "//api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&APPID=e56d7df09eb193bb870fae23a23c925b"

	async function getData(url) {
		try {
			const response = await fetch(url, {mode: "cors"})
			const weatherData = await response.json()
			return weatherData
		} catch (error) {
			console.log(error)
		}	
	}
	
	async function composeData() {
		try {
			const data = await getData(url)
			setTemperatureInfo(data.main.temp)
			setWeatherInfo(data.weather[0].description)
			setHumidity(data.main.humidity)
			setWind(data.wind.speed)
			setIcon("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
			setErrorLoad(false)
		} catch (error) {
			setErrorLoad(true)
		}
	}

	const loadComponent = errorLoad ? <ErrorMsg /> : <Display temperatureInfo={temperatureInfo} weatherInfo={weatherInfo} currentCity={currentCity} humidity={humidity} wind={wind} icon={icon}/>

	return (
		<div className="main">
			<Search currentCity={currentCity} newCity={newCity} setCurrentCity={setCurrentCity} setNewCity={setNewCity} composeData={composeData} />
			{loadComponent}
		</div>
	)	
}

export default Main