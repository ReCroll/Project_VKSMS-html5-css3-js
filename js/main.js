/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// (function($) {

var $window = $(window),
  $head = $("head"),
  $body = $("body");

// Breakpoints.
breakpoints({
  xlarge: ["1281px", "1680px"],
  large: ["981px", "1280px"],
  medium: ["737px", "980px"],
  small: ["481px", "736px"],
  xsmall: ["361px", "480px"],
  xxsmall: [null, "360px"],
  "xlarge-to-max": "(min-width: 1681px)",
  "small-to-xlarge": "(min-width: 481px) and (max-width: 1680px)",
});

// Stops animations/transitions until the page has ...

// ... loaded.
$window.on("load", function () {
  window.setTimeout(function () {
    $body.removeClass("is-preload");
  }, 100);
});

// ... stopped resizing.
var resizeTimeout;

$window.on("resize", function () {
  // Mark as resizing.
  $body.addClass("is-resizing");

  // Unmark after delay.
  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(function () {
    $body.removeClass("is-resizing");
  }, 100);
});

// Fixes.

// Object fit images.
if (!browser.canUse("object-fit") || browser.name == "safari")
  $(".image.object").each(function () {
    var $this = $(this),
      $img = $this.children("img");

    // Hide original image.
    $img.css("opacity", "0");

    // Set background.
    $this
      .css("background-image", 'url("' + $img.attr("src") + '")')
      .css(
        "background-size",
        $img.css("object-fit") ? $img.css("object-fit") : "cover"
      )
      .css(
        "background-position",
        $img.css("object-position") ? $img.css("object-position") : "center"
      );
  });

// function theRotator() {
// 	// Устанавливаем прозрачность всех картинок в 0
// 	$('.rotator-slide').css({opacity: 0.0});

// 	// Берем первую картинку и показываем ее (по пути включаем полную видимость)
// 	$('div#rotator ul li:first').css({opacity: 1.0});

// 	// Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
// 	setInterval('rotate()',7000);
// }

// function rotate() {
// 	// Берем первую картинку
// 	var current = ($('div#rotator ul li.show')?  $('div#rotator ul li.show') : $('div#rotator ul li:first'));

// 	// Берем следующую картинку, когда дойдем до последней начинаем с начала
// 	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));

// 	// Расскомментируйте, чтобы показвать картинки в случайном порядке
// 	// var sibs = current.siblings();
// 	// var rndNum = Math.floor(Math.random() * sibs.length );
// 	// var next = $( sibs[ rndNum ] );

// 	// Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
// 	next.css({opacity: 0.0})
// 	.addClass('show')
// 	.animate({opacity: 1.0}, 3000);

// 	// Прячем текущую картинку
// 	current.animate({opacity: 0.0}, 1000)
// 	.removeClass('show');
// };

// $(document).ready(function() {
// 	// Запускаем слайдшоу
// 	theRotator();
// });

// Sidebar.
var $sidebar = $("#sidebar"),
  $sidebar_inner = $sidebar.children(".inner");

// Inactive by default on <= large.
breakpoints.on("<=large", function () {
  $sidebar.addClass("inactive");
});

breakpoints.on(">large", function () {
  $sidebar.removeClass("inactive");
});

// Hack: Workaround for Chrome/Android scrollbar position bug.
if (browser.os == "android" && browser.name == "chrome")
  $(
    "<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>"
  ).appendTo($head);
// scroling
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

// banner-------------------------------

// Button view
$(document).ready(function () {
  $("#showHideContent").click(function () {
    if ($("#content").is(":hidden")) {
      $("#content").show("slow");
    } else {
      $("#content").hide("slow");
    }
    return false;
  });
});

$("#showHideContent").click(function dots() {
  var change = document.getElementById("dotsContent");
  if (change.innerHTML == " ...") {
    change.innerHTML = " ";
  } else {
    change.innerHTML = " ...";
  }
});

$("#showHideContent").click(function myFunction() {
  var change = document.getElementById("showHideContent");
  if (change.innerHTML == "Дізнатись більше") {
    change.innerHTML = "Згорнути інформацію";
  } else {
    change.innerHTML = "Дізнатись більше";
  }
});

// сортувальні кнопки

// $(document).ready(function() {

// 	if  ($(".postsView").is(":hidden")){
// 		$('.sortingButtonsOllView').removeClass('button')
// 	}	else {
// 		$('.sortingButtonsOllView').addClass('button');
// }

// });

$("#photoView").click(function () {
  $(".sortingButtonsPhotoView").addClass("sortingButtonsActive");
  $(".sortingButtonsVideoView").removeClass("sortingButtonsActive");
  $(".sortingButtonsOllView").removeClass("sortingButtonsActive");
  $(".videoView").hide({
    duration: 300,
    easing: "linear",
  });
  $("#postsViewButton").hide({
    duration: 300,
    easing: "linear",
  });
  $(".photoView").show({
    duration: 300,
    easing: "linear",
  });
});
$("#videoView").click(function () {
  $(".sortingButtonsVideoView").addClass("sortingButtonsActive");
  $(".sortingButtonsPhotoView").removeClass("sortingButtonsActive");
  $(".sortingButtonsOllView").removeClass("sortingButtonsActive");
  $(".photoView").hide({
    duration: 300,
    easing: "linear",
  });
  $("#postsViewButton").hide({
    duration: 300,
    easing: "linear",
  });
  $(".videoView").show({
    duration: 300,
    easing: "linear",
  });
});
$("#ollView").click(function () {
  // var changePostsButton = document.getElementById("postsViewButton");
  $(".sortingButtonsOllView").addClass("sortingButtonsActive");
  $(".sortingButtonsPhotoView").removeClass("sortingButtonsActive");
  $(".sortingButtonsVideoView").removeClass("sortingButtonsActive");
  $(".photoView").show({
    duration: 300,
    easing: "linear",
  });
  $(".videoView").show({
    duration: 300,
    easing: "linear",
  });
  $("#postsViewButton").show({
    duration: 300,
    easing: "linear",
  });
  $(".postsView").show("slow");
});

const sortingButtonsQuarter = document.querySelectorAll(
  ".sortingButtonsQuarter"
);
if (sortingButtonsQuarter.length > 0) {
  for (let index = 0; index < sortingButtonsQuarter.length; index++) {
    const sortingButtonQuarter = sortingButtonsQuarter[index];
    sortingButtonQuarter.addEventListener("click", function (e) {
      const quartersShow = sortingButtonQuarter.getAttribute("id");
      const quarterShow = document.getElementById(quartersShow);
      quarterShow.classList.add("_active");
      var quarterShows = document.getElementsByClassName(
        "button sortingButtonsQuarter _active"
      );
      if (quarterShows) {
        for (let i = 0; i < quarterShows.length; i++) {
          let quarterBtnShow = quarterShows[i];
          quarterBtnShow.classList.remove("_active");
          quarterShow.classList.add("_active");
        }
      }
      e.preventDefault();
    });
  }
}

// const sliderTargets = document.querySelectorAll('.slider__img-link');
// if (sliderTargets.length > 0){
//     for (let index = 0; index < sliderTargets.length; index++) {
//         const sliderTarget = sliderTargets[index];
//         sliderTarget.addEventListener("click", function(e) {
//             const sliderBigShow = sliderTarget.getAttribute('id').replace('small', '');
//             const sliderBigTarget = document.getElementById(sliderBigShow);
//             sliderBigTarget.classList.add('open');
//             var sliderPopupImgs = document.getElementsByClassName('slider__popup-img open');
//             if (sliderPopupImgs) {
//                 for (let closeImg = 0; closeImg < sliderPopupImgs.length; closeImg++) {
//                     let sliderPopupImg = sliderPopupImgs[closeImg];
//                     sliderPopupImg.classList.remove('open');
//                     sliderBigTarget.classList.add('open');
//                 }
//             }
//             e.preventDefault();
//         });
//     }
// }

$(".sortingButtonsQuarterOne").click(function () {
  $(".quarterOneOut").show("slow");
  $(".quarterTwoOut").hide("slow");
  $(".quarterThreeOut").hide("slow");
  $(".quarterFourOut").hide("slow");

  // $(".sortingButtonsQuarterOne").addClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterTwo").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterThree").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterFour").removeClass("sortingButtonsActive");
  // $(".sortingButtonsYear").removeClass("sortingButtonsActive");
});

$(".sortingButtonsQuarterTwo").click(function () {
  $(".quarterTwoOut").show("slow");
  $(".quarterOneOut").hide("slow");
  $(".quarterThreeOut").hide("slow");
  $(".quarterFourOut").hide("slow");

  // $(".sortingButtonsQuarterTwo").addClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterOne").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterThree").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterFour").removeClass("sortingButtonsActive");
  // $(".sortingButtonsYear").removeClass("sortingButtonsActive");
});

$(".sortingButtonsQuarterThree").click(function () {
  $(".quarterThreeOut").show("slow");
  $(".quarterTwoOut").hide("slow");
  $(".quarterOneOut").hide("slow");
  $(".quarterFourOut").hide("slow");

  // $(".sortingButtonsQuarterThree").addClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterOne").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterTwo").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterFour").removeClass("sortingButtonsActive");
  // $(".sortingButtonsYear").removeClass("sortingButtonsActive");
});

$(".sortingButtonsQuarterFour").click(function () {
  $(".quarterFourOut").show("slow");
  $(".quarterTwoOut").hide("slow");
  $(".quarterThreeOut").hide("slow");
  $(".quarterOneOut").hide("slow");

  // $(".sortingButtonsQuarterFour").addClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterOne").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterTwo").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterThree").removeClass("sortingButtonsActive");
  // $(".sortingButtonsYear").removeClass("sortingButtonsActive");
});

$(".sortingButtonsYear").click(function () {
  $(".yearOut").show({
    duration: 300,
    easing: "linear",
  });

  // $(".sortingButtonsYear").addClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterOne").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterTwo").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterThree").removeClass("sortingButtonsActive");
  // $(".sortingButtonsQuarterFour").removeClass("sortingButtonsActive");
});

// сортування фото та відео

// $('#workersButtonOne').click(function() {

// 	let btn = document.getElementById("workersButtonOne")
// 	// if(btn.hasClass('sortingButtonsActive')) {
// 		// btn.removeClass('sortingButtonsActive')
// 	// } else {
// 		$(btn).addClass('sortingButtonsActive')
// 		$('#workingHoursButtonOne').removeClass('sortingButtonsActive')
// 		$('#informationsButtonOneParOne').removeClass('sortingButtonsActive')
// 		$('#informationsButtonOneParTwo').removeClass('sortingButtonsActive')
// 	// }

// });

// $('#workingHoursButtonOne').click(function() {
// 	$('#workingHoursButtonOne').addClass('sortingButtonsActive')
// 	$('#workersButtonOne').removeClass('sortingButtonsActive')
// 	$('#informationsButtonOneParOne').removeClass('sortingButtonsActive')
// 	$('#informationsButtonOneParTwo').removeClass('sortingButtonsActive')
// });

// $('#informationsButtonOneParOne').click(function() {
// 	$('#informationsButtonOneParOne').addClass('sortingButtonsActive')
// 	$('#workersButtonOne').removeClass('sortingButtonsActive')
// 	$('#workingHoursButtonOne').removeClass('sortingButtonsActive')
// 	$('#informationsButtonOneParTwo').removeClass('sortingButtonsActive')
// });

// $('#informationsButtonOneParTwo').click(function() {
// 	$('#informationsButtonOneParTwo').addClass('sortingButtonsActive')
// 	$('#workersButtonOne').removeClass('sortingButtonsActive')
// 	$('#workingHoursButtonOne').removeClass('sortingButtonsActive')
// 	$('#informationsButtonOneParOne').removeClass('sortingButtonsActive')
// });

// $('#photoView').click(function() {
// 	$('.sortingButtonsPhotoView').removeClass('postsView')
// 	$('.photoView').s('hidden')
// 	$('#photoView').addClass('buttonDecoration')
// 	$('#videoView').removeClass('buttonDecoration')
// 	$('#ollView').removeClass('buttonDecoration')
// });

$(document).ready(function () {
  $("#postsViewButton").click(function () {
    if ($(".postsView").is(":hidden")) {
      $(".postsView").show("slow");
    } else {
      $(".postsView").hide("slow");
    }
    return false;
  });
});

// $(document).ready(function(){
// 	$("#buttonNews").click(function () {
// 			if ($(".newsPreview").is(":hidden")) {
// 					$(".newsPreview").show("slow");
// 			} else {
// 					$(".newsPreview").hide("slow");
// 			}
// 			return false;
// 	});
// });

// $('.buttonNews').click(function() {

// 	if($('.newsPreview').hasClass('newsPreviewActive')){
// 		$(".newsPreview").removeClass("newsPreviewActive");
// 		} else {
// 			$(".newsPreview").addClass("newsPreviewActive");

// 		}
// 	return false;

// });

$(document).ready(function () {
  var changePostsButton = document.getElementById("postsViewButton");
  $("#postsViewButton").click(function () {
    if (changePostsButton.innerHTML == "Переглянути все") {
      changePostsButton.innerHTML = "Згорнути";
    } else {
      changePostsButton.innerHTML = "Переглянути все";
    }
  });
  $("#ollView").click(function () {
    if ($(".postsView").is(":hidden")) {
      changePostsButton.innerHTML = "Переглянути більше";
    } else {
      changePostsButton.innerHTML = "Згорнути";
    }
  });
});

// остановка видео при скрывании блока

var videoBlocks = document.querySelectorAll(".video__blocks");
if (videoBlocks) {
  for (let index = 0; index < videoBlocks.length; index++) {
    const videoBlock = videoBlocks[index];
    videoBlock.addEventListener("click", function (e) {
      var videoBlockShows = videoBlock
        .getAttribute("class")
        .replace("image video__blocks view", "block");
      var videoSrc = videoBlock.getAttribute("video-show");
      var videoIframe = videoBlock.getAttribute("video-iframe");
      // console.log(videoSrc);
      // var popups = document.querySelectorAll('.popup-video');
      var videoIframePlay = document.getElementById(videoIframe);
      // console.log(videoIframePlay);
      videoIframePlay.setAttribute("src", videoSrc);
      var videoBlockShow = document.getElementById(videoBlockShows);

      videoBlockShow.classList.add("_active");
      if (!document.body.classList.contains("lock")) {
        document.body.classList.add("lock");
      }
      var carusel = document.getElementsByClassName("test-view _active");
      if (carusel) {
        videoBlockShow.addEventListener("click", function (e) {
          videoBlockShow.classList.remove("_active");
          if (document.body.classList.contains("lock")) {
            document.body.classList.remove("lock");
          }
          videoIframePlay.removeAttribute("src");
          e.preventDefault();
        });
      }
      e.preventDefault();
    });
  }
}

// ====================  КАРТИНКИ ====================

// ==================================================================

var viewBlocks = document.querySelectorAll(".view__blocks");
if (viewBlocks) {
  for (let index = 0; index < viewBlocks.length; index++) {
    const viewBlock = viewBlocks[index];
    viewBlock.addEventListener("click", function (e) {
      var viewBlockShows = viewBlock
        .getAttribute("class")
        .replace("image view__blocks view", "block");
      var viewImgShows = "img" + viewBlockShows;
      // console.log(viewBlockShows);
      // var caruselBlockShows = viewBlock.getAttribute('class').replace('image view__blocks ', '');
      // var viewBlockHides = viewBlock.getAttribute('class').replace('image view__blocks ', '');
      var viewBlockShow = document.getElementById(viewBlockShows);
      var showImages = document.querySelectorAll("." + viewImgShows);
      // console.log(showImages);
      for (let i = 0; i < showImages.length; i++) {
        const showImage = showImages[i];
        // console.log(showImage);
        var showDataSrcImage = showImage.getAttribute("data-src");
        // console.log(showDataSrcImage);
        showImage.setAttribute("src", showDataSrcImage);
      }
      // var showImage = showImages.getAttribute('data-set');

      viewBlockShow.classList.add("_active");
      if (!document.body.classList.contains("lock")) {
        document.body.classList.add("lock");
      }
      // caruselBlockShow.classList.add('_active');
      var carusel = document.getElementsByClassName("test-view _active");
      if (carusel) {
        viewBlockShow.addEventListener("click", function (e) {
          viewBlockShow.classList.remove("_active");
          if (document.body.classList.contains("lock")) {
            document.body.classList.remove("lock");
          }
          // caruselBlockShow.classList.remove('_active');
          e.preventDefault();
        });
      }
      e.preventDefault();
    });
  }
}
var viewInstitutions = document.querySelectorAll(".view__institutions");
if (viewInstitutions) {
  for (let inst = 0; inst < viewInstitutions.length; inst++) {
    const viewInstitution = viewInstitutions[inst];
    // console.log(viewInstitution);
    viewInstitution.addEventListener("click", function (e) {
      var viewInstitutionShows = viewInstitution
        .getAttribute("class")
        .replace("view__institutions ", "");
      var viewInstitutionsBlocks = "view" + viewInstitutionShows;
      // console.log(viewInstitutionsBlocks);
      // var caruselBlockShows = viewBlock.getAttribute('class').replace('image view__blocks ', '');
      // var viewBlockHides = viewBlock.getAttribute('class').replace('image view__blocks ', '');
      var viewInstitutionShow = document.getElementById(viewInstitutionShows);
      // console.log(viewInstitutionShow);

      var viewInstitutionsBlock = document.querySelectorAll(
        "." + viewInstitutionsBlocks
      );
      // console.log(viewInstitutionsBlock);

      for (let im = 0; im < viewInstitutionsBlock.length; im++) {
        const viewBlocks = viewInstitutionsBlock[im];
        // console.log(viewBlocks);
        // console.log(showImage);
        var hadDataSrcImage = viewBlocks.getAttribute("data-src");
        // console.log(hadDataSrcImage);
        viewBlocks.setAttribute("src", hadDataSrcImage);
        // viewBlocks.removeAttribute('data-src');
      }
      // var showImage = showImages.getAttribute('data-set');

      var showInstitutions = document.getElementById("culturalInstitutions");
      showInstitutions.classList.add("_active");
      viewInstitutionShow.classList.add("_active");
      if (!document.body.classList.contains("lock")) {
        document.body.classList.add("lock");
      }
      // caruselBlockShow.classList.add('_active');
      var institutions = document.getElementsByClassName(
        "archiveBlock institutions _active"
      );
      // console.log(institutions);
      if (institutions) {
        var hiddenInstitutions = document.querySelectorAll(".archiveHidden");
        // console.log(hiddenInstitutions);
        for (let hide = 0; hide < hiddenInstitutions.length; hide++) {
          const hiddenInstitution = hiddenInstitutions[hide];
          hiddenInstitution.addEventListener("click", function (e) {
            viewInstitutionShow.classList.remove("_active");
            showInstitutions.classList.remove("_active");
            if (document.body.classList.contains("lock")) {
              document.body.classList.remove("lock");
            }
            // caruselBlockShow.classList.remove('_active');
            e.preventDefault();
          });
        }
      }
      e.preventDefault();
    });
  }
}

// ==================КАРУСЕЛЬ =====================

$(document).ready(function () {
  var carousel = $(".carousel").waterwheelCarousel({
    flankingItems: 3,
    movingToCenter: function ($item) {
      $("#callback-output").prepend(
        "movingToCenter: " + $item.attr("id") + "<br/>"
      );
    },
    movedToCenter: function ($item) {
      $("#callback-output").prepend(
        "movedToCenter: " + $item.attr("id") + "<br/>"
      );
    },
    movingFromCenter: function ($item) {
      $("#callback-output").prepend(
        "movingFromCenter: " + $item.attr("id") + "<br/>"
      );
    },
    movedFromCenter: function ($item) {
      $("#callback-output").prepend(
        "movedFromCenter: " + $item.attr("id") + "<br/>"
      );
    },
    clickedCenter: function ($item) {
      $("#callback-output").prepend(
        "clickedCenter: " + $item.attr("id") + "<br/>"
      );
    },
  });

  $("#prev").bind("click", function () {
    carousel.prev();
    return false;
  });

  $("#next").bind("click", function () {
    carousel.next();
    return false;
  });

  $("#reload").bind("click", function () {
    newOptions = eval("(" + $("#newoptions").val() + ")");
    carousel.reload(newOptions);
    return false;
  });
});

// archive;
$("#cultureLink").click(function () {
  $("#culture").addClass("show_block");
  $body.addClass("lock");
  $(".archiveHidden").click(function () {
    if ($("#culture").hasClass("show_block")) {
      $("#culture").removeClass("show_block");
    }
    if ($body.hasClass("lock")) {
      $body.removeClass("lock");
    }
  });
});

$("#youngLink").click(function () {
  $("#young").addClass("show_block");
  $body.addClass("lock");
  $(".archiveHidden").click(function () {
    if ($("#young").hasClass("show_block")) {
      $("#young").removeClass("show_block");
    }
    if ($body.hasClass("lock")) {
      $body.removeClass("lock");
    }
  });
});

$("#sportLink").click(function () {
  $("#sport").addClass("show_block");
  $body.addClass("lock");
  $(".archiveHidden").click(function () {
    if ($("#sport").hasClass("show_block")) {
      $("#sport").removeClass("show_block");
    }
    if ($body.hasClass("lock")) {
      $body.removeClass("lock");
    }
  });
});

$("#serviceFamily").click(function () {
  $("#family").addClass("show_block");
  $body.addClass("lock");
  $(".archiveHidden").click(function () {
    if ($("#family").hasClass("show_block")) {
      $("#family").removeClass("show_block");
    }
    if ($body.hasClass("lock")) {
      $body.removeClass("lock");
    }
  });
});

$("#serviceCopy").click(function () {
  $("#copy").addClass("show_block");
  $body.addClass("lock");
  $(".archiveHidden").click(function () {
    if ($("#copy").hasClass("show_block")) {
      $("#copy").removeClass("show_block");
    }
    if ($body.hasClass("lock")) {
      $body.removeClass("lock");
    }
  });
});

// мережа закладів культури

// $('#clubOne').click(function() {
//   $('#culturalInstitutions, .clubOne').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .clubOne').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#clubTwo').click(function() {
//   $('#culturalInstitutions, .clubTwo').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .clubTwo').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#clubThree').click(function() {
//   $('#culturalInstitutions, .clubThree').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .clubThree').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#clubFour').click(function() {
//   $('#culturalInstitutions, .clubFour').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .clubFour').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#libraryOne').click(function() {
//   $('#culturalInstitutions, .libraryOne').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		// #workersLbOne,
// 		// $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
// 		// $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
// 		// $("#informationsButtonLbOneParOneActive").removeClass("sortingButtonsActive");
// 		// $("#informationsButtonLbOneParTwoActive").removeClass("sortingButtonsActive");
// 		$('#culturalInstitutions, .libraryOne ').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});

// 	});
// });

// $('#libraryTwo').click(function() {
//   $('#culturalInstitutions, .libraryTwo').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .libraryTwo').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#libraryThree').click(function() {
//   $('#culturalInstitutions, .libraryThree').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .libraryThree').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $('#libraryFour').click(function() {
//   $('#culturalInstitutions, .libraryFour').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .libraryFour').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});

// 	});
// });

// $('#libraryFive').click(function() {
//   $('#culturalInstitutions, .libraryFive').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.archiveHidden').click(function() {
// 		$('#culturalInstitutions, .libraryFive').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});

// 	});
// });

$(".archiveHidden").click(function () {
  $(
    "#workersLbOne, #workingHoursLbOne, #informationsLbOneParOne, #informationsLbOneParTwo, #workersLbTwo, #workingHoursLbTwo, #informationsLbTwoParTwo, #informationsLbTwoParTwo, #workersLbThree, #workingHoursLbThree, #informationsLbThreeParOne, #informationsLbThreeParTwo, #workersLbFour, #workingHoursLbFour, #informationsLbFourParOne, #informationsLbFourParTwo, #workersLbFive, #workingHoursLbFive, #informationsLbFiveParOne, #informationsLbFiveParTwo, #workersOne, #workingHoursOne, #informationsOneParOne, #informationsOneParTwo, #workersTwo, #workingHoursTwo, #informationsTwoParTwo, #informationsTwoParTwo, #workersThree, #workingHoursThree, #informationsThreeParOne, #informationsThreeParTwo, #workersFour, #workingHoursFour, #informationsFourParOne, #informationsFourParTwo, #workersFive, #workingHoursFive, #informationsFiveParOne, #informationsFiveParTwo"
  ).hide({
    duration: 300,
    easing: "linear",
  });
  $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbOneParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbOneParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonOneActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonOneParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonOneParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonLbTwoActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonLbTwoActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbTwoParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbTwoParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonTwoActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonTwoActive").removeClass("sortingButtonsActive");
  $("#informationsButtonTwoParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonTwoParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonLbThreeActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonLbThreeActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbThreeParOneActive").removeClass(
    "sortingButtonsActive"
  );
  $("#informationsButtonLbThreeParTwoActive").removeClass(
    "sortingButtonsActive"
  );

  $("#workersButtonThreeActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonThreeActive").removeClass("sortingButtonsActive");
  $("#informationsButtonThreeParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonThreeParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonLbFourActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonLbFourActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbFourParOneActive").removeClass(
    "sortingButtonsActive"
  );
  $("#informationsButtonLbFourParTwoActive").removeClass(
    "sortingButtonsActive"
  );

  $("#workersButtonFourActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonFourActive").removeClass("sortingButtonsActive");
  $("#informationsButtonFourParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonFourParTwoActive").removeClass("sortingButtonsActive");

  $("#workersButtonLbFiveActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonLbFiveActive").removeClass("sortingButtonsActive");
  $("#informationsButtonLbFiveParOneActive").removeClass(
    "sortingButtonsActive"
  );
  $("#informationsButtonLbFiveParTwoActive").removeClass(
    "sortingButtonsActive"
  );

  $("#workersButtonFiveActive").removeClass("sortingButtonsActive");
  $("#workingHoursButtonFiveActive").removeClass("sortingButtonsActive");
  $("#informationsButtonFiveParOneActive").removeClass("sortingButtonsActive");
  $("#informationsButtonFiveParTwoActive").removeClass("sortingButtonsActive");

  $(".sortingButtonsQuarterOne").removeClass("sortingButtonsActive");
  $(".sortingButtonsQuarterTwo").removeClass("sortingButtonsActive");
  $(".sortingButtonsQuarterThree").removeClass("sortingButtonsActive");
  $(".sortingButtonsQuarterFour").removeClass("sortingButtonsActive");
  $(".sortingButtonsYear").removeClass("sortingButtonsActive");
  $(".yearOut").show("slow");
});

//вспливаючі вікна мережі закладів культури

$(document).ready(function () {
  $("#workersButtonOne").click(function () {
    if ($("#workersOne").is(":hidden")) {
      $("#workersOne").show("slow");
      $("#workingHoursOne").hide("slow");
      $("#informationsOneParOne").hide("slow");
      $("#informationsOneParTwo").hide("slow");
    } else {
      $("#workersOne").hide("slow");
      // $("#workersButtonOne").removeClass("sortingButtonsActive");
    }
    if ($("#workersButtonOneActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonOneActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonOneActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// $(document).ready(function(){
// 	$("#workersButtonOne").click(function () {
// 			if ($("#workersOne").is(":hidden")) {
// 					$("#workersOne").show("slow");
// 					$("#workingHoursOne").hide("slow");
// 					$("#informationsOneParOne").hide("slow");
// 					$("#informationsOneParTwo").hide("slow");
// 			} else {
// 					$("#workersOne").hide("slow");
// 					// $("#workersButtonOne").removeClass("sortingButtonsActive");

// 			}
// 			if($('#workersButtonOneActive').hasClass('sortingButtonsActive')){
// 				$("#workersButtonOneActive").removeClass("sortingButtonsActive");
// 				} else {
// 					$("#workersButtonOneActive").addClass("sortingButtonsActive");
// 					$("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
// 					$("#informationsButtonOneParOneActive").removeClass("sortingButtonsActive");
// 					$("#informationsButtonOneParTwoActive").removeClass("sortingButtonsActive");
// 				}
// 			return false;

// 	});
// });
// $(document).ready(function(){
// 	$('#workersButtonOne').click(function(){
// 		if($('#workersButtonOneActive').hasClass('sortingButtonsActive')){
// 			$("#workersButtonOneActive").removeClass("sortingButtonsActive");
// 			} else {
// 				$("#workersButtonOneActive").addClass("sortingButtonsActive");
// 			}
// 			return false;
// 	});
// });

$(document).ready(function () {
  $("#workingHoursButtonOne").click(function () {
    if ($("#workingHoursOne").is(":hidden")) {
      $("#workingHoursOne").show("slow");
      $("#workersOne").hide("slow");
      $("#informationsOneParOne").hide("slow");
      $("#informationsOneParTwo").hide("slow");
    } else {
      $("#workingHoursOne").hide("slow");
    }
    if ($("#workingHoursButtonOneActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonOneActive").addClass("sortingButtonsActive");
      $("#workersButtonOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonOneParOne").click(function () {
    if ($("#informationsOneParOne").is(":hidden")) {
      $("#informationsOneParOne").show("slow");
      $("#workersOne").hide("slow");
      $("#workingHoursOne").hide("slow");
      $("#informationsOneParTwo").hide("slow");
    } else {
      $("#informationsOneParOne").hide("slow");
    }
    if (
      $("#informationsButtonOneParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonOneParOneActive").addClass("sortingButtonsActive");
      $("#workersButtonOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
      $("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonOneParTwo").click(function () {
    if ($("#informationsOneParTwo").is(":hidden")) {
      $("#informationsOneParTwo").show("slow");
      $("#workersOne").hide("slow");
      $("#workingHoursOne").hide("slow");
      $("#informationsOneParOne").hide("slow");
    } else {
      $("#informationsOneParTwo").hide("slow");
    }
    if (
      $("#informationsButtonOneParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonOneParTwoActive").addClass("sortingButtonsActive");
      $("#workersButtonOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#workingHoursButtonOneActive").removeClass("sortingButtonsActive");
    }
    return false;
  });
});
// --------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonLbOne").click(function () {
    if ($("#workersLbOne").is(":hidden")) {
      $("#workersLbOne").show("slow");
      $("#workingHoursLbOne").hide("slow");
      $("#informationsLbOneParOne").hide("slow");
      $("#informationsLbOneParTwo").hide("slow");
    } else {
      $("#workersLbOne").hide("slow");
    }
    if ($("#workersButtonLbOneActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonLbOneActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonLbOne").click(function () {
    if ($("#workingHoursLbOne").is(":hidden")) {
      $("#workingHoursLbOne").show("slow");
      $("#workersLbOne").hide("slow");
      $("#informationsLbOneParOne").hide("slow");
      $("#informationsLbOneParTwo").hide("slow");
    } else {
      $("#workingHoursLbOne").hide("slow");
    }
    if ($("#workingHoursButtonLbOneActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonLbOneActive").addClass("sortingButtonsActive");
      $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbOneParOne").click(function () {
    if ($("#informationsLbOneParOne").is(":hidden")) {
      $("#informationsLbOneParOne").show("slow");
      $("#workersLbOne").hide("slow");
      $("#workingHoursLbOne").hide("slow");
      $("#informationsLbOneParTwo").hide("slow");
    } else {
      $("#informationsLbOneParOne").hide("slow");
    }
    if (
      $("#informationsButtonLbOneParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonLbOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbOneParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbOneParTwo").click(function () {
    if ($("#informationsLbOneParTwo").is(":hidden")) {
      $("#informationsLbOneParTwo").show("slow");
      $("#workersLbOne").hide("slow");
      $("#workingHoursLbOne").hide("slow");
      $("#informationsLbOneParOne").hide("slow");
    } else {
      $("#informationsLbOneParTwo").hide("slow");
    }
    if (
      $("#informationsButtonLbOneParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonLbOneParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbOneParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbOneActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbOneParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// --------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonTwo").click(function () {
    if ($("#workersTwo").is(":hidden")) {
      $("#workersTwo").show("slow");
      $("#workingHoursTwo").hide("slow");
      $("#informationsTwoParOne").hide("slow");
      $("#informationsTwoParTwo").hide("slow");
    } else {
      $("#workersTwo").hide("slow");
    }
    if ($("#workersButtonTwoActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonTwoActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonTwoActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonTwo").click(function () {
    if ($("#workingHoursTwo").is(":hidden")) {
      $("#workingHoursTwo").show("slow");
      $("#workersTwo").hide("slow");
      $("#informationsTwoParOne").hide("slow");
      $("#informationsTwoParTwo").hide("slow");
    } else {
      $("#workingHoursTwo").hide("slow");
    }
    if ($("#workingHoursButtonTwoActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonTwoActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonTwoActive").addClass("sortingButtonsActive");
      $("#workersButtonTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonTwoParOne").click(function () {
    if ($("#informationsTwoParOne").is(":hidden")) {
      $("#informationsTwoParOne").show("slow");
      $("#workingHoursTwo").hide("slow");
      $("#workersTwo").hide("slow");
      $("#informationsTwoParTwo").hide("slow");
    } else {
      $("#informationsTwoParOne").hide("slow");
    }
    if (
      $("#informationsButtonTwoParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonTwoParOneActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonTwoActive").removeClass("sortingButtonsActive");
      $("#workersButtonTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonTwoParTwo").click(function () {
    if ($("#informationsTwoParTwo").is(":hidden")) {
      $("#informationsTwoParTwo").show("slow");
      $("#workingHoursTwo").hide("slow");
      $("#informationsTwoParOne").hide("slow");
      $("#workersTwo").hide("slow");
    } else {
      $("#informationsTwoParTwo").hide("slow");
    }
    if (
      $("#informationsButtonTwoParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonTwoParTwoActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#workersButtonTwoActive").removeClass("sortingButtonsActive");
    }
    return false;
  });
});

// -------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonLbTwo").click(function () {
    if ($("#workersLbTwo").is(":hidden")) {
      $("#workersLbTwo").show("slow");
      $("#workingHoursLbTwo").hide("slow");
      $("#informationsLbTwoParOne").hide("slow");
      $("#informationsLbTwoParTwo").hide("slow");
    } else {
      $("#workersLbThree").hide("slow");
    }
    if ($("#workersButtonLbTwoActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonLbTwoActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonLbTwoActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonLbTwo").click(function () {
    if ($("#workingHoursLbTwo").is(":hidden")) {
      $("#workingHoursLbTwo").show("slow");
      $("#workersLbTwo").hide("slow");
      $("#informationsLbTwoParOne").hide("slow");
      $("#informationsLbTwoParTwo").hide("slow");
    } else {
      $("#workingHoursLbTwo").hide("slow");
    }
    if ($("#workingHoursButtonLbTwoActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonLbTwoActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonLbTwoActive").addClass("sortingButtonsActive");
      $("#workersButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbTwoParOne").click(function () {
    if ($("#informationsLbTwoParOne").is(":hidden")) {
      $("#informationsLbTwoParOne").show("slow");
      $("#workersLbTwo").hide("slow");
      $("#workingHoursLbTwo").hide("slow");
      $("#informationsLbTwoParTwo").hide("slow");
    } else {
      $("#informationsLbTwoParOne").hide("slow");
    }
    if (
      $("#informationsButtonLbTwoParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonLbTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbTwoParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbTwoParTwo").click(function () {
    if ($("#informationsLbTwoParTwo").is(":hidden")) {
      $("#informationsLbTwoParTwo").show("slow");
      $("#workersLbTwo").hide("slow");
      $("#workingHoursLbTwo").hide("slow");
      $("#informationsLbTwoParOne").hide("slow");
    } else {
      $("#informationsLbTwoParTwo").hide("slow");
    }
    if (
      $("#informationsButtonLbTwoParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonLbTwoParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbTwoParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbTwoActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbTwoParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// ---------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonThree").click(function () {
    if ($("#workersThree").is(":hidden")) {
      $("#workersThree").show("slow");
      $("#workingHoursThree").hide("slow");
      $("#informationsThreeParTwo").hide("slow");
      $("#informationsThreeParOne").hide("slow");
    } else {
      $("#workersThree").hide("slow");
    }
    if ($("#workersButtonThreeActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonThreeActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonThreeActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonThree").click(function () {
    if ($("#workingHoursThree").is(":hidden")) {
      $("#workingHoursThree").show("slow");
      $("#workersThree").hide("slow");
      $("#informationsThreeParTwo").hide("slow");
      $("#informationsThreeParOne").hide("slow");
    } else {
      $("#workingHoursThree").hide("slow");
    }
    if ($("#workingHoursButtonThreeActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonThreeActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonThreeActive").addClass("sortingButtonsActive");
      $("#workersButtonThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonThreeParOne").click(function () {
    if ($("#informationsThreeParOne").is(":hidden")) {
      $("#informationsThreeParOne").show("slow");
      $("#workersThree").hide("slow");
      $("#informationsThreeParTwo").hide("slow");
      $("#workingHoursThree").hide("slow");
    } else {
      $("#informationsThreeParOne").hide("slow");
    }
    if (
      $("#informationsButtonThreeParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonThreeParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonThreeActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonThreeParTwo").click(function () {
    if ($("#informationsThreeParTwo").is(":hidden")) {
      $("#informationsThreeParTwo").show("slow");
      $("#workersThree").hide("slow");
      $("#workingHoursThree").hide("slow");
      $("#informationsThreeParOne").hide("slow");
    } else {
      $("#informationsThreeParTwo").hide("slow");
    }
    if (
      $("#informationsButtonThreeParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonThreeParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonThreeActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// --------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonLbThree").click(function () {
    if ($("#workersLbThree").is(":hidden")) {
      $("#workersLbThree").show("slow");
      $("#workingHoursLbThree").hide("slow");
      $("#informationsLbThreeParOne").hide("slow");
      $("#informationsLbThreeParTwo").hide("slow");
    } else {
      $("#workersLbThree").hide("slow");
    }
    if ($("#workersButtonLbThreeActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonLbThreeActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonLbThreeActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonLbThree").click(function () {
    if ($("#workingHoursLbThree").is(":hidden")) {
      $("#workingHoursLbThree").show("slow");
      $("#workersLbThree").hide("slow");
      $("#informationsLbThreeParOne").hide("slow");
      $("#informationsLbThreeParTwo").hide("slow");
    } else {
      $("#workingHoursLbThree").hide("slow");
    }
    if (
      $("#workingHoursButtonLbThreeActive").hasClass("sortingButtonsActive")
    ) {
      $("#workingHoursButtonLbThreeActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonLbThreeActive").addClass("sortingButtonsActive");
      $("#workersButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbThreeParOne").click(function () {
    if ($("#informationsLbThreeParOne").is(":hidden")) {
      $("#informationsLbThreeParOne").show("slow");
      $("#workersLbThree").hide("slow");
      $("#workingHoursLbThree").hide("slow");
      $("#informationsLbThreeParTwo").hide("slow");
    } else {
      $("#informationsLbThreeParOne").hide("slow");
    }
    if (
      $("#informationsButtonLbThreeParOneActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbThreeParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbThreeParTwo").click(function () {
    if ($("#informationsLbThreeParTwo").is(":hidden")) {
      $("#informationsLbThreeParTwo").show("slow");
      $("#workersLbThree").hide("slow");
      $("#workingHoursLbThree").hide("slow");
      $("#informationsLbThreeParOne").hide("slow");
    } else {
      $("#informationsLbThreeParTwo").hide("slow");
    }
    if (
      $("#informationsButtonLbThreeParTwoActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbThreeParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbThreeParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbThreeActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbThreeParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// ----------------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonFour").click(function () {
    if ($("#workersFour").is(":hidden")) {
      $("#workersFour").show("slow");
      $("#workingHoursFour").hide("slow");
      $("#informationsFourParOne").hide("slow");
      $("#informationsFourParTwo").hide("slow");
    } else {
      $("#workersFour").hide("slow");
    }
    if ($("#workersButtonFourActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonFourActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonFourActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonFour").click(function () {
    if ($("#workingHoursFour").is(":hidden")) {
      $("#workingHoursFour").show("slow");
      $("#workersFour").hide("slow");
      $("#informationsFourParOne").hide("slow");
      $("#informationsFourParTwo").hide("slow");
    } else {
      $("#workingHoursFour").hide("slow");
    }
    if ($("#workingHoursButtonFourActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonFourActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonFourActive").addClass("sortingButtonsActive");
      $("#workersButtonFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonFourParOne").click(function () {
    if ($("#informationsFourParOne").is(":hidden")) {
      $("#informationsFourParOne").show("slow");
      $("#workersFour").hide("slow");
      $("#workingHoursFour").hide("slow");
      $("#informationsFourParTwo").hide("slow");
    } else {
      $("#informationsFourParOne").hide("slow");
    }
    if (
      $("#informationsButtonFourParOneActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonFourParOneActive").addClass("sortingButtonsActive");
      $("#workersButtonFourActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonFourParTwo").click(function () {
    if ($("#informationsFourParTwo").is(":hidden")) {
      $("#informationsFourParTwo").show("slow");
      $("#workersFour").hide("slow");
      $("#workingHoursFour").hide("slow");
      $("#informationsFourParOne").hide("slow");
    } else {
      $("#informationsFourParTwo").hide("slow");
    }
    if (
      $("#informationsButtonFourParTwoActive").hasClass("sortingButtonsActive")
    ) {
      $("#informationsButtonFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonFourParTwoActive").addClass("sortingButtonsActive");
      $("#workersButtonFourActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// ------------------------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonLbFour").click(function () {
    if ($("#workersLbFour").is(":hidden")) {
      $("#workersLbFour").show("slow");
      $("#workingHoursLbFour").hide("slow");
      $("#informationsLbFourParOne").hide("slow");
      $("#informationsLbFourParTwo").hide("slow");
    } else {
      $("#workersLbFour").hide("slow");
    }
    if ($("#workersButtonLbFourActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonLbFourActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonLbFourActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonLbFour").click(function () {
    if ($("#workingHoursLbFour").is(":hidden")) {
      $("#workingHoursLbFour").show("slow");
      $("#workersLbFour").hide("slow");
      $("#informationsLbFourParOne").hide("slow");
      $("#informationsLbFourParTwo").hide("slow");
    } else {
      $("#workingHoursLbFour").hide("slow");
    }
    if ($("#workingHoursButtonLbFourActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonLbFourActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonLbFourActive").addClass("sortingButtonsActive");
      $("#workersButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbFourParOne").click(function () {
    if ($("#informationsLbFourParOne").is(":hidden")) {
      $("#informationsLbFourParOne").show("slow");
      $("#workersLbFour").hide("slow");
      $("#workingHoursLbFour").hide("slow");
      $("#informationsLbFourParTwo").hide("slow");
    } else {
      $("#informationsLbFourParOne").hide("slow");
    }
    if (
      $("#informationsButtonLbFourParOneActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbFourParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbFourParTwo").click(function () {
    if ($("#informationsLbFourParTwo").is(":hidden")) {
      $("#informationsLbFourParTwo").show("slow");
      $("#workersLbFour").hide("slow");
      $("#workingHoursLbFour").hide("slow");
      $("#informationsLbFourParOne").hide("slow");
    } else {
      $("#informationsLbFourParTwo").hide("slow");
    }
    if (
      $("#informationsButtonLbFourParTwoActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbFourParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbFourParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbFourActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFourParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// $(document).ready(function(){
// 	$("#informationsButtonLbFourParTwo").click(function () {
// 			if ($("#informationsLbFourParTwo").is(":hidden")) {
// 					$("#informationsLbFourParTwo").show("slow");
// 			} else {
// 					$("#informationsLbFourParTwo").hide("slow");
// 			}
// 			return false;
// 	});

// 	// $("#informationsButtonLbFourParTwo").click(function () {
// 	// 		if
// 	// });

// });
// ----------------------------------------------------------------------------------------

$(document).ready(function () {
  $("#workersButtonLbFive").click(function () {
    if ($("#workersLbFive").is(":hidden")) {
      $("#workersLbFive").show("slow");
      $("#workingHoursLbFive").hide("slow");
      $("#informationsLbFiveParOne").hide("slow");
      $("#informationsLbFiveParTwo").hide("slow");
    } else {
      $("#workersLbFive").hide("slow");
    }
    if ($("#workersButtonLbFiveActive").hasClass("sortingButtonsActive")) {
      $("#workersButtonLbFiveActive").removeClass("sortingButtonsActive");
    } else {
      $("#workersButtonLbFiveActive").addClass("sortingButtonsActive");
      $("#workingHoursButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFiveParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbFiveParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#workingHoursButtonLbFive").click(function () {
    if ($("#workingHoursLbFive").is(":hidden")) {
      $("#workingHoursLbFive").show("slow");
      $("#workersLbFive").hide("slow");
      $("#informationsLbFiveParOne").hide("slow");
      $("#informationsLbFiveParTwo").hide("slow");
    } else {
      $("#workingHoursLbFive").hide("slow");
    }
    if ($("#workingHoursButtonLbFiveActive").hasClass("sortingButtonsActive")) {
      $("#workingHoursButtonLbFiveActive").removeClass("sortingButtonsActive");
    } else {
      $("#workingHoursButtonLbFiveActive").addClass("sortingButtonsActive");
      $("#workersButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFiveParOneActive").removeClass(
        "sortingButtonsActive"
      );
      $("#informationsButtonLbFiveParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbFiveParOne").click(function () {
    if ($("#informationsLbFiveParOne").is(":hidden")) {
      $("#informationsLbFiveParOne").show("slow");
      $("#workersLbFive").hide("slow");
      $("#workingHoursLbFive").hide("slow");
      $("#informationsLbFiveParTwo").hide("slow");
    } else {
      $("#informationsLbFiveParOne").hide("slow");
    }
    if (
      $("#informationsButtonLbFiveParOneActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbFiveParOneActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbFiveParOneActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFiveParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

$(document).ready(function () {
  $("#informationsButtonLbFiveParTwo").click(function () {
    if ($("#informationsLbFiveParTwo").is(":hidden")) {
      $("#informationsLbFiveParTwo").show("slow");
      $("#workersLbFive").hide("slow");
      $("#workingHoursLbFive").hide("slow");
      $("#informationsLbFiveParOne").hide("slow");
    } else {
      $("#informationsLbFiveParTwo").hide("slow");
    }
    if (
      $("#informationsButtonLbFiveParTwoActive").hasClass(
        "sortingButtonsActive"
      )
    ) {
      $("#informationsButtonLbFiveParTwoActive").removeClass(
        "sortingButtonsActive"
      );
    } else {
      $("#informationsButtonLbFiveParTwoActive").addClass(
        "sortingButtonsActive"
      );
      $("#workersButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#workingHoursButtonLbFiveActive").removeClass("sortingButtonsActive");
      $("#informationsButtonLbFiveParOneActive").removeClass(
        "sortingButtonsActive"
      );
    }
    return false;
  });
});

// ----------------------------------------------------------------------------------------
// Галерея мережі закладів культури
// -----------------------------------------------------------------------------------------

$("#institutionsGaleryOneViewOne").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewOne"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewOne"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewTwo").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTwo"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTwo"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewNine").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity").click(function () {
    $(
      ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine"
    ).hide({
      duration: "fast",
      easing: "linear",
    });
  });
});

$(".institutionsGaleryWrapperOpacity").click(function () {
  var videoStopTwo = document.getElementById(
    "institutionsGaleryHideOneViewNine"
  );
  if (videoStopTwo.play) {
    videoStopTwo.pause();
  } else {
    videoStopTwo.pause();
  }
});

$("#institutionsGaleryOneViewFour").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFour"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFour"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewFive").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFive"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFive"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewSix").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSix"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSix"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewSeven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSeven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSeven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewEight").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewEight"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewEight"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $("#institutionsGaleryOneViewNine").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

$("#institutionsGaleryOneViewTen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewEleven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewEleven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewEleven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewTwelve").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTwelve"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewTwelve"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewThirteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewThirteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewThirteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewFiveteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFiveteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFiveteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
$("#institutionsGaleryOneViewFourteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFourteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewFourteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewSixteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSixteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSixteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryOneViewSeventeen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSeventeen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewSeventeen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// Великодорізька сільська бібліотека

$("#institutionsGaleryThreeViewOne").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewOne"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewOne"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewTwo").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTwo"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTwo"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewNine").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewNine"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewNine"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $(".institutionsGaleryWrapperOpacity").click(function(){
// 	var videoStopTwo = document.getElementById("institutionsGaleryHideOneViewNine")
// 	if (videoStopTwo.play) {
// 		videoStopTwo.pause()
// 	} else {
// 		videoStopTwo.pause()
// 	}
// })

$("#institutionsGaleryThreeViewFour").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewFour"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewFour"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewFive").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewFive"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewFive"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewSix").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewSix"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewSix"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewSeven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewSeven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewSeven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewEight").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewEight"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewEight"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $("#institutionsGaleryOneViewNine").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

$("#institutionsGaleryThreeViewTen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewEleven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewEleven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewEleven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewTwelve").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTwelve"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewTwelve"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryThreeViewThirteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewThirteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperThreeViewThirteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// Безуглівська сільська бібліотека

$("#institutionsGaleryTwoViewOne").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewOne"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewOne"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewTwo").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewTwo"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewTwo"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewNine").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewNine"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewNine"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $(".institutionsGaleryWrapperOpacity").click(function(){
// 	var videoStopTwo = document.getElementById("institutionsGaleryHideOneViewNine")
// 	if (videoStopTwo.play) {
// 		videoStopTwo.pause()
// 	} else {
// 		videoStopTwo.pause()
// 	}
// })

$("#institutionsGaleryTwoViewFour").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFour"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFour"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewFive").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFive"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFive"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewSix").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSix"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSix"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewSeven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSeven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSeven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewEight").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewEight"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewEight"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewTwelve").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewTwelve"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewTwelve"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewEleven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewEleven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewEleven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewThirteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewThirteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewThirteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
$("#institutionsGaleryTwoViewFourteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFourteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFourteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryTwoViewFiveteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFiveteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewFiveteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
$("#institutionsGaleryTwoViewSixteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSixteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSixteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
$("#institutionsGaleryTwoViewSeventeen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSeventeen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperTwoViewSeventeen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
// $("#institutionsGaleryOneViewNine").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });
// --------------------------------------------------------------------------------------------
// Курилівська сільська бібліотека

$("#institutionsGaleryFourViewOne").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewOne"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewOne"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewTwo").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTwo"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTwo"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewNine").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewNine"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewNine"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewTen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewEleven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewEleven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewEleven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewTwelve").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTwelve"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewTwelve"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewFive").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewFive"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewFive"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFourViewSix").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewSix"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFourViewSix"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// -----------------------------------------------------------------------------------------
// кропивнянська сільська бібліотека

$("#institutionsGaleryFiveViewOne").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewOne"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewOne"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewTwo").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTwo"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTwo"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewNine").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewNine"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewNine"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $(".institutionsGaleryWrapperOpacity").click(function(){
// 	var videoStopTwo = document.getElementById("institutionsGaleryHideOneViewNine")
// 	if (videoStopTwo.play) {
// 		videoStopTwo.pause()
// 	} else {
// 		videoStopTwo.pause()
// 	}
// })

// $("#institutionsGaleryFiveViewFour").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFour').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFour').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

$("#institutionsGaleryFiveViewFive").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFive"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFive"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewSix").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSix"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSix"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewSeven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSeven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSeven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewEight").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewEight"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewEight"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

// $("#institutionsGaleryOneViewNine").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperOneViewNine').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

// $("#institutionsGaleryFiveViewTen").click(function() {
//   $('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTen').show({
//     duration: 300,
//     easing: 'linear'
//   });
// 	$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper').click(function() {
// 		$('.institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTen').hide({

// 			duration: 'fast',
// 			easing: 'linear'
// 		});
// 	});
// });

$("#institutionsGaleryFiveViewEleven").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewEleven"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewEleven"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewTwelve").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTwelve"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewTwelve"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewThirteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewThirteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewThirteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewFourteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFourteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFourteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewFiveteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFiveteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewFiveteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewSixteen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSixteen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSixteen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});

$("#institutionsGaleryFiveViewSeventeen").click(function () {
  $(
    ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSeventeen"
  ).show({
    duration: 300,
    easing: "linear",
  });
  $(".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapper").click(
    function () {
      $(
        ".institutionsGaleryWrapperOpacity, .institutionsGaleryWrapperFiveViewSeventeen"
      ).hide({
        duration: "fast",
        easing: "linear",
      });
    }
  );
});
// -----------------------------------------------------------------------------------------

// carousel start

// 		width: 500px;
// height: 350px;

// $('.carousel-center').click(function() {
// 	$('.carousel-center').css('width',"800px");
// });

// Toggle.
$('<a href="#sidebar" class="toggle">Toggle</a>')
  .appendTo($sidebar)
  .on("click", function (event) {
    // Prevent default.
    event.preventDefault();

    event.stopPropagation();

    // Toggle.
    $sidebar.toggleClass("inactive");
  });

// 	$(".toggle").click(function myFunction() {
// 		var togglePosition = document.getElementsByClassName("toggle");
// 		togglePosition.addClass("togglePositions")

// });
// $(function() {

// 	$('<a href="#sidebar" class="toggle">Toggle</a>').toggleClass("togglePosition");
// 	$(this).removeClass("togglePosition");
// });

// Events.

// Link clicks.
$sidebar.on("click", "a", function (event) {
  // >large? Bail.
  if (breakpoints.active(">large")) return;

  // Vars.
  var $a = $(this),
    href = $a.attr("href"),
    target = $a.attr("target");

  // Prevent default.
  event.preventDefault();
  event.stopPropagation();

  // Check URL.
  if (!href || href == "#" || href == "") return;

  // Hide sidebar.
  $sidebar.addClass("inactive");

  // Redirect to href.
  setTimeout(function () {
    if (target == "_blank") window.open(href);
    else window.location.href = href;
  }, 500);
});

// Prevent certain events inside the panel from bubbling.
$sidebar.on("click touchend touchstart touchmove", function (event) {
  // >large? Bail.
  if (breakpoints.active(">large")) return;

  // Prevent propagation.
  event.stopPropagation();
});

// Hide panel on body click/tap.
$body.on("click touchend", function (event) {
  // >large? Bail.
  if (breakpoints.active(">large")) return;

  // Deactivate.
  $sidebar.addClass("inactive");
});

// Scroll lock.

// Note: If you do anything to change the height of the sidebar's content, be sure to
// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

$window.on("load.sidebar-lock", function () {
  var sh, wh, st;

  // Reset scroll position to 0 if it's 1.
  if ($window.scrollTop() == 1) $window.scrollTop(0);

  $window
    .on("scroll.sidebar-lock", function () {
      var x, y;

      // <=large? Bail.
      if (breakpoints.active("<=large")) {
        $sidebar_inner.data("locked", 0).css("position", "").css("top", "");

        return;
      }

      // Calculate positions.
      x = Math.max(sh - wh, 0);
      y = Math.max(0, $window.scrollTop() - x);

      // Lock/unlock.
      if ($sidebar_inner.data("locked") == 1) {
        if (y <= 0)
          $sidebar_inner.data("locked", 0).css("position", "").css("top", "");
        else $sidebar_inner.css("top", -1 * x);
      } else {
        if (y > 0)
          $sidebar_inner
            .data("locked", 1)
            .css("position", "fixed")
            .css("top", -1 * x);
      }
    })
    .on("resize.sidebar-lock", function () {
      // Calculate heights.
      wh = $window.height();
      sh = $sidebar_inner.outerHeight() + 30;

      // Trigger scroll.
      $window.trigger("scroll.sidebar-lock");
    })
    .trigger("resize.sidebar-lock");
});

// Menu.
var $menu = $("#menu"),
  $menu_openers = $menu.children("ul").find(".opener");

// Openers.
$menu_openers.each(function () {
  var $this = $(this);

  $this.on("click", function (event) {
    // Prevent default.
    event.preventDefault();

    // Toggle.
    $menu_openers.not($this).removeClass("active");

    $this.toggleClass("active");

    // Trigger resize (sidebar lock).
    $window.triggerHandler("resize.sidebar-lock");
  });
});

$(document).ready(function () {
  $("#openerOne").click(function () {
    if ($(".openerOne").is(":hidden")) {
      $(".openerOne").show("slow");
      $(".openerTwo").hide("slow");
      $(".openerThree").hide("slow");
    } else {
      $(".openerOne").hide("slow");
    }
    return false;
  });
});

$(document).ready(function () {
  $("#openerTwo").click(function () {
    if ($(".openerTwo").is(":hidden")) {
      $(".openerTwo").show("slow");
      $(".openerOne").hide("slow");
      $(".openerThree").hide("slow");
    } else {
      $(".openerTwo").hide("slow");
    }
    return false;
  });
});
$(document).ready(function () {
  $("#openerThree").click(function () {
    if ($(".openerThree").is(":hidden")) {
      $(".openerThree").show("slow");
      $(".openerOne").hide("slow");
      $(".openerTwo").hide("slow");
    } else {
      $(".openerThree").hide("slow");
    }
    return false;
  });
});

$(document).ready(function () {
  $("#btn-home").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 400 мс
    $("body,html").animate({ scrollTop: top }, 400);
  });
});

jQuery(function (f) {
  var element = f("#btn-home");
  f(window).scroll(function () {
    element["fade" + (f(this).scrollTop() > 230 ? "In" : "Out")](0);
  });
});

// })(jQuery);
