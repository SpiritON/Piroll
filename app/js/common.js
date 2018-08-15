
/* -------------------------------------------------------------------------
   begin Video Youtube
 * ------------------------------------------------------------------------- */

// function onYouTubePlayerAPIReady() {
//   var playerYoutube;
  
//   playerYoutube = new YT.Player("video-youtube__content", {
//     videoId: "0K-g84sK6R0",
//     playerVars: {
//          'controls': 1,
//          'showinfo': 0,
//          'autohide': 0,
//          'overlay': 0
//     },
//     events: {
//       onReady: onYouTubePlayerReady
//     }
//   });
// }

// function onYouTubePlayerReady(event) {
//   // https://developers.google.com/youtube/iframe_api_reference#Events
//   var targetYoutubeVideo = event.target;
//   var videoDomElem = document.getElementById(
//     event.target.getIframe().getAttribute("id")
//   );
//   var newPlayBtn = videoDomElem.nextElementSibling;

//   newPlayBtn.addEventListener("click", function(event) {
//     targetYoutubeVideo.playVideo();
//     this.classList.add('hidden');
//     videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
//     videoDomElem.parentNode.classList.remove('video-youtube_overlay');
//   });
// }

// var tag = document.createElement("script");

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* -------------------------------------------------------------------------
   end Video Youtube
 * ------------------------------------------------------------------------- */


$(document).ready(function(){




      $(".owl-carousel").owlCarousel({

  loop: true,
    margin: 40,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    dotsEach: 1
    // responsiveClass:true,
    // responsive:{
    //     320:{
    //         items:1
    //     },
    //     769:{
    //         items:2
    //     },
    //     1170:{
    //         items:3
    //     }


    // }



        
      
    });


});
