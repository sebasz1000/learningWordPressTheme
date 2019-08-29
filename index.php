<?php 
  get_header();
?>
<div class="posts-container">
<?php
  if(have_posts()) : 
    while(have_posts()) : the_post();
      get_template_part('content', get_post_format()); 
    endwhile;
?>
     <div class="load-post-btn-container">
       <button id="portfolio-posts-btn">Load more posts >></button>
       <section id="portfolio-posts-container"></section>
     </div>
<?php
    else : 
      echo '<p>No hay posts para mostrar</p>';
    endif;
?>
</div>
<?php get_footer(); ?>
