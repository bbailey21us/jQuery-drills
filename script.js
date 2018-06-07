
$(document).ready(function(){
    $("form").submit(function(){
        let msg=$("#text").val();
        if (msg.length===0){
            $("#btnSubmit").prop("disabled",true)
        }
            else{
                alert(msg);
                
            }
        
    })

 
    $("<ul></ul>").appendTo('body');
  
$('form').submit(function(e){
    e.preventDefault();
    let myMsg= $("#text").val();
    $('ul').append("<li>"+myMsg+"</li>")
    
})
    $("ul").on ("click","li",function(){
        $(this).css("color",rgb())
    })

    $("ul").on ("dblclick","li",function(){
        $(this).remove();
    })

})

function rgb(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let random ="rgb("+r+", "+g+", "+b+")";
    return random;

}




    
