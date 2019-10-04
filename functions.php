<?php 


 function siteResources(){
   wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css', false, '1.0', 'all');
   wp_enqueue_script('main_js', get_template_directory_uri() . '/js/main.js',NULL, 1.0, true);
   wp_enqueue_script('main_js', get_template_directory_uri() . '/js/vendors.js',NULL, 1.0, true);
   //wp_enqueue_script('main_js', get_template_directory_uri() . '/js/main.js',NULL, 1.0, true);
 }

 add_action('wp_enqueue_scripts', 'siteResources');


//getting top ancestor of a page for child pages menu
function get_top_ancestor_id(){
  global $post;
  if($post->post_parent){
    $ancestors = array_reverse(get_post_ancestors($post->ID));
    /*$ancestors = get_post_ancestors($post->ID);
    return $ancestors[count($ancestors) - 1];*/
    return $ancestors[0];
  }
  
  return $post->ID;
}

function has_children(){
  global $post;
  $pages = get_pages( array(
    'child_of' => $post->ID
  ));
  return count($pages);
}

function new_excerpt_more(){
  return '';
}

function new_excerpt_length(){
  return 25;
}

add_filter('excerpt_more','new_excerpt_more');
add_filter('excerpt_length', 'new_excerpt_length');

//Theme setup
function theme_setup(){
  
  //Adds thumbnail support
  add_theme_support('post-thumbnails');
  //registers custom nav menus
  register_nav_menus(array(
    'primary' => __('Primary Menu'),
    'footer' => __('Footer Menu')
  ));
   //adds post format support
  add_theme_support('post-formats', array('aside', 'gallery', 'link'));
  add_image_size('small-thumbnail', 220, 160, true);
  add_image_size('banner-image', 920, 210, array('left', 'center'));
}

add_action('after_setup_theme', 'theme_setup');
