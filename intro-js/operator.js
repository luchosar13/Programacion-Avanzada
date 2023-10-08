// Spread Operator

const lenguajes = ['Javascript','PHP','Python','Ruby'];
const frames = ['ReactJS','Laravel','Django','Ruby on Rails'];

// Forma antigua

let combinacion = lenguajes.concat(frames)
console.log(combinacion);

// Forma nueva

let combinacion2 = [... lenguajes, ...frames];
console.log(combinacion2)

// Otro ejemplo de Spread Operator

let [ultimo] = [... lenguajes].reverse();
console.log(ultimo)