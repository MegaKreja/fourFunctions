const {
	min, max, string, array, arrayOfString, type,
} = require('./config.js');
const {
	random, minIntegerFromArray, minIntegerFromString, concatStringsByLength,
} = require('./functions.js');

console.log('Prva funkcija');
console.log('Funkcija random treba da vrati random broj koji je veci ili jednak sa min ili manji ili jednak sa max.');
console.log('Funkcija kao ulazne parametre sme da primi samo broj. Potrebno je validirati ulazne paramtere i u slucaju nepravilnih parametara, ispisati gresku.');
console.log('Primer - ', '(2, 6)');
console.log('Rezultat - ', random(min, max));

console.log('------------------------------------------------');

console.log('Druga funkcija');
console.log('Potrebno je vratiti najmanji broj koji se nalazi u nizu (array.length > 5). Niz ne mora da bude samo niz brojeva, vec moze sadrzati bilo sta kao clan niza.');
console.log('U slucaju da ne postoji ni jedan broj u nizu, vratiti false');
console.log('Primer - ', [1, 'etf', 'kgj', 4, 0, 2]);
console.log('Rezultat - ', minIntegerFromArray(array));

console.log('------------------------------------------------');

console.log('Treca funkcija');
console.log('U ovu funkciju se unosi neki string >= 10 karaktera.');
console.log('Funkcija mora da proveri da li u tom stringu postoje celi brojevi (integeri) i da kao rezultat vrati najmanji od postojecih brojeva ili false ako nije nadjen ni jedan.');
console.log('Primer - ', 'Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra');
console.log('Rezultat - ', minIntegerFromString(string));

console.log('------------------------------------------------');

console.log('Cetvrta funkcija');
console.log('Funkcija ima dva ulazna paramtera. Prvi je niz stringova, a drugi je tip koji moze imati vrednost 0, ili 1.');
console.log('Za tip 0 vraca se string spojen od najmanjeg ka najvecem, za tip 1 vraca se string spojen od najveceg ka najmanjem');
console.log('Primer - ', ['abc', 'ac', 'bdca', 'edagas'], 0);
console.log('Rezultat - ', concatStringsByLength(arrayOfString, type));
