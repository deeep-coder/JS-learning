const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // dono array merge nahi honge balki pura dc_heros array marvel_heros array ke andar chala jayenga

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  // dono array merge hojayenge 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //  is called spread operator which gives same results like concat operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Infinity depth tak spread out kar denga
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) 


console.log(Array.from({name: "hitesh"})) // interesting case to remember

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));