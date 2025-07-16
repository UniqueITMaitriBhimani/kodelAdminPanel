(function ($) {
  if (localStorage.getItem("color")) $("#color").attr("href", "../assets/css/" + localStorage.getItem("color") + ".css");
  if (localStorage.getItem("dark")) $("body").attr("class", "dark-only");
  $(
    '<div class="sidebar-panel-main"><ul><li id="cog-click"><a href="#!" class="cog-click icon-btn btn-primary"><i class="fa-solid fa-gear fa-spin"></i></a><span>Settings</span></li></ul></div><section class="setting-sidebar"><div class="customizer-header"><div class="theme-title"><div><h4>Preview Settings</h4><p class="mb-0">Try It Real Time<i class="fa-solid fa-thumbs-up fa-fw"></i></p></div><div class="flex-grow-1"><a class="icon-btn btn-outline-light button-effect pull-right cog-close" id="cog-close"><i class="fa-solid fa-xmark fa-fw"></i></a></div></div></div><div class="customizer-body custom-scrollbar"><h6>Layout Type</h6><ul class="layout-grid main-layout"><li class=active data-attr=ltr><div class="bg-light header"><ul><li><li><li></ul></div><div class=body><ul><li class="bg-light sidebar"><li class="bg-light body"><span class="badge badge-primary">LTR</span></ul></div><li data-attr=rtl><div class="bg-light header"><ul><li><li><li></ul></div><div class=body><ul><li class="bg-light body"><span class="badge badge-primary">RTL</span><li class="bg-light sidebar"></ul></div><li class="box-layout px-3" data-attr=ltr><div class="bg-light header"><ul><li><li><li></ul></div><div class=body><ul><li class="bg-light sidebar"><li class="bg-light body"><span class="badge badge-primary">Box</span></ul></div></ul><h6>Sidebar Type</h6><ul class="layout-grid sidebar-type"><li data-attr=normal-sidebar><div class="bg-light header"><ul><li><li><li></ul></div><div class=body><ul><li class="sidebar bg-dark"><li class="bg-light body"></ul></div><li data-attr=compact-sidebar><div class="bg-light header"><ul><li><li><li></ul></div><div class=body><ul><li class="sidebar bg-dark compact"><li class="bg-light body"></ul></div></ul><h6>Unlimited Color</h6><ul class="layout-grid unlimited-color-layout"><input id="ColorPicker1" type="color" value="#1C1B20" name="Background"> <input id="ColorPicker2" type="color" value="#94C4FF" name="Background"><button type="button" class="color-apply-btn btn btn-primary color-apply-btn">Apply</button></ul><h6>Light layout</h6><ul class="layout-grid customizer-color"><li class="color-layout" data-attr="color-1" data-secondary="#94C4FF" data-warning="#FFC38D"><div style="background-color: #1C1B20"></div></li><li class="color-layout" data-attr="color-2" data-secondary="#9BECD2" data-warning="#FED9D0"><div style="background-color: #9BECD2"></div></li><li class="color-layout" data-attr="color-3" data-secondary="#dbe793" data-warning="#addbff"><div></div></li><li class="color-layout" data-attr="color-4" data-secondary="#ffb18a" data-warning="#86d97a"><div></div></li><li class="color-layout" data-attr="color-5" data-secondary="#FFBFBF" data-warning="#dfda5d"><div></div></li><li class="color-layout" data-attr="color-6" data-secondary="#cdb69b" data-warning="#95bec9"><div></div></li></ul><h6>Dark Layout</h6><ul class="layout-grid customizer-color dark"><li class="color-layout" data-attr="color-1" data-secondary="#4466f2" data-warning="#1ea6ec"><div style="background-color: #1C1B20"></div></li><li class="color-layout" data-attr="color-2" data-secondary="#8E3E63" data-warning="#f5a623"><div></div></li><li class="color-layout" data-attr="color-3" data-secondary="#898121" data-warning="#583729"><div></div></li><li class="color-layout" data-attr="color-4" data-secondary="#009DB5" data-warning="#F94C8E"><div></div></li><li class="color-layout" data-attr="color-5" data-secondary="#BA704F" data-warning="#C8AE7D"><div></div></li><li class="color-layout" data-attr="color-6" data-secondary="#43B9B2" data-warning="#C280D2"><div></div></li></ul><h6>Sidebar Icon</h6><ul class="layout-grid sidebar-setting"><li class=active data-attr=stroke-svg><div class="bg-light header"><ul><li><li><li></ul></div><div class="bg-light body"><span class="badge badge-primary">Stroke</span></div><li data-attr=fill-svg><div class="bg-light header"><ul><li><li><li></ul></div><div class="bg-light body"><span class="badge badge-primary">Fill</span></div></ul><h6>Mix Layout</h6><ul class="layout-grid customizer-mix"><li class="color-layout active" data-attr=light-only><div class="bg-light header"><ul><li><li><li></ul></div><div class="body common-layout"><span class="badge badge-primary">Light</span><ul><li class="bg-light sidebar"><li class="bg-light body"></ul></div><li class=color-layout data-attr=dark-sidebar><div class="bg-light header"><ul><li><li><li></ul></div><div class="body common-layout"><span class="badge badge-primary">Sidebar</span><ul><li class="sidebar bg-dark"><li class="bg-light body"></ul></div><li class=color-layout data-attr=dark-only><div class="header bg-dark"><ul><li><li><li></ul></div><div class="body common-layout"><span class="badge badge-primary">Dark</span><ul><li class="sidebar bg-dark"><li class="body bg-dark"></ul></div><li class=color-layout id=auto-layout onclick="detectColorScheme()"><div class="bg-light header"><ul><li><li><li></ul></div><div class="body common-layout"><span class="badge badge-primary">Auto</span><ul><li class="sidebar bg-dark"><li class="bg-light body"></ul></div></ul><h6>Links</h6><ul class="layout-link"><li><a href="https://support.pixelstrap.com/"><i class="icon-headphone-alt"></i><span>Support</span></a></li><li><a href="https://docs.pixelstrap.net/paris/document/"><i class="icon-file"></i><span>Document</span></a></li><li><a href="https://admin.pixelstrap.net/paris/template/landing-page.html"><i class="icon-panel"></i><span>Features</span></a></li><li><a href="https://www.pixelstrap.com"><i class="icon-shopping-cart-full"></i><span>Buy Now</span></a></li></ul></div></section>'
  ).appendTo($("body"));

  (function () {})();
  //live customizer js
  $(document).ready(function () {
    // Setting and Layout Toggle
    document.getElementById("cog-click").addEventListener("click", function () {
      var settingSidebar = document.querySelector(".setting-sidebar");
      settingSidebar.classList.add("open");
    });

    document.getElementById("cog-close").addEventListener("click", function () {
      var settingSidebar = document.querySelector(".setting-sidebar");
      settingSidebar.classList.remove("open");
    });
    
    $(".customizer-color li").on("click", function () {
      $(".customizer-color li").removeClass("active");
      $(this).addClass("active");
      var color = $(this).attr("data-attr");
      var secondary = $(this).attr("data-secondary");
      var warning = $(this).attr("data-warning");
      localStorage.setItem("color", color);
      localStorage.setItem("secondary", secondary);
      localStorage.setItem("warning", warning);
      localStorage.removeItem("dark");
      $("#color").attr("href", "../assets/css/" + color + ".css");
      $(".dark-only").removeClass("dark-only");
      location.reload(true);
    });

    $(".customizer-color.dark li").on("click", function () {
      $(".customizer-color.dark li").removeClass("active");
      $(this).addClass("active");
      $("body").attr("class", "dark-only");
      localStorage.setItem("dark", "dark-only");
    });

    if (localStorage.getItem("warning") != null) {
      document.documentElement.style.setProperty(
        "",
        localStorage.getItem("warning")
      );
    }
    if (localStorage.getItem("secondary") != null) {
      document.documentElement.style.setProperty(
        "--theme-secondary",
        localStorage.getItem("secondary")
      );
    }
    $(
      ".customizer-links #c-pills-home-tab, .customizer-links #c-pills-layouts-tab"
    ).click(function () {
      $(".customizer-contain").addClass("open");
      $(".customizer-links").addClass("open");
    });

    $(".close-customizer-btn").on("click", function () {
      $(".floated-customizer-panel").removeClass("active");
    });

    $(".customizer-contain .icon-close").on("click", function () {
      $(".customizer-contain").removeClass("open");
      $(".customizer-links").removeClass("open");
    });

    $(".color-apply-btn").click(function () {
      location.reload(true);
    });

    var warning = document.getElementById("ColorPicker1").value;
    document.getElementById("ColorPicker1").onchange = function () {
      warning = this.value;
      localStorage.setItem("warning", warning);
      document.documentElement.style.setProperty("", warning);
    };

    var secondary = document.getElementById("ColorPicker2").value;
    document.getElementById("ColorPicker2").onchange = function () {
      secondary = this.value;
      localStorage.setItem("secondary", secondary);
      document.documentElement.style.setProperty(
        "--theme-secondary",
        secondary
      );
    };

    $(".customizer-color.dark li").on("click", function () {
      $(".customizer-color.dark li").removeClass("active");
      $(this).addClass("active");
      $("body").attr("class", "dark-only");
      localStorage.setItem("dark", "dark-only");
    });

    $(".customizer-mix li").on("click", function () {
      $(".customizer-mix li").removeClass("active");
      $(this).addClass("active");
      var mixLayout = $(this).attr("data-attr");
      $("body").attr("class", mixLayout);
    });

    $(".sidebar-setting li").on("click", function () {
      $(".sidebar-setting li").removeClass("active");
      $(this).addClass("active");
      var sidebar = $(this).attr("data-attr");
      $(".sidebar-wrapper").attr("data-layout", sidebar);
    });

    $(".sidebar-main-bg-setting li").on("click", function () {
      $(".sidebar-main-bg-setting li").removeClass("active");
      $(this).addClass("active");
      var bg = $(this).attr("data-attr");
      $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
    });

    $(".sidebar-type li").on("click", function () {
      $("body").append("");
      console.log("test");
      var type = $(this).attr("data-attr");

      var boxed = "";
      if ($(".page-wrapper").hasClass("box-layout")) {
        boxed = "box-layout";
      }
      switch (type) {
        case "compact-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper " + boxed
          );
          $(this).addClass("active");
          localStorage.setItem("page-wrapper-Miami", "compact-wrapper");
          break;
        }
        case "normal-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper " + boxed
          );
          $(".logo-wrapper")
            .find("img")
            .attr("src", "../assets/images/logo/logo.png");
          localStorage.setItem("page-wrapper-Miami", "horizontal-wrapper");
          break;
        }
        case "default-body": {
          $(".page-wrapper").attr("class", "page-wrapper  only-body" + boxed);
          localStorage.setItem("page-wrapper-Miami", "only-body");
          break;
        }
        case "dark-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper dark-sidebar" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-wrapper dark-sidebar"
          );
          break;
        }
        case "compact-wrap": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar" + boxed
          );
          localStorage.setItem("page-wrapper-Miami", "compact-sidebar");
          break;
        }
        case "color-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper color-sidebar" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-wrapper color-sidebar"
          );
          break;
        }
        case "compact-small": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar compact-small" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-sidebar compact-small"
          );
          break;
        }
        case "box-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper box-layout " + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-wrapper box-layout"
          );
          break;
        }
        case "enterprice-type": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper enterprice-type" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "horizontal-wrapper enterprice-type"
          );
          break;
        }
        case "modern-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper modern-type" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-wrapper modern-type"
          );
          break;
        }
        case "material-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper material-type" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "horizontal-wrapper material-type"
          );

          break;
        }
        case "material-icon": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar compact-small material-icon" + boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "compact-sidebar compact-small material-icon"
          );

          break;
        }
        case "advance-type": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper enterprice-type advance-layout" +
              boxed
          );
          localStorage.setItem(
            "page-wrapper-Miami",
            "horizontal-wrapper enterprice-type advance-layout"
          );

          break;
        }
        default: {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper " + boxed
          );
          localStorage.setItem("page-wrapper-Miami", "compact-wrapper");
          break;
        }
      }
      // $(this).addClass("active");
      location.reload(true);
    });

    $(".main-layout li").on("click", function () {
      $(".main-layout li").removeClass("active");
      $(this).addClass("active");
      var layout = $(this).attr("data-attr");
      $("body").attr("class", layout);
      $("html").attr("dir", layout);
    });

    $(".main-layout .box-layout").on("click", function () {
      $(".main-layout .box-layout").removeClass("active");
      $(this).addClass("active");
      var layout = $(this).attr("data-attr");
      $("body").attr("class", "box-layout");
      $("html").attr("dir", layout);
    });
  });
})(jQuery);
