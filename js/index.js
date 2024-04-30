$(document).ready(function(){
    console.log("Your index.js file is loaded correctly");
    $('.btnResume').click(function(e) {
      e.preventDefault(); // Prevent the default button action
      // Start the download
      //window.location.href = 'assets/resume.pdf';
      window.open('assets/resume.pdf', '_blank');
  });
  // Select all anchor tags with hashes
  $('a[href*="#"]').on('click', function(e) {
    // Prevent default anchor click behavior
    e.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  var options = {
    strings: ['Hello, I’m Nischala.', 'I’m a UI/UX Designer.','I’m a Graphic Designer.','I’m a Web Developer', 'Welcome to My Portfolio.'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    showCursor:false
  };

  var typed = new Typed('.element', options);
  
});
