// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();

let btn = $(".toggle")

let playing = 0


btn.click(function (){
    if (playing === 0){
        $( ".toggle" ).toggle();
        playing = 1
        player.get(0).play()
    }
    else{
        $( ".toggle" ).toggle();
        playing = 0
        player.get(0).pause()
    }

    player.on('timeupdate', function() {
        let progress = (this.currentTime / this.duration) * 100;
        $('.progress__filled').css('width', progress + '%');
    });

    $('#volume').change(function() {
        player.prop('volume', this.value);
    });



})
