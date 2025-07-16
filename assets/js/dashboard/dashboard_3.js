// Dashboard 3 JS
var options = {
  series: [
    {
      type: "area",
      name: "Revenue",
      data: [
        {
          x: "Jan",
          y: 100,
        },
        {
          x: "Feb",
          y: 210,
        },
        {
          x: "Mar",
          y: 180,
        },
        {
          x: "Apr",
          y: 454,
        },
        {
          x: "May",
          y: 230,
        },
        {
          x: "Jun",
          y: 320,
        },
        {
          x: "Jul",
          y: 656,
        },
        {
          x: "Aug",
          y: 830,
        },
        {
          x: "Sep",
          y: 350,
        },
        {
          x: "Oct",
          y: 350,
        },
        {
          x: "Nov",
          y: 210,
        },
        {
          x: "Dec",
          y: 410,
        },
      ],
    },
    {
      type: "area",
      name: "Project",
      data: [
        {
          x: "Jan",
          y: 180,
        },
        {
          x: "Feb",
          y: 620,
        },
        {
          x: "Mar",
          y: 476,
        },
        {
          x: "Apr",
          y: 220,
        },
        {
          x: "May",
          y: 520,
        },
        {
          x: "Jun",
          y: 780,
        },
        {
          x: "Jul",
          y: 435,
        },
        {
          x: "Aug",
          y: 515,
        },
        {
          x: "Sep",
          y: 738,
        },
        {
          x: "Oct",
          y: 454,
        },
        {
          x: "Nov",
          y: 525,
        },
        {
          x: "Dec",
          y: 230,
        },
      ],
    },
  ],
  chart: {
    height: 282,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [ParisAdminConfig.secondary, ParisAdminConfig.warning],
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "var(--sidebar-border)",
    position: "back",
  },
  fill: {
    type: ["gradient", "gradient", "solid"],
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.1,
      colorStops: [
        [
          {
            offset: 0,
            color: ParisAdminConfig.secondary,
            opacity: 0.05,
          },
          {
            offset: 100,
            color: ParisAdminConfig.secondary,
            opacity: 0.05,
          },
        ], [
          {
            offset: 0,
            color: ParisAdminConfig.warning,
            opacity: 0.05,
          },
          {
            offset: 100,
            color: ParisAdminConfig.warning,
            opacity: 0.05,
          },
        ],
      ],
    },
  },
  stroke: {
    curve: "smooth",
    width: [2, 2],
    dashArray: [4, 0, 0, 0],
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
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
  legend: {
    show: false,
    position: "bottom",
    customLegendItems: ["Revenue", "Projects"],
    inverseOrder: true,
  },
  markers: {
    hover: {
      sizeOffset: 5,
    },
  },
};
var chart = new ApexCharts(document.querySelector("#project-statistics"), options);
chart.render();


var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: ParisAdminConfig.secondary,
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    },
  },
  colors: [ParisAdminConfig.secondary],
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#total-project"), options);
chart.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: ParisAdminConfig.warning,
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    },
  },
  colors: [ParisAdminConfig.warning],
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (series) {
          return "";
        },
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#total-project2"), options);
chart.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "rgba(28, 27, 32, 0.1)",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    },
  },
  colors: ["#1C1B20"],
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#total-project3"), options);
chart.render();

var options = {
  series: [
    {
      data: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 53, 53, 61, 27, 54, 43, 19, 46],
    },
  ],
  chart: {
    type: 'area',
    height: 50,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#C5AFF6",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: 'straight',
    width: "1",
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 60],
    },
  },
  colors: ["#C5AFF6"],
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return "";
        },
      },
    },
  },
};
var chart = new ApexCharts(document.querySelector("#total-project4"), options);
chart.render();


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
  colors: [ParisAdminConfig.secondary, ParisAdminConfig.warning, "#C5AFF6"],
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
};

var chart07 = new ApexCharts(document.querySelector("#target-chart"), options);
chart07.render();



var options = {
  series: [
    {
      name: "This Week",
      data: [25, 50, 30, 55, 20, 45, 30],
      type: 'column',
    },
    {
      name: "Last Week",
      data: [35, 25, 40, 30, 45, 35, 60],
      type: 'column',
    }
  ],
  chart: {
    height: 287,
    type: 'line',
    toolbar: {
      show: false
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 7,
      left: 0,
      blur: 1,
      color: ["transparent", "#FFC38D"],
      opacity: 0.05,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '35%',
      borderRadius: [2],
    }
  },
  colors: [ParisAdminConfig.secondary, ParisAdminConfig.warning],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    dashArray: [0, 0],
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "var(--sidebar-border)",
    position: "back",
  },
  yaxis: {
    show: false,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    }
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    show: false,
    axisBorder: {
      show: false,
      color: 'rgba(119, 119, 142, 0.05)',
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
      borderType: 'solid',
      color: 'rgba(119, 119, 142, 0.05)',
      width: 6,
      offsetX: 0,
      offsetY: 0
    },
    labels: {
      rotate: -90,
    }
  },
  legend: {
    show: true,
    position: "bottom",
    offsetX: 0,
    offsetY: 8,
    markers: {
      size: 5,
      shape: "circle",
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
  },
};
var chart = new ApexCharts(document.querySelector("#tasks-report"), options);
chart.render();