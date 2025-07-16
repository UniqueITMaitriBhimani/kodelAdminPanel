// Dashboard 2 JS
options = {
  series: [44, 55, 41, 17, 15, 20],
  chart: {
    fontFamily: 'Manrope, system-ui',
    height: 320,
    type: 'donut',
    dropShadow: {
      enabled: false,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2
    }
  },
  stroke: {
    width: 0,
  },

  legend: {
    position: 'bottom',
    fontSize: '14px',
    fontWeight: 500,
    labels: {
      colors: 'rgba(var(--secondary),1)',
      useSeriesColors: false
    },
    markers: {
      width: 15,
      height: 15,
      radius: 5,
      offsetX: -4,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          total: {
            showAlways: false,
            show: false
          }
        }
      }
    }
  },
  labels: ["sales", "profit", "visitors", "balance", "loss", "product"],

  dataLabels: {
    enabled: false,
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  colors: ['#1C1B20', ParisAdminConfig.secondary, ParisAdminConfig.warning, '#C5AFF6', '#EB8A93', '#8DD4B4'],
  fill: {
    // type: 'pattern',
    type: ['pattern', 'solid', 'pattern', 'solid', 'solid'],
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'horizontalLines', 'horizontalLines', 'circles', 'horizontalLines'],
    },
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
};

chart = new ApexCharts(document.querySelector("#totalSales"), options);
chart.render();

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
    ParisAdminConfig.secondary,
    ParisAdminConfig.warning,
    ParisAdminConfig.warning,
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
            color: ParisAdminConfig.secondary,
            opacity: 0.3
          },
          {
            offset: 50,
            color: ParisAdminConfig.secondary,
            opacity: 0.2
          },
          {
            offset: 100,
            color: ParisAdminConfig.secondary,
            opacity: 0.0
          }
        ],
        [
          {
            offset: 0,
            color: ParisAdminConfig.warning,
            opacity: 0.6
          },
          {
            offset: 50,
            color: ParisAdminConfig.warning,
            opacity: 0.6
          },
          {
            offset: 100,
            color: ParisAdminConfig.warning,
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



var options = {
  series: [{
    name: "Items",
    data: [1380, 1100, 990, 880, 740, 548, 330, 200],
  }],
  chart: {
    type: "bar",
    height: 275,
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
  colors: [ParisAdminConfig.secondary, "#FFC38D", "#1C1B20", "#C5AFF6", "#8DD4B4", "#EB8A93", "#94C4FF", "#FFC38D"],
  legend: {
    show: !1
  }
}, options = ((chart = new ApexCharts(document.querySelector("#categories"), options)).render());