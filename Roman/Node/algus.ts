'use strict';

// alert("Tere");
console.log('Tere tulemast2!');

/* muutujad ja tyybid */
const kasOnMuutumatu = true;
let kasOnMuudetav = true;
// kasOnMuutumatu = false;
kasOnMuudetav = true;

let t6ene: boolean;
t6ene = true;
let arv: number;
arv = 5;
let s6ne: string;
s6ne = 'Tere';

let massiiv: number[];
massiiv = [1, 2, 3];
let tuple: [string, number];
tuple = ['Hello', 12];
enum V2rv {Roheline = 1, Punane, Kollane}
let v2rv: V2rv = V2rv.Punane;

// let suvaline: any;
// void, null ja undefined, never

/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2; // 10
arv = 6 / 2; // 3
console.log(arv);
arv = arv + 4; // 7
arv += 4; // 11
arv %= 3; // 2 jääk
console.log(arv);
arv++; // 3
++arv; // 4
arv--; // 3
arv = (3 + 4) * 5; // 35
arv = 10 ** 2; // 100 astmes eksperimentaalne
console.log(arv);

s6ne += ' sõne';
s6ne += ` arv: ${arv}.`;
console.log(s6ne);

/* tingimuslaused */
s6ne = arv === 100 ? 'Tere' : 'Headaega';
console.log(s6ne);
let a = 10;
if (arv === 100) {
    let a = 0; // potentsiaalne shadowed variable
    s6ne = 'Tere';
} else if (arv < 100) {
    s6ne = 'Headaega';
} else {
    s6ne = '...';
}
console.log(a);

switch (arv) {
case 100:
    s6ne = 'Tere';
    break;
case 102:
case 90:
    s6ne = 'Headaega';
    break;
default:
    s6ne = '...';
}
switch (v2rv) {
case 1:
case V2rv.Punane:
    s6ne = 'Roheline või Punane';
    break;
default:
    s6ne = 'Muu värv';
}

if (s6ne !== 'Tere' && arv >= 0) { // &&-ja, ||-v6i
    s6ne = 'Tingimus täidetud';
}
// === on täpsem kui ==  sama ka !== !=

/* Tsükklid */
for (let i = 0; i < 5; ++i) {
    if (i === 3) { continue; }
    console.log(`Väärtus tsüklis ${i}`);
}
arv = 0;
while (arv <= 10) {
    s6ne += '2';
    if (arv === 5) {
        s6ne += '3';
        break;
    }
    arv++;
}
console.log(s6ne);
// do while

/* funktsioon */
