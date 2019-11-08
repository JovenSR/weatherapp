import React, { useState, useEffect } from "react"

function Search(props) {
	const { currentCity } = props

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
		const data = await getData(url)
		console.log("temp ", data.main.temp)
		console.log("weather ", data.weather[0].description)
	}

	composeData()

	
	return (
		<h1>Search</h1>
	)
}

export default Search