$(document).ready(function(){

var wrapper = $("<div class='wrapper'>");
var button = $(".button");
var button02 = $("#lead-banner a");
var wrapped = true;

var myPOS = $("#points-of-sale li")


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


$("#lead-banner").dblclick(function(){
    alert("You DB Fool");
});

myPOS.on('click', function(){
    myPOS.css({"background":"white"});
    $(this).css({"background":"blue"});
    
});

$("*").on("click", function(e){
    console.log(e.type);
    console.log(e.target);
    e.stopPropagation();
});

$("img[alt=map]").on("click", function(){
    $("section > h2").toggle(2000);
});

$(".slide-button-up").on("click", function(){
    $("#lead-banner").slideUp(1000, function(){
        alert("YEAH");
    });
});

$(".slide-button-down").on("click", function(){
    $("#lead-banner").slideDown();
});

/////////////////
// Quotes Rotation
var allQuotes = $("blockquote");
var currentQuote = 0;

function changeQuote(){
    $(allQuotes[currentQuote]).fadeOut(200, function(){
        if(currentQuote == allQuotes.length-1)
            currentQuote = 0;
        else
            currentQuote++;
        $(allQuotes[currentQuote]).fadeIn(200);
    });
}

var quoteTimer = setInterval(changeQuote, 3000);



//////////////////
// Slide Animation
var items = $("#points-of-sale li");

items.on("click", function(){
    alert("BO");
    $(this).find("p").slideToggle(500);
});





});


