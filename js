window.addEventListener("scroll", function() {
    const val = document.querySelector("#head__container");

    if(window.scrollY > 100){
        val.classList.add("scrolled");
    } else val.classList.remove("scrolled");
});
  
