var wrapper = $("<div class='wrapper'>");
var button = $(".button");
var button02 = $("#lead-banner a");
var wrapped = true;

button[0].onclick = function (){
    if(wrapped){
        $("section").unwrap();
        wrapped = false;
    }else{
        $("section").wrapAll(wrapper);
        wrapped = true;
    }
}

button02[0].onclick = function (){
    $("#points-of-sale").toggleClass("open");
    return false;
}

