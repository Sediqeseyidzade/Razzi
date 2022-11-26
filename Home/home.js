//Nav
 function myFunction(){
        var x =document.getElementById("myLinks");
        console.log(x);
        if (x.style.display === "block") {
            x.style.display ="none";
        }
        else{
          x.style.display ="block";
          
        }
 }
//Section5
function Dijital_saat() {
  var sure = new Date();
  const elements = document.querySelectorAll(".saat");
  elements.forEach(saat => {
    saat.innerHTML =  say(sure.getHours()) +
    ":" +
    say(sure.getMinutes()) +
    ":" +
    say(sure.getSeconds());
  });

   
  setInterval(Dijital_saat,1000);
  console.log(sure);
}
function say(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}
Dijital_saat();
                          
  //Section6 OwlCarousel
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
           items:3
        }
    }
})

           
                              