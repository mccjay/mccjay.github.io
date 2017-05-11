$(function(){
	setTimeout(function(){
        $("#name").typed({
            strings: ["jay mccarthy"],
            typeSpeed: 50, 
            backDelay: 750, 
            loop: false, 
            loopCount: false, 
            callback: function(){ }
        });
    }, 0);
    setTimeout(function(){
        $("#subtitle_one").typed({
            strings: ["designer &amp; developer"],
            typeSpeed: 100, 
            backDelay: 750, 
            loop: false, 
            loopCount: false, 
            callback: function(){ }
        });
    }, 1500);

    
});

