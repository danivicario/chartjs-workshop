function printStockMarketData() {
  const dailyData = chartDataStockMarket;

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map((date) => {
    return dailyData[date]["4. close"];
  });

  // brutal ==> https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties
  chart = new Chart(ctx, {
    type: "line", // line bar horizontalBar
    data: {
      labels: stockDates,
      datasets: [
        {
          hoverBorderColor: "red",
          hoverBorderWidth: 2,
          showLabels: false,
          // showLine: false,
          borderJoinStyle: "round",
          lineTension: 0,
          label: "Stock Chart",
          backgroundColor: randomRGBA(0.3),
          // borderColor: randomRGBA(.3),
          data: stockPrices
        },
        {
          hoverBorderColor: "red",
          hoverBorderWidth: 2,
          showLabels: false,
          // showLine: false,
          borderJoinStyle: "round",
          lineTension: 0,
          label: "Stock Chart",
          backgroundColor: randomRGBA(0.3),
          // borderColor: randomRGBA(.3),
          data: stockPrices.map((stockPrice) => stockPrice * Math.random())
        }
      ]
    }
  });

  // data addition
  // setInterval(() => {
  //   chart.data.datasets[0].backgroundColor = randomRGBA(.3);
  //   // chart.data.labels = stockDates.map(() => Array(10).fill().map(() => String.fromCharCode(randomInt(100, 110))).join(""))
  //   chart.data.labels.push("new");
  //   chart.data.datasets[0].data.push(180);
  //   chart.data.datasets[1].data.push(190);
  //   chart.update();
  // }, 2000);

  // data removal
  // setInterval(() => {
  //   chart.data.datasets[0].backgroundColor = randomRGBA(.3);
  //   chart.data.labels.pop();
  //   chart.data.datasets[0].data.pop();
  //   chart.data.datasets[1].data.pop();
  //   chart.update();
  // }, 2000);

  // setInterval(() => {
  //   chart.data.datasets[0].backgroundColor = randomRGBA(.3);
  //   // chart.data.labels = stockDates.map(() => Array(10).fill().map(() => String.fromCharCode(randomInt(100, 110))).join(""))
  //   chart.data.labels = stockDates.map(() => "");
  //   chart.data.datasets[0].data = stockPrices.map(x => randomFloat(1, randomInt(10, 1000)));
  //   chart.data.datasets[1].data = stockPrices.map(x => randomFloat(1, randomInt(10, 1000)));
  //   chart.update();
  // }, 2000);
}
