
$(document).ready(function(){
    $("#btnSubmit").click(function(){
        let msg=$("#text").val();
        if (msg.length===0){
            $("#btnSubmit").prop("disabled",true);
        }else{
            
            alert(msg);
        }
    })
})

$("#btnSubmit").click(function(){

alert(msg);
    
})