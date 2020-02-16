window.addEventListener('click', function(event) {
    var element = event.target;
    
    if(element.classList.contains('playButton')) {
        var audio = element.querySelector('audio');
    
        
        if (audio) {
            if(element.classList.contains('playing')) {
                audio.pause();
                element.classList.remove('playing');
                
                return;
            }
            
            element.classList.add('playing');
            audio.play(); 
        }
    }
});

//Could not figure out how to make the loops play in time together, so made one loop of drums and bass and then added other sounds that don't need to be triggered in time to sound good together.  The applause and vocal clip add some fun and should appeal to the target audience.