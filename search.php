<?php 
  get_header();
  if(have_posts()) : ?>
  <h2>Search Results: <?php the_search_query(); ?></h2>
  <?php while(have_posts()) : the_post();
          get_template_part('content');
        endwhile;
        else : 
          echo '<p>No hay posts para mostrar</p>';
        endif;
  get_footer(); ?>

