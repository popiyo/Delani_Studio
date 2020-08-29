
//array of the portfolio project names

const = [

  msg-workp1:"null project",
  msg-workp2:"mighty ontario",
  msg-workp3:"hexagon works",
  msg-workp4:"jim carrey",
  msg-workp5:"good day",
  msg-workp6:"bio data",
  msg-workp7:"burned logos",
  msg-workp8:"giraffe manenoz",


]


function display_image_text (element) {
  alert(element.alt);
}



//make the initial what we do text dissapear
$(document).ready(function(){
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
  //display_image_text($(this);
});





});
