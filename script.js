window.onload = function () {
  var x = window.matchMedia("(max-width: 1020px)")
  if (x.matches != true) {
    //  new ScrollyVideo({
    // scrollyVideoContainer: "scrolly-video",
    //    src: "https://s3-us-west-2.amazonaws.com/catsy.803/4k1.mp4",
    //   //useWebCodecs:false,
    //  });

    const canvas = document.getElementById("lightpass");
    const wrap_shadow = document.getElementsByClassName("wrap-shadow");
    const txt = document.querySelectorAll(".hidden");
    const context = canvas.getContext("2d");
    const frameCount = 144;  //number of images
    const mathOpacity1 = 10

    const currentFrame = index => (
      `https://s3-us-west-2.amazonaws.com/catsy.803/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    )
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };
    const img = new Image()
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.onload = function () {
      context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } 
        else {
          entry.target.classList.remove('show');
        }
      });
    });
    txt.forEach((el) => observer.observe(el))


    window.addEventListener('scroll', () => {
      if (getPosition() >= 0 && getPosition() <= 1) {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(getPosition() * frameCount)
        );
        requestAnimationFrame(() => updateImage(frameIndex + 1))
        wrap_shadow[0].style.opacity = getPosition()
        if (getPosition() * mathOpacity1 <= 2.2) {
          wrap_shadow[0].style.opacity = getPosition() * mathOpacity1
        } else {
          wrap_shadow[0].style.opacity = 1 - (getPosition() * 4)
        }
      }
    });
    preloadImages()

    // getCanvas()
  }
  function getPosition() {
    el = document.querySelector("#lightpass");
    const containerBoundingClientRect = el.parentNode.getBoundingClientRect()
    const scrollPercent = (-containerBoundingClientRect.top) / (containerBoundingClientRect.height - window.innerHeight);
    // console.log('(-containerBoundingClientRect.top) : ' + (-containerBoundingClientRect.top));
    // console.log('containerBoundingClientRect.height : ' + containerBoundingClientRect.height);
    // console.log('window.innerHeight : ' + window.innerHeight);
    // console.log('scrollPercent : ' + scrollPercent);
    // console.log(scrollPercent);
    return scrollPercent
  }
}
