let API = '0f229bddf16ed64444cf47fad115ac05'
let lat = null
let lon = null
let myCity = ''
let unixTimeStamp = ''
let date = ''
let form = document.querySelector('.form')
let input = document.querySelector('.input')
let backToCity = document.querySelector('.weatherPanel__location')
let changeFashion = document.querySelector('.weatherPanel__mode_div')
let changeFashionJoystick = document.querySelector('.weatherPanel__mode_div_joystick')
let changeFashionText = document.querySelector('.weatherPanel__mode_text')
let changeFashionWeather = document.querySelector('.weather')
let button = false
let myCITY = ''

let sunriseImg = document.querySelector('.weatherDetails__main_sun_rise_img')
let sunsetImg = document.querySelector('.weatherDetails__main_sun_set_img')
let humidityImg = document.querySelector('.weatherDetails__details_humidity_img')
let windSpeedImg = document.querySelector('.weatherDetails__details_windSpeed_img')
let pressureImg = document.querySelector('.weatherDetails__details_pressure_img')
let UVImg = document.querySelector('.weatherDetails__details_UV_img')

let locations = document.querySelector('.location')                                             // окна
let weatherDetails = document.querySelector('.weatherDetails')
let dailyForecast = document.querySelector('.dailyForecast')
let hourlyForecast = document.querySelector('.hourlyForecast')
let BaseTemperature = document.querySelector('.weatherDetails__main_temperature_base')

let locationCity = document.querySelector('.location__city')                                   //первое окошко
let locationTime = document.querySelector('.location__time')
let locationData = document.querySelector('.location__data')

let temperature = document.querySelector('.weatherDetails__main_temperature_base')             //температура
let fellsTemperature = document.querySelector('.weatherDetails__main_temperature_feels_text2') // температураfeel
let sunrise = document.querySelector('.weatherDetails__main_sun_rise_info_time')
let sunset = document.querySelector('.weatherDetails__main_sun_set_info_time')
let weatherImg = document.querySelector('.weatherDetails__weather_img')
let weatherDescription = document.querySelector('.weatherDetails__weather_text')
let HumidityPercent = document.querySelector('.weatherDetails__details_humidity_percentage')
let WindSpeedPrecent = document.querySelector('.weatherDetails__details_windSpeed_percentage')
let pressurePersent = document.querySelector('.weatherDetails__details_pressure_percentage')
let icon = ''

let tempFor1day = document.querySelector('.dailyForecast__div_day1_temperature')               // 3 окно
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
let hour1div = document.querySelector('.hourlyForecast__div_hour1')
let hour2data = document.querySelector('.hourlyForecast__div_hour2_time')
let hour2img = document.querySelector('.hourlyForecast__div_hour2_img')
let hour2temp = document.querySelector('.hourlyForecast__div_hour2_temperature')
let hour2direction = document.querySelector('.hourlyForecast__div_hour2_img_direction')
let hour2speed = document.querySelector('.hourlyForecast__div_hour2_speed')
let hour2div = document.querySelector('.hourlyForecast__div_hour2')
let hour3data = document.querySelector('.hourlyForecast__div_hour3_time')
let hour3img = document.querySelector('.hourlyForecast__div_hour3_img')
let hour3temp = document.querySelector('.hourlyForecast__div_hour3_temperature')
let hour3direction = document.querySelector('.hourlyForecast__div_hour3_img_direction')
let hour3speed = document.querySelector('.hourlyForecast__div_hour3_speed')
let hour3div = document.querySelector('.hourlyForecast__div_hour3')
let hour4data = document.querySelector('.hourlyForecast__div_hour4_time')
let hour4img = document.querySelector('.hourlyForecast__div_hour4_img')
let hour4temp = document.querySelector('.hourlyForecast__div_hour4_temperature')
let hour4direction = document.querySelector('.hourlyForecast__div_hour4_img_direction')
let hour4speed = document.querySelector('.hourlyForecast__div_hour4_speed')
let hour4div = document.querySelector('.hourlyForecast__div_hour4')
let hour5data = document.querySelector('.hourlyForecast__div_hour5_time')
let hour5img = document.querySelector('.hourlyForecast__div_hour5_img')
let hour5temp = document.querySelector('.hourlyForecast__div_hour5_temperature')
let hour5direction = document.querySelector('.hourlyForecast__div_hour5_img_direction')
let hour5speed = document.querySelector('.hourlyForecast__div_hour5_speed')
let hour5div = document.querySelector('.hourlyForecast__div_hour5')

let arr = [
    {
        'temp': tempFor1day,
        'name': day1Data,
        'numb': 7,
        'hourData': hour1data,
        'hourImg': hour1img,
        'hourTemp': hour1temp,
        'hourdirection': hour1direction,
        'hourSpeed': hour1speed,
        'hourDiv': hour1div
    },
    {
        'temp': tempFor2day,
        'name': day2Data,
        'numb': 15,
        'hourData': hour2data,
        'hourImg': hour2img,
        'hourTemp': hour2temp,
        'hourdirection': hour2direction,
        'hourSpeed': hour2speed,
        'hourDiv': hour2div
    },
    {
        'temp': tempFor3day,
        'name': day3Data,
        'numb': 23,
        'hourData': hour3data,
        'hourImg': hour3img,
        'hourTemp': hour3temp,
        'hourdirection': hour3direction,
        'hourSpeed': hour3speed,
        'hourDiv': hour3div
    },
    {
        'temp': tempFor4day,
        'name': day4Data,
        'numb': 31,
        'hourData': hour4data,
        'hourImg': hour4img,
        'hourTemp': hour4temp,
        'hourdirection': hour4direction,
        'hourSpeed': hour4speed,
        'hourDiv': hour4div
    },
    {
        'temp': tempFor5day,
        'name': day5Data,
        'numb': 39,
        'hourData': hour5data,
        'hourImg': hour5img,
        'hourTemp': hour5temp,
        'hourdirection': hour5direction,
        'hourSpeed': hour5speed,
        'hourDiv': hour5div
    }
]

let firsWindowInformation = (dataMain) => {
    let timeZone = null
    timeZone = dataMain.timezone
    unixTimeStamp = dataMain.dt
    date = new Date((unixTimeStamp - 10800) * 1000)
    
    if(dataMain.timezone > 0){
        date = new Date(((unixTimeStamp-10800) + timeZone) * 1000)
        console.log("больше нуля");
        
    } else if(dataMain.timezone == 0){
        date = new Date((unixTimeStamp-10800) * 1000)
        console.log("ноль");
    } else if(dataMain.timezone < 0){
        date = new Date(((unixTimeStamp-10800) - timeZone) * 1000)
        console.log("меньше нуля");
    }
    console.log(date);
    
    locationCity.textContent = `${dataMain.name}`
    if(date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[1] === 'PM'){
        locationTime.textContent = `${+date.toLocaleString("en-US", {hour: "numeric"}).split(' ')[0] + 12}:${date.toLocaleString("en-US", {minute: "numeric"})}`
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
    
    temperature.textContent = `${(dataMain.main.temp - 273.15).toFixed(0)}°C`
    fellsTemperature.textContent = `${(dataMain.main.feels_like - 273.15).toFixed(0)}°C`

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
    arr[i].temp.textContent = `${(data.list[arr[i].numb].main.temp - f).toFixed(0)}°C`
    arr[i].name.textContent = `${date.toLocaleString("en-US", {weekday: "long"})}, ${date.toLocaleString("en-US", {day: "numeric"})} ${date.toLocaleString("en-US", {month: "short"})}`
}

let getInfoFor5Hours = (data, i, n, temp) => {
    let f = null
    if(temp === 1){
        f = 273.15
    }
    arr[i].hourData.textContent = `${data.list[n].dt_txt.split(' ')[1].split(':')[0]}:${data.list[n].dt_txt.split(' ')[1].split(':')[1]}`
    arr[i].hourImg.src = `https://openweathermap.org/img/wn/${data.list[n].weather[0].icon}@2x.png`
    arr[i].hourTemp.textContent = `${(data.list[n].main.temp - f).toFixed(0)}°C`
    arr[i].hourdirection.style.setProperty('transform', `rotate(${data.list[n].wind.deg}deg)`)
    arr[i].hourSpeed.textContent = `${(data.list[n].wind.speed).toFixed(0)}km/h`
    let time = data.list[n].dt_txt.split(' ')[1].split(':')[0]
    if(button === true){
        if((time >= 18 && time < 24) || (time < 8)){
            arr[i].hourDiv.style.setProperty('background', `linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)`)
            arr[i].hourDiv.style.setProperty('background-color', `#fff`)
        } else if(time > 8 && time < 18){
            arr[i].hourDiv.style.setProperty('background', `linear-gradient(169deg, #F88508 -15.98%, rgba(246, 250, 217, 0.00) 150.58%)`)
            arr[i].hourDiv.style.setProperty('background-color', `#fff`)
        }
    } else{
        arr[i].hourDiv.style.setProperty('background', `#373636`)
    }
}

let getWeather = (dataMain, data, temp) => {

    firsWindowInformation(dataMain)

    for(let i = 0; i<arr.length; i++){
        unixTimeStamp = data.list[arr[i].numb].dt
        date = new Date(unixTimeStamp * 1000)
        getInfoFor5days(data, date, i, temp)
    }

    let n = 0 
    for(let i = 0; i < arr.length; i++){
        n++
        unixTimeStamp = data.list[n].dt
        date = new Date(unixTimeStamp * 1000)
        getInfoFor5Hours(data, i, n, temp)
    }
}

async function getPosition(Data) {
    lat = Data.coords.latitude
    lon = Data.coords.longitude

    const geo = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`)
    const data = await geo.json()
    const main = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`)
    const dataMain = await main.json()
    let cityName = dataMain.name
    const geoHourlyForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&cnt=40&appid=${API}`)
    const dataHourlyForecast = await geoHourlyForecast.json()
    // console.log(dataHourlyForecast);
    myCITY = dataMain.name
    
    getWeather(dataMain, data,temp = 0)
    return myCITY
}

async function notGetPosition() {
    const geo = await fetch(`https://api.ipify.org?format=json`)
    const data = await geo.json()
    const geotime = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_i6rHVLjG83GMHtTUwy5VTe0xqAGnu&ipAddress=${data.ip}`)
    const datatime = await geotime.json()
    let CITY = datatime.location.region
    
    const geoLast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`)
    const dataLast = await geoLast.json()
    
    const geoForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API}`)
    const dataForecast = await geoForecast.json()
    let temp = 1
    getWeather(dataLast, dataForecast, temp)
    input.value = ''
}

async function searchCity(event) {
    if(event === '0'){
        if(myCITY !== ''){
            CITY = myCITY
        }
    } else{
        event.preventDefault()
        CITY = input.value
        myCITY = CITY
    }
    console.log(input.value);
    
    const geoLast = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`)
    const dataLast = await geoLast.json()
    console.log(dataLast);
    
    const geoForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API}`)
    const dataForecast = await geoForecast.json()
    console.log(dataForecast);
    let temp = 1
    getWeather(dataLast, dataForecast, temp)
    input.value = ''
    return myCITY
}

form.addEventListener('submit', () =>{
    searchCity(event)
})
backToCity.addEventListener('click', () => notGetPosition())



changeFashion.addEventListener('click', () => {
    changeFashionJoystick.classList.toggle('weatherPanel__mode_div_joystick_script')
    locations.classList.toggle('windows_script')
    weatherDetails.classList.toggle('windows_script')
    hourlyForecast.classList.toggle('windows_script')
    dailyForecast.classList.toggle('windows_script')
    changeFashionWeather.classList.toggle('main_script')
    
    if(button === false){
        document.documentElement.style.setProperty('color', '#292929');
        BaseTemperature.style.setProperty('background', 'linear-gradient(84deg, #292929 -16.56%, #fff 128.43%)')
        BaseTemperature.style.setProperty('-webkit-text-fill-color', 'transparent')
        BaseTemperature.style.setProperty('-webkit-background-clip', 'text')
        searchCity('0')

        sunriseImg.src = './img/black/sunrise-white 1.png'
        sunsetImg.src = './img/black/sunset-white 1.png'
        humidityImg.src = './img/black/humidity 1.png'
        windSpeedImg.src = './img/black/wind 1.png'
        pressureImg.src = './img/black/pressure-white 1.png'
        UVImg.src = './img/black/wind 1.png'
        button = true
    } else{
        document.documentElement.style.setProperty('color', '#fff');
        BaseTemperature.style.setProperty('background', 'linear-gradient(84deg, #fff -16.56%, #292929 128.43%)')
        BaseTemperature.style.setProperty('-webkit-text-fill-color', 'transparent')
        BaseTemperature.style.setProperty('-webkit-background-clip', 'text')

        sunriseImg.src = `./img/sunrise-white 1.png`
        sunsetImg.src = `./img/sunset-white 1.png`
        humidityImg.src = `./img/humidity 1.png`
        windSpeedImg.src = `./img/wind 1.png`
        pressureImg.src = `./img/pressure-white 1.png`
        UVImg.src = `./img/uv-white 1.png`
        button = false
        searchCity('0')
    }
    return button
})

navigator.geolocation.getCurrentPosition(getPosition, notGetPosition)