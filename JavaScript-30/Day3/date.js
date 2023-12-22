//Date Object 


//Creating a time object
const now = new Date()
console.log(now)

//for year
console.log(now.getFullYear())
//for month
console.log(now.getMonth()) //0-11 arası değer verir 1 ekle
console.log(now.getDay()) //günü verir 0-6 arası 
console.log(now.getDate()) //ayın gününü verir
console.log(now.getMinutes()) //dakikayı verir
//daha fazlası için now.get yaz çıkan yerden seç


let year = now.getFullYear(),
    month= now.getMonth(),
    day = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    dayName = now.getDay()

let Months = [
    "ocak","şubat","mart","nisan","mayıs","haziran","temmuz","agustos","eylül","ekim","kasım","aralık"
]

let Days = [
    "Pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"
]

let humanReadableDate = `${day} ${Months[month]} ${year}, ${Days[dayName]} ${hour}:${minute}:${second}`


console.log(humanReadableDate)

