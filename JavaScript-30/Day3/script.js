//boolean

//Sadece true false deger alır

let isLightOn = true
let isRaining = false
let isMarried = true
let trueValue = 4>3
let falseValue = 4<3
let isHungry = true

let isHungryNo = !isHungry
console.log(isHungryNo)
//operators

let a = 4
let b = 5

a += b
console.log("a = ",a)

//logical operators
// && ve 1v0=0 1v1=1
// || veya 1v0=0 1v1=1
let c = a <10 && a>2 //a 10 dan küçük 2 den büyükse true döner değilse false
console.log(c)

5>4 ? console.log("5 büyüktür 4'ten ") : console.log("5 büyük değildir 4'ten")

//window komutları

//uyarı mesajı
// alert("naber")

//deger alma
// prompt("bir sayı giriniz")
//onay kutusu
// let confi= confirm("Emin misin")

if(confi)
{
    console.log(confi)
    alert("Doğru")
}else if(confi==false){
    console.log(confi)
    alert("yanlis")
}