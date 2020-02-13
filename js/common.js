const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const randomRGBA = (opacity = 1) =>
  `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${opacity})`;

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

let chart;
let chartDataMonth;
let chartDataStockMarket;
const ctx = document.getElementById("myChart").getContext("2d");

axios
  .get("http://localhost:8000/monthData")
  .then((responseFromAPI) => {
    chartDataMonth = responseFromAPI.data;

    return axios.get("http://localhost:8000/stockMarketData");
  })
  .then((responseFromAPI) => {
    chartDataStockMarket = responseFromAPI.data;
    printStockMarketData(); // <== call the function here where you used to console.log() the response
  })
  .catch((err) => {
    console.log("Error while getting the data: ", err);
  });
