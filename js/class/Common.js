function required() {
 if($('.clsIsValidate').html()=="1")
 {
 $('.clsIsValidate').html("0");
    var counter = 0;
     $('.Validation').remove();
     $('.clsRequired').each(function() {

         if (this.tagName == "INPUT") {
             if (this.type == "text") {
                 if ($(this).is(':visible')) {
                     if ($(this).val() == '') {

                         $(this).addClass("required");
                         // $(this).parent().find('.clsValidation-message').show('slide',{direction:'TOP'},1000);

                         $("<div class='Validation Validation-message none'>This field is Required !</div>").insertAfter($(this));



                         counter += 1;
                     } else {
                         $(this).removeClass("required");
                     }
                 }

             } else if (this.type == "radio") {


             } else if (this.type == "checkbox") {
                 if ($(this).is(':visible')) {
                     if ($(this).attr("checked") == false) {
                         $(this).addClass("required");
                         $("<div class='Validation Validation-message none'>This field is Required !</div>").insertAfter($(this));
                         counter += 1;

                     } else {
                     $(this).removeClass("required");
                     
                     }

                 }



             }
         } else if (this.tagName == "SELECT") {
             if ($(this).is(':visible')) {
                 var value = document.getElementById($(this).attr("id")).value;
                 if (value == "0" || value == "-1") {
                     $(this).addClass("required");
                     $("<div class='Validation Validation-message none'>This field is Required !</div>").insertAfter($(this));
                     counter += 1;
                 } else { $(this).removeClass("required"); }
             }

         }
         //       else if (this.tagName == "DIV") {
         //      
         //            if ($(this).is(':visible')) {
         //            
         //             var value =  $(this).attr("SelectedValue");
         //           
         //                if (value == "0" && value !='') {
         //             $(this).addClass("required");
         //            counter += 1;
         //            }else {$(this).removeClass("required");} 
         //            }
         //            }
         //             

     });
  $('.Validation').show('slide',{direction:'right'},1000);
      setTimeout(function() {
       $('.Validation').hide('slide',{direction:'left'},3000,function(){$('.clsIsValidate').html("1");
       $('.Validation').remove();
       $('.ui-effects-wrapper').remove();
       
       });
      }, 3000 );
    if (counter > 0) { return false; }
    else { return true; }

}else{return false;}
}


