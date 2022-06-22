//array de objetos
const data = [
    {name: "Matheus", age: 31, sallary: 2000, driverLicense: true},
    {name: "Joao", age: 18, sallary: 1500, driverLicense: false},
    {name: "Mariana", age: 22, sallary: 4000, driverLicense: true},
    {name: "Pedro", age: 50, sallary: 7200, driverLicense: true},
    {name: "Erica", age: 16, sallary: 0, driverLicense: false}
];

// 1 - Reverse --> usado em filtros
const reverseData = data.reverse();
console.log(reverseData);

// 2 - find
const highSal = 5000;
const highestSal = data.find((user) => user.sallary > highSal);
console.log(highestSal);

// 3 - findIndex
const lowestSal = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);
console.log(lowestSal);
data[lowestSal].sallary+= 200;
console.log(data);

// 4 - includes --> contem algum item especifico
const numbers = [1,2,3,4,5];
const hasFour = numbers.includes(4);
console.log(hasFour);

// 5 - map --> percorre cada um dos items e tem a possibilidade de modificar cada um individualmente
data.map((user)=> user.newsletter = false);
console.log(data);

//6 - filter -->
const drivers = data.filter((user) => user.driverLicense);
console.log(drivers);

// 7 - reduce
const sallariesSum = data.reduce((totalSallary, user) => (totalSallary+= user.sallary),0); 

console.log(sallariesSum);

// 8 - forEach --> exibir algo na tela
const showUserNames = (users) =>{
    users.forEach((user)=>{
        console.log(`Olá, ${user.name}!`);
    })
}

showUserNames(data);

// 9 - some
data[0].newsletter = true;
let someoneWithNewsLetter = data.some((user) => user.newsletter);
console.log(someoneWithNewsLetter);

// 10- every
const everyUserHasName = data.every((user) => user.name);
console.log(everyUserHasName);

const everyUserHasGoodSal = data.every((user) => {
    return user.sallary > 2000;
})

console.log(everyUserHasGoodSal);