

function videoScroll() {
    let scrollvideo = document.getElementById("scrolly-video");
    let watch_dollhouse = document.getElementById("watch_dollhouse");
    let positionv1 = getPosition("#vid-one")
    let positionv2 = getPosition(".video-banner")
    // console.log(positionv1);
    // console.log(positionv2);

    if ( document.querySelectorAll('#vid1').length > 0) {
        var windowHeight = window.innerHeight,
            videoEl = document.querySelectorAll('#vid1');
        for (var i = 0; i < videoEl.length; i++) {
    
          var thisVideoEl = videoEl[i],
              videoHeight = thisVideoEl.clientHeight,
              videoClientRect = thisVideoEl.getBoundingClientRect().top;
    
          if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
            thisVideoEl.play();
          } else {
            thisVideoEl.pause();
          }
    
        }
      }
   
}

// const containerBoundingClientRect =  scrollvideo.parentNode.getBoundingClientRect()
// const scrollPercent = (-containerBoundingClientRect.top)
// / (containerBoundingClientRect.height - window.innerHeight);
// if(scrollPercent > 1){
//     console.log(scrollPercent);
// }



function getPosition(id) {
    el = document.querySelector(id);
    const containerBoundingClientRect = el.parentNode.getBoundingClientRect()
    const scrollPercent = (-containerBoundingClientRect.top) / (containerBoundingClientRect.height - window.innerHeight);
    // console.log('(-containerBoundingClientRect.top) : ' + (-containerBoundingClientRect.top));
    // console.log('containerBoundingClientRect.height : ' + containerBoundingClientRect.height);
    // console.log('window.innerHeight : ' + window.innerHeight);
    console.log('scrollPercent : ' + scrollPercent);
    return scrollPercent
}

function getCanvas() {
    vid = document.getElementById("bannerVid");
    loader = document.getElementsByClassName('loader')
    if (vid.readyState == 4) {
        document.getElementsByTagName('body')[0].style.overflow = "scroll";
        document.getElementsByTagName('body')[0].style.backgroundColor = "#00000000";
        loader[0].style.display = "none";
    } else {
        setTimeout(function () {
            document.getElementsByTagName('body')[0].style.overflow = "hidden";
            document.getElementsByTagName('body')[0].style.backgroundColor = " #0000007b";
            loader[0].style.display = "block";
            getCanvas()
        }, 100);
    }

}


window.onload = function () {

    //     var x = window.matchMedia("(max-width: 700px)")
    // if (x.matches) { // If media query matches
    //     console.log(x.matches);
    //   } else {
    //    document.body.style.backgroundColor = "pink";
    //   }
    // getCanvas()

    window.addEventListener('scroll', videoScroll);
    var x = window.matchMedia("(max-width: 1020px)")
    if (x.matches != true) {
        scrollvideo = new ScrollyVideo({
            scrollyVideoContainer: "scrolly-video",
            // src: "https://cdn.shopify.com/videos/c/o/v/3493692c55e741e6872a5d99a22bef2d.mp4",
            // debug:true,
            useWebCodecs: false,
        });
        console.log(scrollvideo);
        const containerBoundingClientRect = scrollvideo.container.parentNode.getBoundingClientRect()
        const scrollPercent = (-containerBoundingClientRect.top)
            // eslint-disable-next-line no-undef
            / (containerBoundingClientRect.height - window.innerHeight);
        // console.log(scrollPercent);



    }



}

function showvideo() {
    let show_vdo = document.querySelector('#show_vdo')
    open = !open
    if (open == false) {
        document.body.style.overflow = 'hidden';
        console.log(show_vdo.style);
        show_vdo.style.display = 'block';
    } else {
        document.body.style.overflow = 'scroll';
        show_vdo.style.display = 'none';
    }
    console.log('hidden :' + open);
}

