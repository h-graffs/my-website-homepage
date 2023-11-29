//* initiates functions on page load.
//*maybe change .on("click") to onclick function for refactorisation

$(document).ready(function () {});

//* ROTATES AND SLIDES BALL

let startingAngle = 0;

$("#ball-button").on("click", function () {
  startingAngle += 720;

  $("#ball-outer").css({ transform: "rotate(" + startingAngle + "deg" });
  $("#ball-inner").css({ transform: "rotate(-" + startingAngle + "deg" });
  $("#ball-outer").animate({ marginLeft: "+=200px" });

  //*FADEOUTS
  $("#div-to-center-button").delay(1000).fadeOut(2500);
  $("#ball-line").delay(3000).fadeOut(2000);
  $("#ball-outer, ball-inner").delay(3000).fadeOut(1000);
  $("#ballrollingtext-div").delay(4000).fadeOut(2500);
  $("#welcome-div").delay(5000).fadeOut(2500);

  //*SHIFTS IMAGE AND TEXT UPWARDS INTO VIEWPORT

  $("#i-container")
    .delay(6000)
    .animate(
      { paddingTop: "-200px", marginTop: "-60px", paddingBottom: "+50px" },
      3000
    );

  //*SHIFTS FOCAL POINT TO EACH INDIVIDUAL DIV

  $("#i-design").delay(9000).animate({ marginTop: "-=20px" });
  $("#i-program").delay(10000).animate({ marginTop: "-=20px" });
  $("#i-create").delay(11000).animate({ marginTop: "-=20px" });
  $("#i-inspire").delay(12000).animate({ marginTop: "-=20px" });

  $("#i-container").delay(6000).animate({ paddingBottom: "-50px" }, 3000);
});

//*POSSIBLE ON HOVER link hrefs to images - need to work on. IMG DOES NOT ACCEPT HREF ATTRIBUTES- NESTING IN AN ANCHOR ELEMENT WORKS BUT ANIMATIONS ARE THEN AFFECTED

function hover(element) {
  document.getElementById(element).src = "ht.png";
}

function unhover(element) {
  document.getElementById(element).src = "don.png";
}
