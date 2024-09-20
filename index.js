let getsearch = document.querySelector("#getsearch")
let icon = document.querySelector("#icon")
let text = document.querySelector("#text")
let temp = document.querySelector("#temp")
let feellike = document.querySelector("#feellike")
let wind = document.querySelector("#wind")
let humidity = document.querySelector("#humidity")
let date= document.querySelector("#date")
let City= document.querySelector("#City")
let Country = document.querySelector("#Country")

const getdata = async()=>{
const url=`http://api.weatherapi.com/v1/current.json?
key=8d194aaab323419797870217240107&q=${getsearch.value}&aqi=no`
let response = await fetch(url)
console.log(response);
let data = await response.json()
 console.log(data);
 icon.style.backgroundImage=`url( ${data.current.condition.icon})`
text.innerHTML=`${data.current.condition.text}`
 temp.innerHTML=`${data.current.temp_c}`
feellike.innerHTML=`Feels like :${data.current.feelslike_c}`
 wind.innerHTML=`Wind : ${data.current.wind_kph}km/h`
humidity.innerHTML=`Humidity :${data.current.humidity}`
date.innerHTML=`Date :${data.location.localtime}`
City.innerHTML=`City :${data.location.name}`
Country.innerHTML=`Country :${data.location.country}`
}