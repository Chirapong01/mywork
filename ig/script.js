window.onload = function () {
    

        // document.querySelector("#v0").addEventListener('ended',function(e) {
        // console.log(e);
        // console.log('ended video');
        vdo = document.querySelectorAll(".swiper-slide"); 
        vdo.forEach((el) => el.classList.add('swiper-slide'))
        console.log(vdo);
    // var frameNumber = 0, // start video at frame 0
    //     // lower numbers = faster playback
    //     playbackConst_v0 = 1000;
    //     // playbackConst_v1 = 500;
    //     // get page height from video duration
    //     setHeight_v0 = document.getElementById("set-height-v0");
    //     // setHeight_v1 = document.getElementById("set-height-v1");
    //     // select video element         
    //     vid0 = document.getElementById('v0');
    //     // vid1 = document.getElementById('v1');
    //     vid0.pause();
    //     // vid1.pause();
    // // dynamically set the page height according to video length
    // vid0.addEventListener('loadedmetadata', function () {
    //     setHeight_v0.style.height = Math.floor(vid0.duration) * playbackConst_v0 + "px";

    // });
    // // vid1.addEventListener('loadedmetadata', function () {
    // //     setHeight_v1.style.height = Math.floor(vid1.duration) * playbackConst_v1 + "px";

    // });

}
// setInterval(function(){
//     vid0.currentTime = window.pageYOffset/1000;
//     // vid1.currentTime = window.pageYOffset/500;
// }, 60);

// window.onscroll = function(){
//     vid.pause();
// };

