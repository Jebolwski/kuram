$(".up_button").click(function () {
  $(window.scrollTo(0, 0));
});

$(window).resize(function () {
  if ($(window).width() > 1200) {
    $(".toggle_fixed_div").hide();
  }
});

$(".bar_icon").click(function () {
  console.log("sadsa");
  $(".toggle_fixed_div").toggle(300);
});

$(".buttons")
  .find(".right_button")
  .click(function () {
    let div_1 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[0];
    let div_2 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[1];
    let div_3 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[2];
    if (div_1.classList.length > 2) {
      $(div_1).removeClass("active");
      $(div_2).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.2").removeClass("d-none");
      $(".buttons_default_image").addClass("d-none");
      $(".buttons_zaire").removeClass("d-none");
    } else if (div_2.classList.length > 2) {
      $(div_2).removeClass("active");
      $(div_3).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.3").removeClass("d-none");
      $(".buttons_zaire").addClass("d-none");
      $(".buttons_madison").removeClass("d-none");
    } else if (div_3.classList.length > 2) {
      $(div_3).removeClass("active");
      $(div_1).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.1").removeClass("d-none");
      $(".buttons_madison").addClass("d-none");
      $(".buttons_default_image").removeClass("d-none");
    }
  });

$(".buttons")
  .find(".left_button")
  .click(function () {
    console.log("right");
    let div_1 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[0];
    let div_2 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[1];
    let div_3 = $(".block__partner").find(".div-1").children().find("div")
      .prevObject[2];
    if (div_1.classList.length > 2) {
      $(div_1).removeClass("active");
      $(div_3).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.3").removeClass("d-none");
      $(".buttons_default_image").addClass("d-none");
      $(".buttons_madison").removeClass("d-none");
    } else if (div_2.classList.length > 2) {
      $(div_2).removeClass("active");
      $(div_1).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.1").removeClass("d-none");
      $(".buttons_zaire").addClass("d-none");
      $(".buttons_default_image").removeClass("d-none");
    } else if (div_3.classList.length > 2) {
      $(div_3).removeClass("active");
      $(div_2).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.2").removeClass("d-none");
      $(".buttons_madison").addClass("d-none");
      $(".buttons_zaire").removeClass("d-none");
    }
  });

$(".buttons1")
  .find(".right_button")
  .click(function () {
    let haber_div_1 = $(".haber_div")[0];
    let haber_div_2 = $(".haber_div")[1];
    let haber_div_3 = $(".haber_div")[2];
    let div_1 = $(".bar-1")[0];
    let div_2 = $(".bar-2")[0];
    let div_3 = $(".bar-3")[0];
    console.log(div_1, div_2, div_3);
    if (div_1.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_2).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_2).removeClass("d-none");
      $(".buttons1_images_default").addClass("d-none");
      $(".zaire").removeClass("d-none");
    } else if (div_2.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_3).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_3).removeClass("d-none");
      $(".zaire").addClass("d-none");
      $(".madison").removeClass("d-none");
    } else if (div_3.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_1).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_1).removeClass("d-none");
      $(".madison").addClass("d-none");
      $(".buttons1_images_default").removeClass("d-none");
    }
  });

$(".buttons1")
  .find(".left_button")
  .click(function () {
    let haber_div_1 = $(".haber_div")[0];
    let haber_div_2 = $(".haber_div")[1];
    let haber_div_3 = $(".haber_div")[2];
    let div_1 = $(".bar-1")[0];
    let div_2 = $(".bar-2")[0];
    let div_3 = $(".bar-3")[0];
    console.log(div_1, div_2, div_3);
    if (div_1.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_3).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_3).removeClass("d-none");
      $(".buttons1_images_default").addClass("d-none");
      $(".madison").removeClass("d-none");
    } else if (div_2.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_1).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_1).removeClass("d-none");
      $(".zaire").addClass("d-none");
      $(".buttons1_images_default").removeClass("d-none");
    } else if (div_3.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_2).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_2).removeClass("d-none");
      $(".madison").addClass("d-none");
      $(".zaire").removeClass("d-none");
    }
  });

$(".buttons2")
  .find(".right_button")
  .click(function () {
    let div_1 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[0];
    let div_2 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[1];
    let div_3 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[2];
    if (div_1.classList.length > 2) {
      $(div_1).removeClass("active");
      $(div_2).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.2").removeClass("d-none");
    } else if (div_2.classList.length > 2) {
      $(div_2).removeClass("active");
      $(div_3).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.3").removeClass("d-none");
    } else if (div_3.classList.length > 2) {
      $(div_3).removeClass("active");
      $(div_1).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.1").removeClass("d-none");
    }
  });

$(".buttons2")
  .find(".left_button")
  .click(function () {
    console.log("right");
    let div_1 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[0];
    let div_2 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[1];
    let div_3 = $(".block__partner_small").find(".div-1").children().find("div")
      .prevObject[2];
    console.log(div_1, div_2, div_3);
    if (div_1.classList.length > 2) {
      $(div_1).removeClass("active");
      $(div_3).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.3").removeClass("d-none");
    } else if (div_2.classList.length > 2) {
      $(div_2).removeClass("active");
      $(div_1).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.1").removeClass("d-none");
    } else if (div_3.classList.length > 2) {
      $(div_3).removeClass("active");
      $(div_2).addClass("active");
      $(".div-2").addClass("d-none");
      $(".div-2.2").removeClass("d-none");
    }
  });

function languages_open() {
  $(".languages_div_1").toggle(300);
}

function languages_open_2() {
  $(".languages_div_2").toggle(300);
}

function languages_open_3() {
  $(".languages_div_3").toggle(300);
}

// Photo divs
$(".block__three_divs_div_1").hover(function () {
  $(".block__wave").find("img").addClass("d-none");
  $(".wave_default").removeClass("d-none");
  $(".block__three_divs_div_3").css("margin-top", "0px");
  $(".block__three_divs_div_2").css("margin-top", "0px");
  $(".block__three_divs_div_1").css("margin-top", "-30px");
});

$(".block__three_divs_div_2").hover(function () {
  $(".block__wave").find("img").addClass("d-none");
  $(".wave_zaire").removeClass("d-none");
  $(".block__three_divs_div_1").css("margin-top", "0px");
  $(".block__three_divs_div_3").css("margin-top", "0px");
  $(".block__three_divs_div_2").css("margin-top", "-30px");
});

$(".block__three_divs_div_3").hover(function () {
  $(".block__wave").find("img").addClass("d-none");
  $(".wave_madison").removeClass("d-none");
  $(".block__three_divs_div_1").css("margin-top", "0px");
  $(".block__three_divs_div_2").css("margin-top", "0px");
  $(".block__three_divs_div_3").css("margin-top", "-30px");
});

$("#partner").click(function () {
  $("#temsilci").removeClass("active");
  $("#gelistirici").removeClass("active");
  $("#partner").addClass("active");
  $(".block__partner").find("img").addClass("d-none");
  $(".buttons_default_image").removeClass("d-none");
  $(".block__partner").find(".div-2").addClass("d-none");
  $(".block__partner").find(".div-2.1").removeClass("d-none");
});

$("#temsilci").click(function () {
  $("#temsilci").addClass("active");
  $("#gelistirici").removeClass("active");
  $("#partner").removeClass("active");
  $(".block__partner").find("img").addClass("d-none");
  $(".buttons_zaire").removeClass("d-none");
  $(".block__partner").find(".div-2").addClass("d-none");
  $(".block__partner").find(".div-2.2").removeClass("d-none");
});

$("#gelistirici").click(function () {
  $("#temsilci").removeClass("active");
  $("#gelistirici").addClass("active");
  $("#partner").removeClass("active");
  $(".block__partner").find("img").addClass("d-none");
  $(".buttons_madison").removeClass("d-none");
  $(".block__partner").find(".div-2").addClass("d-none");
  $(".block__partner").find(".div-2.3").removeClass("d-none");
});

$("#partner1").click(function () {
  $("#temsilci1").removeClass("active");
  $("#gelistirici1").removeClass("active");
  $("#partner1").addClass("active");
  $(".block__partner_small").find(".div-2").addClass("d-none");
  $(".block__partner_small").find(".div-2.1").removeClass("d-none");
});

$("#temsilci1").click(function () {
  $("#temsilci1").addClass("active");
  $("#gelistirici1").removeClass("active");
  $("#partner1").removeClass("active");
  $(".block__partner_small").find(".div-2").addClass("d-none");
  $(".block__partner_small").find(".div-2.2").removeClass("d-none");
});

$("#gelistirici1").click(function () {
  $("#temsilci1").removeClass("active");
  $("#gelistirici1").addClass("active");
  $("#partner1").removeClass("active");
  $(".block__partner_small").find(".div-2").addClass("d-none");
  $(".block__partner_small").find(".div-2.3").removeClass("d-none");
});

$(".ticked").click(function () {
  $(".ticked").hide();
  $(".tick_form").show();
  console.log("clicked to non-ticked");
  $(".form_checkbox").prop("checked", false);
});

$(".tick_form").click(function () {
  $(".ticked").show();
  console.log("clicked to ticked");
  $(".tick_form").hide();
  $(".form_checkbox").prop("checked", true);
});
