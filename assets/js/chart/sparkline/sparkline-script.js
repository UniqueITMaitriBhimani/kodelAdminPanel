(function ($) {
  "use strict";
  setTimeout(function () {
    $("#line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20], {
      type: "line",
      width: "100%",
      height: "100%",
      tooltipClassname: "chart-sparkline",
      lineColor: ParisAdminConfig.primary,
      fillColor: "rgba(28, 27, 32, 0.40)",
      highlightLineColor: ParisAdminConfig.primary,
      highlightSpotColor: ParisAdminConfig.primary,
      targetColor: ParisAdminConfig.primary,
      performanceColor: ParisAdminConfig.primary,
      boxFillColor: ParisAdminConfig.primary,
      medianColor: ParisAdminConfig.primary,
      minSpotColor: ParisAdminConfig.primary,
    });
  });
  var mrefreshinterval = 500;
  var lastmousex = -1;
  var lastmousey = -1;
  var lastmousetime;
  var mousetravel = 0;
  var mpoints = [];
  var mpoints_max = 30;
  $("body").mousemove(function (e) {
    var mousex = e.pageX;
    var mousey = e.pageY;
    if (lastmousex > -1) mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
    lastmousex = mousex;
    lastmousey = mousey;
  });
  var mdraw = function () {
    var md = new Date();
    var timenow = md.getTime();
    if (lastmousetime && lastmousetime != timenow) {
      var pps = Math.round((mousetravel / (timenow - lastmousetime)) * 1000);
      mpoints.push(pps);
      if (mpoints.length > mpoints_max) mpoints.splice(0, 1);
      mousetravel = 0;

      var mouse_wid = $("#mouse-speed-chart-sparkline").parent(".card-block").parent().width();
      var a = mpoints - mouse_wid;
      $("#mouse-speed-chart-sparkline").sparkline(mpoints, {
        width: "100%",
        height: "100%",
        tooltipClassname: "chart-sparkline",
        lineColor: ParisAdminConfig.primary,
        fillColor: "rgba(28, 27, 32, 0.40)",
        highlightLineColor: ParisAdminConfig.primary,
        highlightSpotColor: ParisAdminConfig.primary,
        targetColor: ParisAdminConfig.primary,
        performanceColor: ParisAdminConfig.primary,
        boxFillColor: ParisAdminConfig.primary,
        medianColor: ParisAdminConfig.primary,
        minSpotColor: ParisAdminConfig.primary,
      });
    }
    lastmousetime = timenow;
    mtimer = setTimeout(mdraw, mrefreshinterval);
  };
  var mtimer = setTimeout(mdraw, mrefreshinterval);
  $.sparkline_display_visible();
  $("#custom-line-chart").sparkline([5, 30, 27, 35, 30, 50, 70], {
    type: "line",
    width: "100%",
    height: "100%",
    tooltipClassname: "chart-sparkline",
    chartRangeMax: "50",
    lineColor: ParisAdminConfig.secondary,
    fillColor: "rgb(148 196 255 / 20%)",
    highlightLineColor: "rgb(148 196 255 / 20%)",
    highlightSpotColor: "rgba(88 ,55 ,41, 0.8)",
  });
  $("#custom-line-chart").sparkline([0, 5, 10, 7, 25, 20, 30], {
    type: "line",
    width: "100%",
    height: "100%",
    composite: "!0",
    tooltipClassname: "chart-sparkline",
    chartRangeMax: "40",
    lineColor: ParisAdminConfig.primary,
    fillColor: "rgb(131 131 131 / 20%)",
    highlightLineColor: "rgb(131 131 131 / 20%)",
    highlightSpotColor: "rgba(28, 27, 32, 0.8)",
  });

  var sparkline_chart = {
    init: function () {
      setTimeout(function () {
        $("#simple-line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20], {
          type: "line",
          width: "100%",
          height: "100%",
          tooltipClassname: "chart-sparkline",
          lineColor: ParisAdminConfig.primary,
          fillColor: "transparent",
          highlightLineColor: ParisAdminConfig.primary,
          highlightSpotColor: ParisAdminConfig.primary,
          targetColor: ParisAdminConfig.primary,
          performanceColor: ParisAdminConfig.primary,
          boxFillColor: ParisAdminConfig.primary,
          medianColor: ParisAdminConfig.primary,
          minSpotColor: ParisAdminConfig.primary,
        });
      }),
        $("#bar-chart-sparkline").sparkline([5, 2, 2, 4, 9, 5, 7, 5, 2, 2, 6], {
          type: "bar",
          barWidth: "60",
          height: "100%",
          tooltipClassname: "chart-sparkline",
          barColor: ParisAdminConfig.primary,
        }),
        $("#pie-sparkline-chart").sparkline([1.5, 1, 1, 0.5], {
          type: "pie",
          width: "100%",
          height: "100%",
          sliceColors: ["#8DD4B4", "#FFC38D", ParisAdminConfig.secondary, ParisAdminConfig.primary],
          tooltipClassname: "chart-sparkline",
        });
    },
  };

  sparkline_chart.init();
})(jQuery);
