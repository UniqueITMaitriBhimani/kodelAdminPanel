var visitorUser = {
  series: [
    {
      name: "Growth",
      data: [0, 12, 25, 12, 20, 14, 26, 12],
    },
  ],
  chart: {
    height: 160,
    type: "area",
    stacked: true,
    offsetY: -10,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: [ParisAdminConfig.secondary],
  stroke: {
    width: 3,
    curve: "smooth",
  },
  fill: {
    type: ['gradient'],
    gradient: {
      shade: 'light',
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: [ParisAdminConfig.secondary],
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    }
  },
  xaxis: {
    lines: {
      show: true,
    },
    type: "category",
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  grid: {
    show: true,
    borderColor: "var(--sidebar-border)",
    strokeDashArray: 3,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
};

var visitorChart = new ApexCharts(document.querySelector("#revenue-chart"), visitorUser);
visitorChart.render();



const groupChartOption = {
  series: [
    {
      name: "Good",
      data: [380, 600, 500, 800, 650, 480, 520, 380, 620],
    },
    {
      name: "Very Good",
      data: [690, 500, 600, 600, 500, 650, 800, 400, 400],
    },
  ],
  colors: [ParisAdminConfig.secondary, ParisAdminConfig.warning],
  chart: {
    type: "bar",
    height: 318,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "var(--sidebar-border)",
    position: "back",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40%",
    },
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: '#1C1B20',
        fontWeight: 600,
        fontFamily: "Manrope, sans-serif",
      },
    },
  },
  xaxis: {
    show: true,
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    labels: {
      show: true,
      style: {
        colors: '#8D8D8D',
        fontWeight: 500,
        fontFamily: "Manrope, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 270,
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
          },
        ],
      },
    },
  ],
};
const groupBarChartEl = new ApexCharts(
  document.querySelector("#sales"),
  groupChartOption
);
groupBarChartEl.render();


var countryChart = {
  series: [
    {
      name: "Session",
      data: [50, 40, 70, 60],
    },
  ],
  colors: ["#94C4FF", "#FFC38D", "#D7D7D7", "#C5AFF6"],
  chart: {
    type: "bar",
    height: 330,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 0,
      distributed: true,
      dataLabels: {
        position: "top",
      }
    },
  },
  grid: {
    show: true,
    borderColor: "var(--sidebar-border)",
    strokeDashArray: 3,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: undefined,
    formatter: function (val) {
      return val + ".0M";
    },
    textAnchor: "middle",
    distributed: false,
    offsetX: 0,
    offsetY: -22,
    style: {
      colors: ["#8D8D8D"],
      fontSize: "14px",
      fontFamily: "Manrope, sans-serif",
      fontWeight: "600",
    },
  },
  stroke: {
    width: 2,
    dashArray: 0,
    lineCap: "butt",
    colors: "#8D8D8D",
  },
  fill: {
    opacity: 1,
    colors: [ParisAdminConfig.secondary, ParisAdminConfig.warning, "#D7D7D7", "#C5AFF6"],
  },
  legend: {
    show: false,
  },

  yaxis: {
    show: false,
  },
  xaxis: {
    categories: ["Velmora", "Ravenwick", "Neotropolis", "Nexora"],
    labels: {
      style: {
        fontWeight: 600,
        colors: "#1C1B20",
        fontFamily: "Manrope, sans-serif",
        fontSize: 16,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 328,
        },
        xaxis: {
          labels: {
            show: false
          },
        },
      },
    },
  ],
};

var countryChart = new ApexCharts(document.querySelector("#total-sales"), countryChart);
countryChart.render();



var option = {
  labels: ["New Shifts", "Cancelled", "Assigned", "Waiting approval"],
  series: [50, 30, 30, 40],
  chart: {
    type: "donut",
    height: 300,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 8,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        labels: {
          show: true,
          name: {
            offsetY: 4,
          },
          total: {
            show: true,
            fontSize: "20px",
            fontFamily: "Outfit', sans-serif",
            fontWeight: 600,
            label: "$ 34,098",
            formatter: () => "Total Overview",
          },
        },
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  colors: [ParisAdminConfig.secondary, "#C0C0C0", "#C5AFF6", ParisAdminConfig.warning],
};

var chart = new ApexCharts(
  document.querySelector("#shifts-overview"),
  option
);
chart.render();