const request = require('request');
let breedName = process.argv.slice(2)[0];
let url = "https://pi.thecatapi.com/v1/breeds";
request(url, (error, response, body) => {
  //console.log('body:', body);
  //console.log(typeof body);//string
  if (!error) {
    const data = JSON.parse(body); //parsing string to object
    //console.log('data:', data);
    let results = {};
    for (let arr of data) {
      results[arr["name"]] = arr.description;
    }
    if (results[breedName]) {
      console.log(results[breedName]);
    } else {
      console.log("breed not found");
    }
  } else {
    console.log(error);
  }
});

