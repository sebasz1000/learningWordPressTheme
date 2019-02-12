<?php
/*
Template Name: Special Layout
*/
get_header();
if(have_posts()):
  while(have_posts()) : the_post();
?>
  <article class="post page">
    <h2><?php echo the_title(); ?></h2>
    <div class="info-box">
      <h4>Disclaimer Title</h4>
      <p>Duis bibendum sem sit amet faucibus commodo. Sed aliquam leo ac consequat congue. Etiam tempus imperdiet felis eget viverra. Nam diam enim, eleifend a dictum et, blandit vel urna.
</p>
    </div>
    <p><?php echo the_content(); ?></p>
  </article>
<?php 
  endwhile;
else:
  echo "<p>No hay post para mostrar</p>";
endif;

get_footer();
?>