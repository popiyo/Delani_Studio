
//array of the portfolio project names

const porfolioNames = {
  workp1:"null project",
  workp2:"mighty ontario",
  workp3:"hexagon works",
  workp4:"jim carrey",
  workp5:"good day",
  workp6:"bio data",
  workp7:"burned logos",
  workp8:"giraffe manenoz"
};


function display_image_text(element) {

  //get the correct name of the element we are unhiding to show the text of the portfolio
  var elementToUnhide = "msg-"+element.id;
  $("div#"+elementToUnhide).removeClass("hide");

  if (elementToUnhide === "msg-workp2" )
    $("div#"+elementToUnhide).addClass("text-danger");
  else if (elementToUnhide === "msg-workp5" )
    $("div#"+elementToUnhide).addClass("text-success");
  else
    $("div#"+elementToUnhide).addClass("text-light");


  $("div#"+elementToUnhide).addClass("font-weight-bold text-uppercase thick_border");
  $("div#"+elementToUnhide).append("<p>" + porfolioNames[element.id] + "</p>");

  //$("div#"+elementToUnhide).append(porfolioNames[element.id]);


}




//make the initial what we do text dissapear
$(document).ready(function(){

  //respond to submit_client_info
  $("form").click(function(event){

    var clientName = $("#contact_name").val();
    alert("Thank you " + clientName + " for reaching out to us. We shall get back to you within 2 working days.");
    event.preventDefault();
  });




  //default the status of the What we do section
  $("div#wwd_Design").addClass("hide text-center");
  $("div#wwd_Development").addClass("hide text-center");
  $("div#wwd_Product_Management").addClass("hide text-center");
  $(".card-body").addClass("text-center");
  $(".h_wwd").addClass("font-weight-bold");


  //functionality to toggle the Design textarea
  $("img#design_image").click(function(){
    $("div#wwd_Design").toggle();
    $("img#design_image").toggle();
  });

  $("div#wwd_Design").click(function(){
    $("div#wwd_Design").toggle();
    $("img#design_image").toggle();
  });


  //functionality to toggle the Development textarea
  $("img#dev_image").click(function(){
    $("div#wwd_Development").toggle();
    $("img#dev_image").toggle();
  });

  $("div#wwd_Development").click(function(){
    $("div#wwd_Development").toggle();
    $("img#dev_image").toggle();
  });


  //functionality to toggle the Product Management textarea
  $("img#prod_man_img").click(function(){
    $("div#wwd_Product_Management").toggle();
    $("img#prod_man_img").toggle();
  });

  $("div#wwd_Product_Management").click(function(){
    $("div#wwd_Product_Management").toggle();
    $("img#prod_man_img").toggle();
  });


//hover on project portfolios

$(".portfolio-image").mouseover(function(){
 display_image_text(this);

});

//when mouse leaves any portfolio, we reset the elements
$(".portfolio-text").mouseleave(function(){
  $(this).addClass("hide");
  $(this).empty();


});





});
