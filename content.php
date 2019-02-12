<article class="post <?php if(has_post_thumbnail()) echo 'has-thumbnail'; ?>">
  <h2><a href="<?php echo the_permalink(); ?>"><?php echo the_title(); ?></a></h2>
  <p class="post-info"><?php echo the_time('F jS, Y g:i a'); ?> | by <?php the_author_posts_link(); ?> | Posted in <?php  the_category(', '); ?> 
  </p>
  <div class="post-thumbnail"><a href="<?php the_permalink(); ?>"><?php echo the_post_thumbnail('small-thumbnail'); ?></a>
   </div>
  
   <p>
    <?php if(is_search() OR is_archive()){
      echo get_the_excerpt();
    }else{
      if($post->post_excerpt){ 
        echo get_the_excerpt(); ?>
        <a href="<?php echo the_permalink(); ?>">Continue Reading &raquo; </a>
      <?php }else{ echo the_content(); }} ?>
  </p>
</article>


    <!--/*$categories = get_the_category();
    $separator = ", ";
    $output = "";
    if($categories){
      foreach($categories as $category){
        $output .=  '<a href="'. get_category_link($category->term_id) .'">' . $category->cat_name .'</a>'. $separator;
      }
      echo trim($output, $separator);
    }
  */-->