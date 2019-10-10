<?php 
  get_header();
?>
<div class="posts-container">
<?php
 if(current_user_can('administrator')): ?>
  <div class="admin-quick-add">
    <h3>Quick add post</h3>
    <input type="text" name="title" placeholder="Title">
    <textarea name="content" placeholder="Content"></textarea>
    <button id="quick-add-button">Create Post</button>
    <div id="request-msj"></div>
  </div>
<?php endif; ?>
<?php
  if(have_posts()) : 
    while(have_posts()) : the_post();
      get_template_part('content', get_post_format()); 
    endwhile;
?>
     <div class="load-post-btn-container">
       <button id="load-post-btn">Load more posts >></button>
       <section id="portfolio-posts-container"></section>
     </div>
<?php
    else : 
      echo '<p>No hay posts para mostrar</p>';
    endif;
?>
</div>
<?php get_footer(); ?>
