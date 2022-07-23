$("document").ready(function(){
$("#loading .sk-chase").fadeOut(5000 , function(){
$("#loading").slideUp(1000 , function(){
$(".home-category").animate({width : "100%" , height : "100%"} , 1000,
function(){
$(".col-md-4").eq(0).show(1000 , function(){
$(".col-md-4").eq(1).slideDown(1000 , function(){
    $(".col-md-4").eq(2).show(1000 , function(){
        $(".Section-Products").animate({width : "100%" , height : "100%"} , 1000 , function(){
        $(".Section-Products .text-center").show(1000,function(){
            $(".Section-Products .container").fadeIn(2000 ,function(){
                $(".testimonial ").show(2000 , function(){
                    $(".Section-Bestsellers").show(2000 ,function(){
                       $(".background-overlay").show(2000 ,function(){
                        $(".Section-Blog").fadeIn(2000 ,() =>{
                            $(".section-wrap").show(2000, function(){
                                $("footer").show(2000)
                            })
                        })
                       }) 
                    })
                });
            });
        });
        }) ; 
    });
});
});
});
}) ;
    }) ;
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    particlesJS.load('particles-js', '/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}) ;
function myClick() 

{
    let itemForm = document.getElementById("itemForm") ;
    itemForm.style.transform = "scaleX(1)" ;
    itemForm.style.transitionDuration = "0.8s" ;
}
$("#close").click(function(){

    let itemForm = document.getElementById("itemForm") ;
    itemForm.style.transform = "scaleX(0)" ;
    itemForm.style.transitionDuration = "0.8s" ;
})

$(".sochial a").eq(0).css({
       "display" : "block" ,
       "backgroundColor" : "#035397" ,
       "padding" : "10px" ,
       "marginBottom" : "20px" ,
       "color" : "#FFF",
       "textDecoration" : "none" ,
}) ;
$(".sochial a").eq(1).css({
    "display" : "block" ,
    "backgroundColor" : "#4285f4" ,
    "padding" : "10px" ,
    "marginBottom" : "20px" ,
    "color" : "#FFF",
    "textDecoration" : "none" ,
}) ;
$(".sochial a").eq(2).css({
    "display" : "block" ,
    "backgroundColor" : "#b4455b" ,
    "padding" : "10px" ,
    "marginBottom" : "20px" ,
    "color" : "#FFF",
    "textDecoration" : "none" ,
}) ;
$(".sochial a").eq(3).css({
    "display" : "block" ,
    "backgroundColor" : "#1da1f2" ,
    "padding" : "10px" ,
    "marginBottom" : "20px" ,
    "color" : "#FFF",
    "textDecoration" : "none" ,
}) ;

$("#search").click(function(){
    $("#searchInput").css("display" , "flex");
});

$('#closeSearch').click(function(){

    $("#searchInput").css("display" , "none");
})

$("#itemImg img").click(function(e){

  let imgSrc = $(e.target).attr("src") ;
  console.log(imgSrc);
  $(".sliderBg").css({backgroundImage : `url(${imgSrc})`});

});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  let listImage = Array.from(document.querySelectorAll("#listImage img")) ;
  let itemImageContainer = document.getElementById("itemImageContainer"); 
  let itemListImage = document.getElementById("itemListImage") ;
  let closeBttn = document.getElementById("closeBttn");
  let prev = document.getElementById("prev") ;
  let next = document.getElementById("next") ;
  let currentImg ;
  for(let i = 0 ; i < listImage.length ; i ++)
  {
    listImage[i].addEventListener("click" , function(e){
        itemImageContainer.style.display = "flex" ;
        let imgSrc = e.target.getAttribute("src") ;
        itemListImage.style.backgroundImage = `url(${imgSrc})`;
        currentImg = listImage.indexOf(e.target) ;
        console.log(currentImg);
        })
  }
  function nextSlide(){
    currentImg = currentImg + 1 ;
    if(currentImg > listImage.length){
        currentImg = 0 ;
    }
    let imgSrc = listImage[currentImg].src ;
    itemListImage.style.backgroundImage = `url(${imgSrc})`;
  }
  next.addEventListener("click" , nextSlide) ;

  function prevSlide(){
    currentImg = currentImg - 1 ;
    if(currentImg < 0)
    {
        currentImg = listImage.length - 1 ;
    }
    let imgSrc = listImage[currentImg].src ;
    itemListImage.style.backgroundImage = `url(${imgSrc})`;
    console.log(imgSrc);
  }
  prev.addEventListener("click" , prevSlide);


 

  document.body.addEventListener('keyup',function(e){
      
      if(e.key == "Escape")
      {
      itemImageContainer.style.display = "none" ;
      }
  });
  closeBttn.addEventListener("click",function(e){
    itemImageContainer.style.display = "none" ;
  });

