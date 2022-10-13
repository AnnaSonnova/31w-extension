<?php 
/**
*package Carrousel
*version 1.0.0
*/
/*
Plugin Name: AC_carrousel
Version: 1.0.0
*/
function genere_boite(){
$contenu = "<div class= 'carrousel'>Carrousel</div>";
return $contenu;
}
add_shortcode('ac_carrousel', 'genere_boite');