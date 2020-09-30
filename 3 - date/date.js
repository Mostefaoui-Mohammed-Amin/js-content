let date = new Date()
let dateMillisecond = new Date(1600000000000)
let dateString = new Date("april 15,2020 14:05:00") // month day year hours minutes seconds milliSeconds
let dateInteger = new Date(2020,01,10,10,30,00,00) // year month day hours minutes seconds milliSeconds
// start date format
let fullFormat = new Date("april 15 2020 14:05:00")
let longFormat = new Date('oct 15 2020 14:30')
let shortFormat = new Date('04/15/2020') //remarque/ month/day/year
let isoFormat = new Date('2020-04-15 14:30:00+02:00') // YYYY-MM-DD hh:mm:ss TZD time zone dis...
// start get time
let getDate = date.getDate() // get day of the month
let getDay = date.getDay() // get number of day from 0 to 6
let getFullYear = date.getFullYear()
let getMonth = date.getMonth()
let getHours = date.getHours()
let getMinutes = date.getMinutes()
let getSeconds = date.getSeconds()
let getMilliseconds = date.getMilliseconds()
let getTime = date.getTime() // get number of milliseconds from 1970
let getTimezoneOffset = date.getTimezoneOffset() // get deferent between UTC and locale time in minutes
// and we have methods to get UTC time:: like getUTCDay.....
//start get set date functions
let setDate = date.setDate(5) // to set new day(change) take new day(require) from 1 to 31
let setFullYear = date.setFullYear(2021) // year(require) month(opt can take negative value) day(opt can take negative value)
let setHours = date.setHours(15) // hour(require) minute(opt can take negative value) seconds(opt can take negative value) from 0 to 23
let setMonth = date.setMonth(6) // month(require) from 0 to 11
let setMinutes = date.setMinutes(45) //minute(require) seconds(opt can take negative value) milliseconds(opt can take negative value) from 0 to 59
let setSeconds = date.setSeconds(10)  //seconds(require) milliseconds(opt can take negative value)
let setMilliseconds = date.setMilliseconds(230) //milliseconds(require) from 0 to 999
// and we have methods to set UTC time:: like setUTCDay.....
// start with Date constructor
let dateNow = Date.now()
let dateParse = Date.parse('10 jan 2020') //get milliseconds from 1970 to specific date
let isoString = date.toISOString() //to convert time to iso format
let dateStrings = date.toDateString()
let timeString = date.toTimeString()