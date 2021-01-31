const ages = [36, 35, 33, 32];
const ages2 = [65, 64, 62, 61];
const ages3 = [5, 4, 2, 1];
const allAges = ages.concat(ages2).concat([6]).concat(ages3);
const allAges2 = [...ages, ...ages2,5, ...ages3];
// console.log(allAges2);

const takaPoisha = [65, 450, 250, 850];
const maximum = Math.max(...takaPoisha);
console.log(maximum);