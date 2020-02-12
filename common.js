const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

let chart;
const ctx = document.getElementById("myChart").getContext("2d");

axios
  .get("http://localhost:8000/data")
  .then(responseFromAPI => {
    printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });
