/*4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const Ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const Age = Ages.filter(num => num > 18);
console.log(Age);

console.log("");

/*4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const AgesPar = ages.filter(num => num % 2 === 0);
console.log(AgesPar);

console.log("");

/*4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const Streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const StreamerLoL = Streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(StreamerLoL);

console.log("");

/*4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const Streamer_U = Streamers.filter(streamer => streamer.name.includes('u'));
console.log(Streamer_U);

console.log("");

/*4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const Streamer_Legend = Streamers.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        }
        return true;
    }
    return false;
});
console.log(Streamer_Legend)