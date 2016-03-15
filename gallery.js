//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');

$overlay.append($image);
//Add overlay
$("body").append($overlay);
  //An image
  //A caption

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $overlay.show()
  $image.attr('src',imageLocation);
  //Show the overlay.
  //Update overlay with the image linked in the link
  //Get child's alt attribute and set caption


});

$overlay.click(function(){
	$(this).hide();
})

//When overlay is clicked
  //Hide the overlay