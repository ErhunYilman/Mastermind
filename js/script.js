var colors = ["red", "blue", "green", "yellow", "purple", "orange", "white", "black"];
var random = [];

// Player input function
function inputColors(colors) {
  var loop = 0;
  var field_elemtent = document.getElementsByClassName("basicRowButton");

  for (var i = 0; i < field_elemtent.length; i++) {

    field_elemtent[i].addEventListener("click", function(){

      //console.log(field_elemtent[0]);
      console.log(i);
      field_elemtent[loop].style.backgroundColor = colors[loop++].value;
      console.log(colors[loop++]);
      if (loop >= colors.length) {
        loop = 0;
      }
    });
  }
}

inputColors(colors);
// Computer opject
//
  function randomizeArray(colors){
    for (var i = 0; i < 4; i++ ) {
      random[i] = colors [Math.floor(Math.random() * colors.length)];
    }
  }

  randomizeArray(colors);

// document.getElementById("color").addEventListener("click", function(event){
//   color1 = event.target.id;
//   console.log(color1);
//  });
//
// document.getElementsByClassName("field")[0].addEventListener("click", function(event){
//   event.target.style.backgroundColor = color1;
// });

// console.log(random);
//
// function Color(colors){
//   this.color = colors || null;
// }
//
// var red = new Color("red");
// var blue = new Color("blue");
// var green = new Color("green");
// var yellow = new Color("yellow");
// var purple = new Color("purple");
// var orange = new Color("orange");
// var white = new Color("white");
// var black = new Color("black");
//
// console.log(color);
