$(document).ready(function() {
  $('form#celebrityForm').submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var eyeColor = $("select#eyeColor").val();
    var favoriteNumber =  parseInt($("input#favoriteNumber").val());
    alert("Blah Blah");

    // if (age) {
    //
    // } else {
    //   alert("Please Enter Ager");
    // }

    event.preventDefault();
  });
});
