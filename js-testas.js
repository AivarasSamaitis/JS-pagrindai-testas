/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/


function valiuta1 (eurai, dol_kursas)    {
    let suma = eurai * dol_kursas
    console.log(`${eurai}€ konvertavus į dolerio kursą: ${Math.round(suma * 100) / 100}$`)
}

let eurai = Math.floor(Math.random() * 1000) + 1
let dol_kursas = 1.082858

valiuta1(eurai, dol_kursas)


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/


function valiuta2 (doleriai, eur_kursas)    {
    let suma = doleriai * eur_kursas
    console.log(`${doleriai}$ konvertavus į euro kursą: ${Math.round(suma * 100) / 100}€`)
}

let doleriai = Math.floor(Math.random() * 1000) + 1
let eur_kursas = 0.92332859

valiuta2(doleriai, eur_kursas)


/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/


function kuno_mases_indeksas(ugis, svoris)  {
    let kvadratas = ugis **2
    let BMI = svoris / kvadratas
        if(BMI < 18.5)  {
            console.log(`Per mažas kūno svoris. Ūgis - ${ugis}. Svoris - ${svoris}. Kūno masės indeksas: ${Math.round(BMI * 100) / 100}`)
        }   else if (18.5 <= BMI && BMI < 25)   {
            console.log(`Normalus kūno svoris. Ūgis - ${ugis}. Svoris - ${svoris}. Kūno masės indeksas: ${Math.round(BMI * 100) / 100}`)
        }   else if (BMI > 25) {
            console.log(`Per didelis kūno svoris. Ūgis - ${ugis}. Svoris - ${svoris}. Kūno masės indeksas: ${Math.round(BMI * 100) / 100}`)
        }   else {
            console.log(`Įvyko klaida, prašome patikrinti ar teisingai įvedėte duomenys.`)
        }
}

let ugis = 1.73
let svoris = 76

kuno_mases_indeksas(ugis, svoris)


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/


function amziaus_skaiciuokle(amzius)   {
    let dienos = amzius * 365
    let valandos = dienos * 24
    let minutes = dienos * 24 * 60
    let sekundes = dienos * 24 * 60 * 60

    console.log(`${amzius} metus pavertus dienomis gaunasi ${dienos} dienos.`)
    console.log(`${amzius} metus pavertus valandomis gaunasi ${valandos} valandos.`)
    console.log(`${amzius} metus pavertus minutėmis gaunasi ${minutes} minutes.`)
    console.log(`${amzius} metus pavertus sekundėmis gaunasi ${sekundes} sekundes.`)
}

let amzius = 34

amziaus_skaiciuokle(amzius)


/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/


// Iš Farenheito į Celsijų.
function F_to_C(farenheitas1)    {
    let celsijus1 = (farenheitas1 - 32) / 1.8
    console.log(`${farenheitas1}F° yra ${Math.round(celsijus1 * 10) / 10}C°`)
}

let farenheitas1 = 80

F_to_C(farenheitas1)


// Iš Celsijaus į Farenheitą.
function C_to_F(celsijus2)    {
    let farenheitas2 = celsijus2 * 9 / 5 + 32
    console.log(`${celsijus2}C° yra ${Math.round(farenheitas2 * 10) / 10}F°`)
}

let celsijus2 = 22

C_to_F(celsijus2)


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let skaicius of skaiciai)   {
}
console.log(`${skaiciai[0]}-${skaiciai[1]}-${skaiciai[2]}-${skaiciai[3]}-${skaiciai[4]}-${skaiciai[5]}-${skaiciai[6]}-${skaiciai[7]}-${skaiciai[8]}-${skaiciai[9]}`)


/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/


for (let i = 1; i <= 5; i++)    {
    let zvaigzdute = '*'
    console.log(zvaigzdute.repeat(i))
}


/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/


let siandien = new Date()
let kaledos = new Date(siandien.getFullYear(), 11, 25)
    
    if(siandien.getMonth() == 11 && siandien.getDate() > 25)  {
        kaledos.setFullYear(kaledos.getFullYear() + 1)
    }

let diena = 1000 * 60 * 60 * 24
let liko = Math.round((kaledos.getTime() - siandien.getTime()) / (diena))

console.log(`Liko ${liko} dienos(-ų) iki Kalėdų.`)


/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/


let vardu_masyvas = ['Tomas', 'Dainius', 'Paulius', 'Jonas']

for (let vardas of vardu_masyvas) {
} 

console.log(`${vardu_masyvas}`)
console.log(`${vardu_masyvas[0]}+${vardu_masyvas[1]}+${vardu_masyvas[2]}+${vardu_masyvas[3]}`)


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/


function slaptazodzio_generatorius()   {
    let visi_simboliai = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?'
    let slaptazodis = ''
    
    for (let i = 0; i < 12; i++)    {
        atsitiktinis = Math.floor(Math.random() * visi_simboliai.length)
    slaptazodis += visi_simboliai[atsitiktinis]
    }

    return slaptazodis
}

console.log(`Atsitiktinis slaptažodis iš 12 simbolių: ${slaptazodzio_generatorius()}`)