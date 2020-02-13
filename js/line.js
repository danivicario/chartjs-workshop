function printTheChart(stockData) {
  const dailyData = stockData;

  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => {
    return dailyData[date]["4. close"];
  });

  // brutal ==> https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties
  chart = new Chart(ctx, {
    type: "bar", // line bar horizontalBar
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
          backgroundColor: `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
            0,
            255
          )}, 1)`,
          borderColor: `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`,
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
          backgroundColor: `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
            0,
            255
          )}, 1)`,
          borderColor: `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 1)`,
          data: stockPrices.map(stockPrice => stockPrice * Math.random())
        }
      ]
    }
  });

  // setInterval(() => {
  //   chart.data.datasets[0].backgroundColor = `rgba(${randomInt(0, 255)}, ${randomInt(
  //     0,
  //     255
  //   )}, ${randomInt(0, 255)}, 1)`;
  //   // chart.data.labels = stockDates.map(() => Array(10).fill().map(() => String.fromCharCode(randomInt(100, 110))).join(""))
  //   chart.data.labels = stockDates.map(() => "");
  //   chart.data.datasets[0].data = stockPrices.map(x => randomFloat(1, randomInt(10, 1000)));
  //   chart.data.datasets[1].data = stockPrices.map(x => randomFloat(1, randomInt(10, 1000)));
  //   chart.update();
  // }, 2000);
}
