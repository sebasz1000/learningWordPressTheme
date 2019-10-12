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
    <script>
    document.querySelector('#quick-add-button').addEventListener('click', function(){
      var newPostData = {
      title: document.querySelector('.admin-quick-add [name="title"]').value,
      content: document.querySelector('.admin-quick-add [name="content"]').value,
      status: 'publish'
      }
      var p = utils.saveRequest(newPostData);
      p.then(function(msj){ 
        document.querySelector('#request-msj').innerHTML = msj
        document.querySelector('.admin-quick-add [name="title"]').value = '';
        document.querySelector('.admin-quick-add [name="content"]').value = '';
      }).catch(function(msj){
        document.querySelector('#request-msj').innerHTML = msj
      })
    });
    </script>
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
       <section id="portfolio-posts-container">
       <script>
       document.querySelector('#load-post-btn').addEventListener('click', 
            function(){
              var p = utils.loadRequest('5');
              p.then(function(data){
                var htmlBlock = "";
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                  htmlBlock += "<h2>" + data[i].title.rendered + "</h2>";
                  htmlBlock += "<p>" + data[i].content.rendered;
                  +"</p>";
                }
                document.querySelector('#portfolio-posts-container').innerHTML =  htmlBlock;
              }).catch(function(msj){
                document.querySelector('.callback-msj').innerHTML = msj
                console.log(msj);
              })
            }//displayHtml
       );    
       </script>
       <span class="callback-msj"></span>
       </section>
     </div>
<?php
    else : 
      echo '<p>No hay posts para mostrar</p>';
    endif;
?>
</div>
<?php get_footer(); ?>
