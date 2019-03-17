$(document).ready(function(){
  $(window).scroll(function(){
    if($(document).scrollTop() > 30) {
      $('.navbar').css({
      padding: '.5rem 20%',
      transition: 'all .3s ease',
      borderBottom: '1px solid #ccc'      
    });
    } else {
      $('.navbar').css({
      padding: '3rem 20%',
      transition: 'all .3s ease',
      border: 'none'
    });
    }
    
  });
});