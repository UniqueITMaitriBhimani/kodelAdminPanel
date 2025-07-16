// General Widget JS


var options = {
  series: [
    {
      name: "Total Income",
      data: [100, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210],
    },
    {
      name: "Total Revenue",
      data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
    },
    {
      name: "Average Profit",
      data: [740, 590, 320, 730, 340, 580, 890, 654, 410, 638, 230, 675],
    }
  ],
  chart: {
    type: "area",
    height: 300,
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 4,
      color: '#000',
      opacity: 0.3
    }
  },
  colors: [
    "#94C4FF",
    "#FFC38D",
    "#FFC38D",
  ],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 90, 100],
      colorStops: [
        [
          {
            offset: 0,
            color: "#94C4FF",
            opacity: 0.3
          },
          {
            offset: 50,
            color: "#94C4FF",
            opacity: 0.2
          },
          {
            offset: 100,
            color: "#94C4FF",
            opacity: 0.0
          }
        ],
        [
          {
            offset: 0,
            color: "#FFC38D",
            opacity: 0.4
          },
          {
            offset: 50,
            color: "#FFC38D",
            opacity: 0.4
          },
          {
            offset: 100,
            color: "#FFC38D",
            opacity: 0.0
          }
        ],
        [
          {
            offset: 0,
            color: "#C5AFF6",
            opacity: 0.08
          },
          {
            offset: 50,
            color: "#C5AFF6",
            opacity: 0.06
          },
          {
            offset: 100,
            color: "#C5AFF6",
            opacity: 0.0
          }
        ],
      ]
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: ['smooth', 'smooth', 'smooth'],
    width: [2, 0, 2],
    lineCap: 'round',
    dashArray: [0, 0, 4]
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "var(--sidebar-border)",
    position: "back",
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
};
var chart4 = new ApexCharts(document.querySelector("#revenue-report"), options);
chart4.render();


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
  colors: ["#94C4FF"],
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



var options = {
  series: [500, 350, 150],
  chart: {
    height: 256,
    type: 'polarArea'
  },
  labels: ['Design', 'Development', 'Others'],
  fill: {
    opacity: 0.9
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  colors: ["#94C4FF", "#FFC38D", "#C5AFF6"],
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom',
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0
    }
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 185,
        },
      },
    },
  ],
};

var chart07 = new ApexCharts(document.querySelector("#target-chart"), options);
chart07.render();

var options = {
  series: [{
    name: "Items",
    data: [1380, 1100, 990, 880, 740, 548, 330, 200],
  }],
  chart: {
    type: "bar",
    height: 338,
    toolbar: {
      show: !1
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      horizontal: !0,
      distributed: !0,
      barHeight: "85%",
      isFunnel: !0,
      isFunnel3d: !1
    }
  },
  dataLabels: {
    enabled: !0,
    formatter: function (o, e) {
      return e.w.globals.labels[e.dataPointIndex]
    },
    dropShadow: {
      enabled: !1
    },
    style: {
      colors: ["#fff"],
      fontWeight: 500,
      fontSize: "14px"
    }
  },
  xaxis: {
    categories: ["Mobile", "Men Fishion", "Women Fishion", "Beauty", "Health", "Sports", "Music", "Kids"]
  },
  colors: ["#94C4FF", "#FFC38D", "#1C1B20", "#C5AFF6", "#8DD4B4", "#EB8A93", "#94C4FF", "#FFC38D"],
  legend: {
    show: !1
  }
}, options = ((chart = new ApexCharts(document.querySelector("#categories"), options)).render());