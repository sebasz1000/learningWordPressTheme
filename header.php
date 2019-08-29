<!DOCTYPE html>
<html <?php language_attributes() ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" >
    <meta name="viewport" content="width=device-width">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
   <div class="container">
     <header class="site-header">
        <div class="container">
          <a id="home-page-btn" href="<?php echo home_url(); ?>" ><h1><?php bloginfo(name); ?></h1></a>
          <!--<h5><?php //bloginfo(description); ?></h5> -->
          
          <nav class="site-nav">
            <?php 
            $args = array(
            'theme_location' => 'primary'
            );
            wp_nav_menu($args);
            ?>
          </nav>
        </div>
      </header>
      <div class="header-search">
            <?php get_search_form(); ?>
          </div>
     

  
  
