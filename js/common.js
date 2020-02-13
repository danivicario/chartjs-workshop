const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);
const randomRGBA = (opacity = 1) =>
  `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${opacity})`;

let chart;
let chartDataMonth;
let chartDataStockMarket;
const ctx = document.getElementById("myChart").getContext("2d");

axios
  .get("http://localhost:8000/monthData")
  .then(responseFromAPI => {
    chartDataMonth = responseFromAPI.data;

    return axios.get("http://localhost:8000/stockMarketData");
  })
  .then(responseFromAPI => {
    chartDataStockMarket = responseFromAPI.data;
    printStockMarketData(); // <== call the function here where you used to console.log() the response
  })
  .catch(err => {
    console.log("Error while getting the data: ", err);
  });
