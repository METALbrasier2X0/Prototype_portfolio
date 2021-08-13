// Declaration valeurs
var opacity=0;
var intervalID=0;
var button = document.getElementById('login-button');
var wrapper = document.getElementById('wrapper');


button.addEventListener("click", function(event){
  event.preventDefault();
  fadeoutdiv()
  wrapper.classList.add('form-success');
  document.getElementById("title").innerHTML = "Alright";
  document.getElementById('fader').classList.replace('fade-out','fade-in')
  setTimeout(function () {location.reload();}, 1500);
});

// Fonctions

function fadeoutdiv(){
setInterval(hide, 50);
}

function hide(){
  var body=document.getElementById("message");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"))
           if(opacity>0){
                  opacity=opacity-0.1;
                  body.style.opacity=opacity
                         }else{
                             clearInterval(intervalID);
                              }
              }
