(function(){
    console.log("carrousel");
    /*---les elements du carrousel----*/

    
    let elmCarrousel = document.querySelector(".carrousel");//contener principal pour carrousel
    //console.log(elmCarrousel);
    let elmBtnModale = document.querySelector(".btn_modal");//bouton temporaore pour ouvrir le carrousel
    let elmBtnFermer = document.querySelector(".btn_fermer");//bouton de fermeture du carrousel
    let figure = document.querySelectorAll(".wp-block-image");
    let elmCarrousel__figure = document.querySelectorAll(".carrousel__figure");//fugure qui contiendra l'ensemble des image du carrousel
    let elmCarrousel__form = document.querySelectorAll(".carrousel__form");//le formulaire qui contiendra l'encemble des boutons radio

    /*-----les elements de la galerie---*/
    let elmGalerie = document.querySelectorAll(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie figure img");

    /*====etap1 parcourir les images de la galerie==========*/
    for (const elmImg of elmGalerieImg ){
        console.log(elmImg.getAttribute('src'));

        ajouter_img_carrousel(elmImg)
        //ajouter_radio_carrousel()
    }

    function ajouter_img_carrousel(elmImg){

        //elmImg represante une image de la carrousel
        let elmCarrousel__figure__img = document.createElement('img');
        elmCarrousel__figure__img.setAttribute('src', elmImg.getAttribute('src'));//elmImg represante une image de la carrousel
        elmCarrousel__figure__img.classList.add('carrousel__figure__img')
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img)
    }


    // let img = document.querySelectorAll("img");
    // let nouedImg = elmCarrousel.querySelector(".noeud_img");
    
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