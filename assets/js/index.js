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
    } else if (div_2.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_3).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_3).removeClass("d-none");
    } else if (div_3.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_1).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_1).removeClass("d-none");
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
    } else if (div_2.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_1).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_1).removeClass("d-none");
    } else if (div_3.classList.length > 1) {
      $(div_1).removeClass("active-bar");
      $(div_2).removeClass("active-bar");
      $(div_3).removeClass("active-bar");
      $(div_2).addClass("active-bar");
      $(".haber_div").addClass("d-none");
      $(haber_div_2).removeClass("d-none");
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
