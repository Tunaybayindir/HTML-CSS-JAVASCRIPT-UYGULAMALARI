//Arrays

//How to create an empty array
//Array oluşturma yolları
const arr = Array()
const arra = []

const fiveXvalues = Array(5).fill('X')
console.log(fiveXvalues)
//How to create an array with values


let names2 = ["Tayfun", 1, 2, true, "son eleman"]
console.log(names2)

//sonuncu elemana erişme
let lastName = names2[names2.length -1]
console.log(lastName)

let js = "JavaScript"
const charInJavaScript = js.split('')
console.log(charInJavaScript)

let array1 = [1, 2, 3, 4, 3]
let array2 = [4, 5, 6]
let result = array1.concat(array2)//,array3 diyerek ekleyebilirsin
console.log(result)

console.log(array1.indexOf(3)) //bir eleman dizide var mı
//yok mu varsa dizideki indeksi yoksa -1 döner
console.log(array1.lastIndexOf(3))//en son hangi dizide 
//geçiyorsa oranın indeksini verir

console.log(array1.includes(3))
//var mı yok mu varsa true yoksa false döner

console.log(Array.isArray(array1))
//array mı diye sorgular
console.log(array1.toString()) //diziyi stringe çevirir
console.log(array1.join("-")) //değerlerin arasına - koyar
console.log(array1.slice(1,3))
console.log(array1.splice(0,1)) //remove the first item
array1.push("new item") // dizinin sonuna ekler
array1.pop() //son degeri siler
let sonDeger = array1.pop()
array1.unshift("ilk eleman") //dizinin başına ekler
console.log(sonDeger)
array1.reverse() //tersine çevirir değerleri
console.log(array1.sort()) //sıralama
console.log(array1)