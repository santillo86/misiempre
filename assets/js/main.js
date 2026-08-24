document.addEventListener("DOMContentLoaded", function () {

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="whatsapp"]'
  );

  whatsappLinks.forEach(function(link){
    link.setAttribute("target","_blank");
    link.setAttribute("rel","noopener noreferrer");
  });

  const nav = document.getElementById("mainNav");

  if (!nav) return;

  nav.querySelectorAll(".nav-links a").forEach(function(link){
    link.addEventListener("click", function(e){

      if (
        window.innerWidth <= 980 &&
        link.parentElement.classList.contains("nav-dropdown")
      ) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
        return;
      }

      nav.classList.remove("open");

    });
  });

  document.addEventListener("click", function(e){
    if (!nav.contains(e.target)) {
      nav.classList.remove("open");
    }
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector(".servicios-mobile-carousel");
  const prev = document.querySelector(".servicios-prev");
  const next = document.querySelector(".servicios-next");
  const dots = document.querySelectorAll(".servicios-carousel-dots button");

  if (!carousel || !prev || !next || !dots.length) return;

  const cards = carousel.querySelectorAll("article");

  let currentIndex = 0;

  function goToCard(index){

    if (!cards[index]) return;

    currentIndex = index;

    carousel.scrollTo({
      left: cards[index].offsetLeft - carousel.offsetLeft,
      behavior: "smooth"
    });

    dots.forEach(dot => dot.classList.remove("active"));

    if(dots[currentIndex]){
      dots[currentIndex].classList.add("active");
    }

  }

  prev.addEventListener("click", function(){

    if(currentIndex > 0){
      goToCard(currentIndex - 1);
    }

  });

  next.addEventListener("click", function(){

    if(currentIndex < cards.length - 1){
      goToCard(currentIndex + 1);
    }

  });

  dots.forEach((dot, index) => {

    dot.addEventListener("click", function(){

      goToCard(index);

    });

  });

});

document.addEventListener("DOMContentLoaded", function(){

    const carousel = document.querySelector(".equipo-mobile-carousel");

    if(!carousel) return;

    const cards = carousel.querySelectorAll(".equipo-prof-card");
    const prev = document.querySelector(".equipo-prev");
    const next = document.querySelector(".equipo-next");
    const dots = document.querySelectorAll(".equipo-carousel-dots button");

    let index = 0;

    function goToCard(i){

        if(i<0) i=0;
        if(i>=cards.length) i=cards.length-1;

        index=i;

        carousel.scrollTo({
            left:cards[index].offsetLeft,
            behavior:"smooth"
        });

        dots.forEach(dot=>dot.classList.remove("active"));

        if(dots[index]){
            dots[index].classList.add("active");
        }

    }

    prev.addEventListener("click",function(){
        goToCard(index-1);
    });

    next.addEventListener("click",function(){
        goToCard(index+1);
    });

    dots.forEach(function(dot,i){
        dot.addEventListener("click",function(){
            goToCard(i);
        });
    });

    carousel.addEventListener("scroll",function(){

        let nearest=0;
        let distance=Infinity;

        cards.forEach(function(card,i){

            const d=Math.abs(carousel.scrollLeft-card.offsetLeft);

            if(d<distance){
                distance=d;
                nearest=i;
            }

        });

        index=nearest;

        dots.forEach(dot=>dot.classList.remove("active"));

        if(dots[index]){
            dots[index].classList.add("active");
        }

    });

});


document.addEventListener("DOMContentLoaded",function(){

    const carousel=document.querySelector(".confianza-mobile-carousel");

    if(!carousel) return;

    const cards=carousel.querySelectorAll(".card-feature");
    const prev=document.querySelector(".confianza-prev");
    const next=document.querySelector(".confianza-next");
    const dots=document.querySelectorAll(".confianza-carousel-dots button");

    let index=0;

    function go(i){

        if(i<0)i=0;
        if(i>=cards.length)i=cards.length-1;

        index=i;

        carousel.scrollTo({
            left:cards[index].offsetLeft,
            behavior:"smooth"
        });

        dots.forEach(d=>d.classList.remove("active"));

        if(dots[index]) dots[index].classList.add("active");

    }

    prev.onclick=()=>go(index-1);
    next.onclick=()=>go(index+1);

    dots.forEach((dot,i)=>{
        dot.onclick=()=>go(i);
    });

    carousel.addEventListener("scroll",()=>{

        let nearest=0;
        let dist=Infinity;

        cards.forEach((card,i)=>{

            let d=Math.abs(carousel.scrollLeft-card.offsetLeft);

            if(d<dist){
                dist=d;
                nearest=i;
            }

        });

        index=nearest;

        dots.forEach(d=>d.classList.remove("active"));

        if(dots[index]) dots[index].classList.add("active");

    });

});


