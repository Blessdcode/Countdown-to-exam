const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')


let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

let futureDate = new Date("December 5, 2022 00:00:00")
// console.log(futureDate)

// const futureDate = new Date(tempYear, tempMonth, tempDay + 28, 0, 00, 0 )
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const min = futureDate.getMinutes()


let month = futureDate.getMonth()
month = months[month]

const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]


giveaway.textContent = `exam dey kick-off on ${weekday} ${date} ${month} ${year}`

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()

  const t = futureTime - today;
  // console.log(t) 

  // valuesin ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000

  // cal days

  let days = t / oneDay
  days = Math.floor(days)
  // console.log(days)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMin)
  let seconds = Math.floor((t % oneMin) / 1000)

  // set vaules array

  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index])
  })

if(t<0){
  clearInterval(countdown)
  deadline.innerHTML= `<h4 class="expired">
                                Exam has kick off
                          </h4>`
}
}

//  countdown
let countdown = setInterval(getRemainingTime,1000)
getRemainingTime()