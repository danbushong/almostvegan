var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
  params: {ingr: 'apple'},
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});