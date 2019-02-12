<?php 
  get_header();

  if(have_posts()) : 
    while(have_posts()) : the_post();
?>
<article class="post">
  <h2><a href=<?php echo the_permalink(); ?>><?php echo the_title(); ?></a></h2>
  <?php the_post_thumbnail('banner-image'); ?>
  <p class="post-info"><?php echo the_time('F jS, Y g:i a'); ?> | by <?php the_author_posts_link(); ?> | Posted in <?php  the_category(', ');
?>
  </p>
  <p><?php echo the_content(); ?></p>
</article>
  <?php
      endwhile;
    else : 
      echo '<p>No hay posts para mostrar</p>';
    endif;
  ?>


<?php get_footer(); ?>

