(function(){
    console.log("carrousel");
    let elmBtnModale = document.querySelector(".btn_modal");
    let elmCarrousel = document.querySelector(".carrousel");
    //console.log(elmCarrousel);
    let elmBtnFermer = document.querySelector(".btn_fermer");
    let figure = document.querySelectorAll(".wp-block-image");
    let img = document.querySelectorAll("img");
    let nouedImg = elmCarrousel.querySelector(".noeud_img");
    
    //console.log(nouedImg );
    elmBtnModale.addEventListener('mousedown', function(){
        //console.log('bouton boite modal');
        elmCarrousel.classList.add("carrousel--ouvrir");

        
    })
    elmBtnFermer.addEventListener('mousedown', function(){
        console.log('bouton boite fermer');
        elmCarrousel.classList.remove("carrousel--ouvrir");
        
    })
})();