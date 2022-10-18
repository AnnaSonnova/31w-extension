(function(){
    console.log("carrousel");
/*---initialisation des variable---*/
let index =0;
let dernierIndex = -1;



    /*---les elements du carrousel----*/

    
    //let elmCarrousel = document.querySelector(".carrousel");//contener principal pour carrousel
    let elmCarrousel = document.querySelector(".carrousel");
    //console.log(elmCarrousel);
    let elmBtnModale = document.querySelector(".btn_modal");//bouton temporaore pour ouvrir le carrousel
    let elmBtnFermer = document.querySelector(".btn_fermer");//bouton de fermeture du carrousel

    

    let elmCarrousel__figure = document.querySelector(".carrousel__figure");//fugure qui contiendra l'ensemble des image du carrousel
    
    let elmCarrousel__form = document.querySelector(".carrousel__form");//le formulaire qui contiendra l'ensemble des boutons radio
  
    /* ---- Les éléments de la galerie ---*/
    /* Le conteneur principal de la galerie */
    let elmGalerie = document.querySelector(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie figure img");

    /*====etap1 parcourir les images de la galerie==========*/
    
    for (const elmImg of elmGalerieImg) {
        console.log(elmImg.getAttribute("src"));
    
        ajouter_img_carrousel(elmImg);
        ajouter_radio_carrousel();
      }

    /**
     * @param {*} elmImg une image de la galerie
     */  
    function ajouter_img_carrousel(elmImg) {
        // elmImg représente une image de la galerie */
        let elmCarrousel__figure__img = document.createElement("img");
        elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
        elmCarrousel__figure__img.classList.add("carrousel__figure__img");
        elmCarrousel__figure__img.dataset.index = index;
        elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
      }

    /**
     * Ajoute un radio-bouton dans la carrousel
     */
    function ajouter_radio_carrousel(){
        let elmCarrousel__form__radio = document.createElement("input")
        elmCarrousel__form__radio.setAttribute('name', 'carrousel__form__radio');
        elmCarrousel__form__radio.setAttribute('class', 'carrousel__form__radio');
        elmCarrousel__form__radio.setAttribute('type', 'radio');
        elmCarrousel__form__radio.dataset.index = index;
        index++
        elmCarrousel__form.appendChild(elmCarrousel__form__radio);
        /*--ecouteur sur radio pour afficher nouvell image----*/
        elmCarrousel__form__radio.addEventListener('mousedown', function(){
            console.log(this.dataset.index);
            //elmCarrousel__figure.children[this.dataset.dernierIndex].classList.add('carrousel__figure__img--activer')
            elmCarrousel__figure.children[this.dataset.index].classList.add('carrousel__figure__img--activer')

        })


    }  

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