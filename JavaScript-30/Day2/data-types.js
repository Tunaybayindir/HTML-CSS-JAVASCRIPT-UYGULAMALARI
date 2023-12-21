//primitive data types string int bool null undefined
console.log("merhaba");

let numOne = 1;
let numTwo = 1;

console.log(numOne == numTwo) //true gelir

let st = "string"
st[0] = 'y' //primitive değişmez
console.log(st)


//non-primitive data types
// değişebilir değerleri
let array = [1, "string", true , null , undefined] //farklı tür değer alabilir



let name = "tunay"
console.log(name.toUpperCase()) //her harfi büyük yazar
console.log(name.toLowerCase()) //her harfi küçük yazar
console.log(name.length) // uzunlugu verir
let lastIndex =name.length - 1; //son indeksi verir
console.log(name[lastIndex]) //son harfi yazdırır

let youtubeChannel = "JavaScript"

console.log(youtubeChannel.substr(0,6)) //0 dan 5. indekse kadar alıyor 6. indeksi almıyor

let words = " 30 days of javasScript "
console.log(words)
console.log(words.search("of")) // of un başladığı yerin indeksi döner
console.log(words.startsWith(" 30")) //30 la başlıyor mu
console.log(words.indexOf(0)) //geçiyorsa içinde ilk indeksi verir
console.log(words.replace("of", "on")) //of on olur 1 seferlik
console.log(words.includes(30)) //30 ifadenin içinde var mı yok mu kontrol eder
console.log(words.trim()) //baş ve sondaki boşlukları siler
console.log(words.split()) //boşluklardan böler dizi yapar

let text = "in 2019, I ran 30 Days of Python"
let regEx = /\d+/

console.log(text.match(regEx))
console.log(text.match(/\d+/g)) //global kullanım içindeki sayıları bulur


console.log(typeof "10")
console.log(typeof parseInt("10"))