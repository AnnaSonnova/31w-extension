(function(){
    console.log("carrousel");
    let elmBtnModale = document.querySelector(".btn_modal");
    let elmCarrousel = document.querySelector(".carrousel");
    let elmBtnFermer = document.querySelector(".btn_fermer");
    elmBtnModale.addEventListener('mousedown', function(){
        console.log('bouton boite modal');
        elmCarrousel.classList.add("carrousel--ouvrir");

    })
    elmBtnFermer.addEventListener('mousedown', function(){
        console.log('bouton boite fermer');
        elmCarrousel.classList.remove("carrousel--ouvrir");
        
    })
})();