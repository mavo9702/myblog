$("#numero").change(function(){
     if(parseInt(this.value) < 20){
        /*if it is*/
         $('#numero').val('');
     }
     else if(parseInt(this.value) > 100){
        /*if it is*/
         $('#numero').val('');
     }
})
var x;
var buttons;
x = document.getElementById("numero").value;
//document.getElementById("topics").innerHTML = x;
for (var i = 1; i <= x; i++) {
    buttons = $('<button id="numeros" class='+i+'>'+ i + '</button>')
    buttons.appendTo('#topics');}

function myFunction() {
  $( "#topics" ).empty();
  x = document.getElementById("numero").value;
  //document.getElementById("topics").innerHTML = x;
  for (var i = 1; i <= x; i++) {
      buttons = $('<button id="numeros" class='+i+'>'+ i + '</button>')
      buttons.appendTo('#topics');}
}
function multiplos2(){
  for (var i = 1; i <= x; i++) {
    $("."+i+"").css("background-color", "#9218B7");
}
  var multiploss=[];
  for (var i = 1; i <= x; i++) {
      if (i%2==0){
        multiploss.push(i)}
      }
  multiploss.forEach(function(element) {
    $("."+element+"").css("background-color", "Orange");
  });}
  function multiplos3(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%3==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
  function multiplos4(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%4==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
  function multiplos5(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%5==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
  function multiplos6(){
          for (var i = 1; i <= x; i++) {
            $("."+i+"").css("background-color", "#9218B7");
        }
          var multiploss=[];
          for (var i = 1; i <= x; i++) {
              if (i%6==0){
                multiploss.push(i)}
              }
          multiploss.forEach(function(element) {
            $("."+element+"").css("background-color", "Orange");
          });
          }
  function multiplos7(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%7==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
  function multiplos8(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%8==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
  function multiplos9(){
    for (var i = 1; i <= x; i++) {
      $("."+i+"").css("background-color", "#9218B7");
  }
    var multiploss=[];
    for (var i = 1; i <= x; i++) {
        if (i%9==0){
          multiploss.push(i)}
        }
    multiploss.forEach(function(element) {
      $("."+element+"").css("background-color", "Orange");
    });
    }
 function limpiar(){
   $( "#topics" ).empty();
 }
 function numprimos(){
   var multiploss=[];
   for (var i = 1; i <= x; i++) {
     $("."+i+"").css("background-color", "#9218B7");}

   //for (var i = 2; i <= x; i++) {
    //   if (x%2 != 0){
      //   multiploss.push(i);
        // console.log(multiploss);
       //}
  var c = x;
  var j = 2;
  var numerosPrimos = [];

  for (; j < c; j++) {

    if (primo(j)) {
      numerosPrimos.push(j);
    }

  }

  //console.log(numerosPrimos);

  function primo(numero) {

    for (var i = 2; i < numero; i++) {

      if (numero % i === 0) {
        return false;
      }

    }

    return numero !== 1;
  }
  numerosPrimos.forEach(function(element) {
    $("."+element+"").css("background-color", "Orange");
  });
       //console.log(multiploss);
 }
