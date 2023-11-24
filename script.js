// effect layer
var overlay = document.getElementById("overlay");
var containerHome = document.getElementById("container-home");
var containerIsi = document.getElementById("isi-semua");
var videoSection = document.getElementById("loading");
var video = document.querySelector("#loading video");
var background = document.querySelector(".container-background-cover img");

var audio = new Audio("Audio/NyaliTerakhir.m4a");
var animationInterval;

document.addEventListener("DOMContentLoaded", function () {
  function hideOverlay(event) {
    if (event.target.id === "overlay") {
      overlay.style.animation = "fadeOut 3s forwards";
      setTimeout(function () {
        overlay.style.display = "none";
        showVideoSection();
      }, 2500);
      animationInterval = setInterval(changeBg, 5000);
    }
  }

  function showVideoSection() {
    videoSection.style.display = "flex";
    playVideo();
  }

  function playVideo() {
    video.play();
    video.addEventListener("ended", hideVideoSection);
  }

  function hideVideoSection() {
    videoSection.style.animation = "fadeOut 3s forwards";
    setTimeout(function () {
      videoSection.style.display = "none";
    }, 2500);
  }

  function showContainerisi(event) {
    event.stopPropagation();
    overlay.style.display = "none";
    containerHome.style.animation = "fadeOut 3s forwards";
    setTimeout(function () {
      containerHome.style.display = "none";
    }, 2500);
    containerIsi.style.animation = "fadeIn 3s forwards";
    containerIsi.style.display = "block";
    clearInterval(animationInterval);
    audio.play();
  }

  overlay.addEventListener("click", hideOverlay);
  containerHome.addEventListener("click", showContainerisi);
});

var currentImageIndex = 0;

function changeBg() {
  var images = [
    "img/dua-diri.JPG",
    "img/dua-diri3.JPG",
    "img/dua-diri4.JPG",
    "img/dua-diri5.JPG",
  ];

  background.style.animation = "fadeOutBG 1.5s forwards";

  setTimeout(function () {
    background.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fadeInBG();
  }, 1500);
}

function fadeInBG() {
  background.style.animation = "fadeInBG 1.5s forwards";
}

jQuery(function ($) {
  var doAnimations = function () {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");

    $animatables.each(function (i) {
      var $animatable = $(this);

      if ($animatable.offset().top + $animatable.height() - 50 < offset) {
        if (!$animatable.hasClass("animate-in")) {
          $animatable
            .removeClass("animate-out")
            .css("top", $animatable.css("top"))
            .addClass("animate-in");
        }
      } else if (
        $animatable.offset().top + $animatable.height() - 50 >
        offset
      ) {
        if ($animatable.hasClass("animate-in")) {
          $animatable
            .removeClass("animate-in")
            .css("top", $animatable.css("top"))
            .addClass("animate-out");
        }
      }
    });
  };

  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");
});
