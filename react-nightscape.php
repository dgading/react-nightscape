<?php
/*
Plugin Name: React Nightscape
Plugin URI: https://github.com
Description: Adds Fireflies
Author: Daniel Gading
Author URI: https://danielgading.com
Version: 1.0
*/

include( plugin_dir_path( __FILE__ ) . 'includes/admin-menu.php');

function add_roots() {
  $nightscape_options = get_option('react_nightscape_options');
  echo '<div id="react-nightscape-roots">Roots Go Here</div>';
  wp_register_script( 'react-nightscape', plugins_url( '/js/main.js', __FILE__ ), $deps = array(), $ver = false, $in_footer = true );
  wp_enqueue_script( 'react-nightscape' );
  wp_localize_script( 'react-nightscape', 'reactNightscapeOptions', $nightscape_options );
}

add_action( 'wp_footer', 'add_roots' );

?>
