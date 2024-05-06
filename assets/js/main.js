(function ($) {
  "use strict";

  // preloader start
  let preloader = document.querySelector("#preloader");
  window.addEventListener("load", function () {
    preloader.classList.add("preloaded");
    setTimeout(function () {
      preloader.remove();
    }, 1500);
  });
  // preloader end

  // meanmenu start
  $(".main_menu").meanmenu({
    meanMenuContainer: ".mobile_menu",
    meanScreenWidth: "1399",
  });

  $(".main_menu_2").meanmenu({
    meanMenuContainer: ".mobile_menu_2",
    meanScreenWidth: "991",
  });

  $(".main_menu_3").meanmenu({
    meanMenuContainer: ".mobile_menu_3",
    meanScreenWidth: "991",
  });
  // meanmenu end

  // mobile menu start
  let menutoggole = document.querySelector(".toggle_menu");
  let mobilemenu = document.querySelector(".mobile-menu");
  menutoggole.onclick = function () {
    menutoggole.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  };
  // mobile menu end

  // dark mood start
  var darktoggle = document.querySelector(".dark-btn-icon");
  var home1bgimg = document.querySelector(".page-wrapper");
  var profileimg = document.querySelector(".bostami-parsonal-info-img img");

  // Function to toggle the dark theme
  function toggleDarkTheme() {
    // Toggle the class on the body element
    $("body").toggleClass("dark-theme");

    // Store the preference in local storage
    const isDarkTheme = $("body").hasClass("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);

    if (isDarkTheme) {
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpeg')";
      profileimg.src = "assets/img/parsonal-info/parson-img-dark.png"
    } else {
      darktoggle.src = "assets/img/icon/mon-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-3.jpeg')";
      profileimg.src = "assets/img/parsonal-info/parson-img-3.png"
    }
  }
  // Check if the user preference is already stored in local storage
  $(document).ready(function () {
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";

    // Apply the dark theme if the preference is set to true
    if (isDarkTheme) {
      $("body").addClass("dark-theme");
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpeg')";
      profileimg.src = "assets/img/parsonal-info/parson-img-dark.png";
    } else {
      darktoggle.src = "assets/img/icon/mon-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-3.jpeg')";
      profileimg.src = "assets/img/parsonal-info/parson-img-3.png"
    }

    // Attach click event to the specified div
    $(".dark-btn").on("click", toggleDarkTheme);
  });
  // dark mood end

  //  client slider start
  if (jQuery(".client_slide_active").length > 0) {
    let acooterbrand = new Swiper(".client_slide_active", {
      slidesPerView: 4,
      disableOnInteraction: false,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: {
        delay: 1500,
      },

      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }
  // client slider end

  // portfolio fillter start
  function enableMasonry2() {
    // ----------------------------- isotop gallery

    $(window).on("load", function () {
      if ($("#fillter-item-active").length) {
        var $grid = $("#fillter-item-active").isotope({
          // options
          itemSelector: ".isotop-item",
          percentPosition: true,
          masonry: {
            // use element for option
            columnWidth: ".grid-sizer",
          },
        });

        // filter items on button click
        $(".isotop-menu-wrapper").on("click", "li", function () {
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "li", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
          });
        });
      }
    });
  }

  enableMasonry2();
  // portfolio filter end

  $(document).ready(function () {

    var techImageMap = {
      "Angular 17": "angular.png",
      "Spring Boot": "spring.png",
      "Spring Security": "spring-security.png",
      "JWT": "jwt.png",
      "HTML": "html.png",
      "CSS": "css.png",
      "Bootstrap": "bootstrap.png",
      "Javascript": "JS.png",
      "PHP": "php.png",
      "Mongo DB": "mongo.png",
      "Node JS": "node.png",
      "HTML, CSS & JS": "html-css-js.png"
    };

    $('[data-bs-toggle="modal"]').on('click', function () {
      var projectId = $(this).data('id');
      loadProjectData(projectId);
    });

    function loadProjectData(id) {
      $.getJSON('assets/data/projects.json', function (data) {
        var project = data.find(p => p.id === id);
        if (project) {
          $('.modal .blog-title').text(project.title);

          $('.modal .portfolio-modal-info').html(project.info);

          $('.modal .portfolio-modal-github').attr('href', project.github);

          var techListHtml = '<ul class="tech-list">';
          project.technologies.forEach(function (tech) {
            var imageName = techImageMap[tech];
            techListHtml += '<li><img width="24" src="assets/img/tech/' + imageName + '" alt="' + tech + ' logo" class="modal-logo-icon"><span>' + tech + '</span></li>';
          });
          techListHtml += '</ul>';

          $('.modal .portfolio-modal-technologies').html(techListHtml);

          $('.modal .h1-modal-video-iframe iframe').attr('src', project.video);

        }
      });
    }
  });


  // blog slider start
  if (jQuery(".blog-slider-active").length > 0) {
    let acooterbrand = new Swiper(".blog-slider-active", {
      slidesPerView: 1,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: false,
      pagination: {
        el: ".blog-progation",
        clickable: true,
      },
    });
  }
  // blog slider end

  // contact form
  $(".input-box.name").click(function () {
    $(".input-box.name").addClass("height");
    $(".input-box.name").css("borderBottom", "1px solid #FE7878");
    $(".input-lebel.name").css("color", "#FE7878");
  });

  $(".input-box.gmail").click(function () {
    $(".input-box.gmail").addClass("height");
    $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
    $(".input-lebel.gmail").css("color", "#1B74E4");
  });

  $(".input-box.message").click(function () {
    $(".input-box.message").addClass("height");
    $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
    $(".input-lebel.message").css("color", "#CE65F3");
  });
  // contact form end

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });

  //   odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // WOW active
  new WOW().init();
})(jQuery);
