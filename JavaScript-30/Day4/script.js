/*
Conditionals
-if
-if else
-if else if else 
-switch 
-termary operator
*/

//if
let num = 3
if(num > 0){
    console.log(`${num} is a positive number`)
}

//if else
let isRaining = false
//isRaining True olursa if içi çalışır
//isRaining False Olursa else çalışır
if(isRaining){
    console.log("Şemsiye Al!")
}else{
    console.log("Hava Güneşli","Şemsiyeye Gerek Yok!")
}

//if-else if-else
//if doğru değilse else if'teki koşula bakar o da değilse
//else komutu otomatik çalışır
//if doğruysa if'in içindeki kodlar çalışır
let a = 5
if(a>0){
    console.log("A Pozitif Sayidir")
}else if(a == 0){
    console.log("A nötr.")
}else{
    console.log("A negatif sayidir.")
}

//switch

let number = prompt("Enter Number");
switch (true){
    case number > 0:
        console.log("A Pozitif");
        break;
    case number == 0:
        console.log("A nötr");
        break;
    case number < 0: 
        console.log("A negatif Sayidir");
        break;
    default:
        console.log("Entered Value Was Not A Number");
}

//ternary Operators
//isRaining True ise ? işareti içi çalışır
//false ise : içi çalışır
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

