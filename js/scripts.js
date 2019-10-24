$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var house = $("select#house").val();

    if (!age) {
      $(".form-control-feedback").show();
      var match = "... people without age can't have matches";
    } else if (age < 30 && gender === "female") {
      var match = "Hermione";
    } else if (age >= 30 && house === "gryffindor") {
      var match = "Hagrid";
    } else if (house === "ravenclaw" || house === "hufflepuff") {
      var match = "Neville";
    } else if (age < 30 && gender != "female") {
      var match = "Ron";
    } else if (house === "slytherin"){
      var match = "Draco";
    } else {
      var match = "Nicholas Flamel";
    }
    $("#match").text("Your match is " + match);
    event.preventDefault();
  });
});
