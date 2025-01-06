let API = '0f229bddf16ed64444cf47fad115ac05'
let lat = null
let lon = null
let myCity = ''
let unixTimeStamp = ''
let date = ''
let form = document.querySelector('.form')
let input = document.querySelector('.input')
let backToCity = document.querySelector('.weatherPanel__location')

let locationCity = document.querySelector('.location__city')
let locationTime = document.querySelector('.location__time')
let locationData = document.querySelector('.location__data')

let temperature = document.querySelector('.weatherDetails__main_temperature_base')
let fellsTemperature = document.querySelector('.weatherDetails__main_temperature_feels_text2')
let sunrise = document.querySelector('.weatherDetails__main_sun_rise_info_time')
let sunset = document.querySelector('.weatherDetails__main_sun_set_info_time')
let weatherImg = document.querySelector('.weatherDetails__weather_img')
let weatherDescription = document.querySelector('.weatherDetails__weather_text')
// let Humidity = document.querySelector('.weatherDetails__details_humidity_text')
let HumidityPercent = document.querySelector('.weatherDetails__details_humidity_percentage')
// let WindSpeed = document.querySelector('.weatherDetails__details_windSpeed_percentage')
let WindSpeedPrecent = document.querySelector('.weatherDetails__details_windSpeed_percentage')
let pressurePersent = document.querySelector('.weatherDetails__details_pressure_percentage')
let icon = ''

let tempFor1day = document.querySelector('.dailyForecast__div_day1_temperature')
let tempFor2day = document.querySelector('.dailyForecast__div_day2_temperature')
let tempFor3day = document.querySelector('.dailyForecast__div_day3_temperature')
let tempFor4day = document.querySelector('.dailyForecast__div_day4_temperature')
let tempFor5day = document.querySelector('.dailyForecast__div_day5_temperature')
let day1Data = document.querySelector('.dailyForecast__div_day1_data ')
let day2Data = document.querySelector('.dailyForecast__div_day2_data ')
let day3Data = document.querySelector('.dailyForecast__div_day3_data ')
let day4Data = document.querySelector('.dailyForecast__div_day4_data ')
let day5Data = document.querySelector('.dailyForecast__div_day5_data ')

let hour1data = document.querySelector('.hourlyForecast__div_hour1_time')
let hour1img = document.querySelector('.hourlyForecast__div_hour1_img')
let hour1temp = document.querySelector('.hourlyForecast__div_hour1_temperature')
let hour1direction = document.querySelector('.hourlyForecast__div_hour1_img_direction')
let hour1speed = document.querySelector('.hourlyForecast__div_hour1_speed')

let arr = [
    {
        'temp': tempFor1day,
        'name': day1Data,
        'numb': 7
    },
    {
        'temp': tempFor2day,
        'name': day2Data,
        'numb': 15
    },
    {
        'temp': tempFor3day,
        'name': day3Data,
        'numb': 23
    },
    {
        'temp': tempFor4day,
        'name': day4Data,
        'numb': 31
    },
    {
        'temp': tempFor5day,
        'name': day5Data,
        'numb': 39
    }
]

let firsWindowInformation = (dataMain) => {
    unixTimeStamp = dataMain.dt
    date = new Date(unixTimeStamp * 1000)
    locationCity.textContent = `${dataMain.name}`
    if(date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[1] === 'PM'){ 
        locationTime.textContent = `${+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]+12}:${date.toLocaleString("en-US", {minute: "numeric"})}`
        if(date.toLocaleString("en-US", {minute: "numeric"}).length === 1){
            locationTime.textContent = `${+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]+12}:${'0' + date.toLocaleString("en-US", {minute: "numeric"})}`
        }
    } else{
        if(+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0] < 10){
            locationTime.textContent = `${'0' + date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]}:${date.toLocaleString("en-US", {minute: "numeric"})}`
            if(date.toLocaleString("en-US", {minute: "numeric"}).length === 1){
                locationTime.textContent = `${'0' + date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]+12}:${'0' + date.toLocaleString("en-US", {minute: "numeric"})}`
            }
        }
        locationTime.textContent = `${+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]}:${date.toLocaleString("en-US", {minute: "numeric"})}`
        if(date.toLocaleString("en-US", {minute: "numeric"}).length === 1){
            locationTime.textContent = `${+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0]+12}:${'0' + date.toLocaleString("en-US", {minute: "numeric"})}`
        }
    }
    locationData.textContent = `${date.toLocaleString("en-US", {weekday: "long"})}, ${date.toLocaleString("en-US", {day: "numeric"})} ${date.toLocaleString("en-US", {month: "short"})}`
    console.log(dataMain);
    
    temperature.textContent = `${(dataMain.main.temp - 273.15).toFixed(1)}°C`
    fellsTemperature.textContent = `${(dataMain.main.feels_like - 273.15).toFixed(1)}°C`

    HumidityPercent.textContent = `${dataMain.main.humidity}%`
    WindSpeedPrecent.textContent = `${dataMain.wind.speed}km/h`
    pressurePersent.textContent = `${dataMain.main.pressure}hPa`
    weatherDescription.textContent = `${dataMain.weather[0].description}`
    icon = dataMain.weather[0].icon
    weatherImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    let sunriseCode = dataMain.sys.sunrise
    let sunriseCodeDate = new Date(sunriseCode * 1000)
    sunrise.textContent = `${sunriseCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[1].split(":")[0]}:${sunriseCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[1].split(":")[1]} ${sunriseCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[2]}`
    
    let sunsetCode = dataMain.sys.sunset
    let sunsetCodeDate = new Date(sunsetCode * 1000)
    sunset.textContent = `${sunsetCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[1].split(":")[0]}:${sunsetCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[1].split(":")[1]} ${sunsetCodeDate.toLocaleString("en-US", {timeZoneName: "short"}).split(' ')[2]}`

}

let getInfoFor5days = (data, date, i, temp) => {
    let f = null
    if(temp === 1){
        f = 273.15
    }
    arr[i].temp.textContent = `${(data.list[arr[i].numb].main.temp - f).toFixed(1)}°C`
    arr[i].name.textContent = `${date.toLocaleString("en-US", {weekday: "long"})}, ${date.toLocaleString("en-US", {day: "numeric"})} ${date.toLocaleString("en-US", {month: "short"})}`
}

let getWeather = (dataMain, data, temp) => {

    firsWindowInformation(dataMain)

    for(let i = 0; i<arr.length; i++){
        unixTimeStamp = data.list[arr[i].numb].dt
        date = new Date(unixTimeStamp * 1000)
        getInfoFor5days(data, date, i, temp)
    }

}

async function getPosition(Data) {
    console.log(Data);
    lat = Data.coords.latitude
    lon = Data.coords.longitude

    const geo = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`)
    const data = await geo.json()
    const main = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`)
    const dataMain = await main.json()
    // const geoHours = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API}`)
    // const dataHours = await geoHours.json()  про версия
    // console.log(dataHours);
    
    getWeather(dataMain, data,temp = 0)
}

async function notGetPosition() {
    const geo = await fetch(`https://api.ipify.org?format=json`)
    const data = await geo.json()
    const geotime = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_i6rHVLjG83GMHtTUwy5VTe0xqAGnu&ipAddress=${data.ip}`)
    const datatime = await geotime.json()
    let CITY = datatime.location.region
    console.log(CITY);
    
    const geoLast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`)
    const dataLast = await geoLast.json()
    console.log(CITY);
    
    const geoForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API}`)
    const dataForecast = await geoForecast.json()
    let temp = 1
    getWeather(dataLast, dataForecast, temp)
}

async function searchCity(event) {
    event.preventDefault()
    console.log(input.value);
    
    CITY = input.value
    const geoLast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`)
    const dataLast = await geoLast.json()
    
    const geoForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API}`)
    const dataForecast = await geoForecast.json()
    console.log(dataLast);
    let temp = 1
    getWeather(dataLast, dataForecast, temp)
}

form.addEventListener('submit', () =>{
    searchCity(event)
})
backToCity.addEventListener('click', () => notGetPosition())

navigator.geolocation.getCurrentPosition(getPosition, notGetPosition)