$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var house = $("select#house").val();

    if (age < 30 && gender === "female") {
      var match = "Hermione";
    } else if (age >= 30 && house === "gryffindor") {
      var match = "Hagrid";
    } else if (house === "ravenclaw" || house === "hufflepuff") {
      var match = "Neville";
    } else if (age < 30 && gender != "female") {
      var match = "Ron";
    } else {
      var match = "Draco";
    }
    $("#match").text("Your match is " + match);
    event.preventDefault();
  });
});
