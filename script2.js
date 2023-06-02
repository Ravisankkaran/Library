$(document).ready(function(){
  
    //staff data
    var data = {1:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                2:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                3:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                4:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                5:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                6:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                7:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                8:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                9:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                10:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                11:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                12:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                13:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                14:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
                15:{id:"1",Title:"To Kill a Mockingbird",Author:"Harper Lee"},
}
    
    var row = "";
    //write data
    $.each(data,function(k,v){
      row += "<tr><td class='name'>"+v.id;
      row += "</td><td>";
      row += v.Title;
      row += "</td><td>";
      row += "£"+v.Author;
      row += "</td></tr>";
    });
    //display data
   $('.tbl tbody').html(row);
    
    //demo scroll
    setTimeout(function(){searchScroll("ja");},900);
    
  });
    
   
  //Float header funk
      window.onscroll = function(){ 
          if($(document).scrollTop() > $('.tbl').offset().top){
              var left = $('.tbl').offset().left;
              $('#divTable').css({'left':left});
              $('#divTable').html("<table class='tbl-float'><tr>"+$('.head').html()+"</tr></table>").show();   
            
            $('.tbl-float').css('border','1px solid #ccc');        
          }else if($(document).scrollTop()<$('.tbl').offset().top){ 
              $('#divTable').html("").hide();
          }
      };
  
  
  //search input
  $('#txtSearch').keyup(function(){
    var val = $.trim($(this).val());
    searchScroll(val);
  });
  
  $(window).resize(function(){
  var left = $('.tbl').offset().left;
              $('#divTable').css({'left':left});
  });
  
  
  
  //Finds matching values in table & scrolls to the match
      function searchScroll(val,element){
          //default search element is .name
          element = element || '.name',
           val = val.toLowerCase();
    
          //check each search element
          $(element).each(function(){
              var cellText = $.trim($(this).text().toLowerCase());
           
              //matches the same amout of letters 
              if(val.length > 1 && cellText.substr(0,val.length) == val){
                
                  var top = $(this).offset().top - 50;
                  $("html, body").animate({scrollTop: top}, {easing: "swing", duration: 200});
                  return false;
              }
          });
      }