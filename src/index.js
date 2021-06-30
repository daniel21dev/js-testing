
const cities = ['ciudad de méxico','bogota','lima','buenos aires','gualajara'];

const randomString = () =>{
    const string = cities[Math.floor( Math.random() * cities.length )]
    return string;
}


module.exports = randomString;