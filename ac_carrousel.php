<?php 
/**
*package Carrousel
*version 1.0.0
*/
/*
Plugin Name: AC_carrousel
Version: 1.0.0
Author: Anna Sonnova
Author URI: https://github.com/AnnaSonnova/31w-extension.git
*/



function annacc_enqueue(){
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style("annacc_style_carrousel",
                       plugin_dir_url(__FILE__) . "style.css",
                       array(),
                       $version_css,
                       false);

    wp_enqueue_script("annacc_js_carrousel",
                       plugin_dir_url(__FILE__) . "js/carrousel.js",
                       array(),
                       $version_js,
                       true);
}
add_action('wp_enqueue_scripts','annacc_enqueue' );



function genere_boite(){
    $contenu = "
    <button class='btn_modale'>boîte modale</button>
    <div class='carrousel'>
        <button class='btn_fermer'>X</button>
        <figure class='carrousel__figure'></figure>
        <form class='carrousel__form'></form>
        <button class='btn_fleche_gauche'> < </button>
        <button class='btn_fleche_droit'> > </button>
    </div>";
    return $contenu;
}

add_shortcode('ac_carrousel', 'genere_boite');