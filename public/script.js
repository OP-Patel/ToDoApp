$("input[type='checkbox']").on( "change", function() {
    if ($("label[for='" + this.id + "']").hasClass("completed")){
        $("label[for='" + this.id + "']").removeClass("completed");
    }else{
        $("label[for='" + this.id + "']").addClass("completed");
    }
  } );
