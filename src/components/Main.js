import React, { useState } from "react"
import Search from "./Search"
import Display from "./Display"

function Main() {
	const [currentCity, setCurrentCity] = useState("Vancouver")

	const [newCity, setNewCity] = useState("")
	
	const [temperatureInfo, setTemperatureInfo] = useState("")

	const [weatherInfo, setWeatherInfo] = useState("")
	
	const url = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&APPID=e56d7df09eb193bb870fae23a23c925b"
	
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
		} catch (error) {
			console.log("oops that doesn't seem to be a city")
		}
	}

	return (
		<div>
			<Search currentCity={currentCity} newCity={newCity} setCurrentCity={setCurrentCity} setNewCity={setNewCity} composeData={composeData} />
			<Display temperatureInfo={temperatureInfo} weatherInfo={weatherInfo} />
		</div>
	)	
}

export default Main