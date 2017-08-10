$(document).ready(function() {
  $('form#celebrityForm').submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var eyeColor = $("select#eyeColor").val();
    var favoriteNumber =  parseInt($("input#favoriteNumber").val());

    if (age) {
    } else {
      alert("Please Enter age!");
    }

    if (favoriteNumber) {
    } else {
      alert("Please enter favorite number!")
    }

    if (gender === "male"){
      if (age <50){
        if (eyeColor === "blue"){
          // m,<50,bl
          (".kardashian").show();
        }else if (eyeColor === "brown"){
          // m,<50,br
          (".murray").show();
        }else {
          // m,<50,gr
          (".kardashian").show();
        }
      } else if {
        if (eyeColor === "blue"){
    //       // m,>50,bl
          (".murray").show();
        }else if (eyeColor === "brown"){
    //       // m,>50,br
          (".kardashian").show();
        }else {
    //       // m,>50,gr
          (".murray").show();
        }
      }
    } else { //end of (gender === "male")
      if(age <50){
        if (eyeColor === "blue"){
    //       // f,<50,bl
          (".kardashian").show();
        }else if (eyeColor === "brown"){
    //       // f,<50,br
          (".murray").show();
        }else {
    //       // f,<50,gr
          (".kardashian").show();
        }
      } else{
        if (eyeColor === "blue"){
    //       // f,>50,bl
          (".murray").show();
        }else if (eyeColor === "brown"){
    //       // f,>50,br
          (".kardashian").show();
        }else {
    //       // f,>50,gr
          (".murray").show();
        }
      }
// closing
    }

    event.preventDefault();
  });
});


// if (age <= 50 && gender === male && eyeColor === blue || green){
//   (".kardashian").show();
//     if (age <= 50 && gender === male && eyeColor === blue || green){
//     }
// }
