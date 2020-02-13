function printStockMarketData() {
  chart = new Chart(ctx, {
    type: "pie", // pie
    data: {
      datasets: [
        {
          data: [
            randomInt(1, 100),
            randomInt(1, 100),
            randomInt(1, 100),
            randomInt(1, 100),
            randomInt(1, 100)
          ],
          backgroundColor: [
            chartColors.red,
            chartColors.orange,
            chartColors.yellow,
            chartColors.green,
            chartColors.blue
          ],
          label: "Dataset 1"
        }
      ],
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
    },
    options: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "IronDoughnut"
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}
