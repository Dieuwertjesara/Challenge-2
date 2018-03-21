
myAnimation();

function myAnimation() {
      var currentTime =  new Date().getHours();
      var tl = new TimelineMax();
      var sun = document.getElementById('sun');
      var clouds = document.getElementsByClassName('clouds');
      //var currentDuration = myAnimation.duration(5);
      if (currentTime >= 0 &&currentTime < 6) {
        tl.to(stars, 10,{opacity:1,},3);
        tl.to(nightsky, 0,
                {
                opacity:1,
                }
                ,0);
}
      if (currentTime >= 6 &&currentTime < 10) {
      tl.fromTo(sun, 10,
        {
        marginLeft: '-35vw',
        marginBottom: '-35vw',
        width: '80vw',
        height:'80vw',
        },
        {
        marginLeft:'75vw',
        marginBottom:'100vw',
        width:'30vw',
        height:'30vw',}
        ,1);

        tl.fromTo(stars, 2,
          {
          opacity:1,
          },
          {
          opacity:0,}
          ,1);

        tl.fromTo(nightsky, 5,
        {
        opacity:1,
        },
        {
        opacity:0,}
        ,2);

        tl.fromTo(backgroundcolor, 10,
          {
          opacity:0,
          },
          {
          opacity:1,}
          ,3);

          tl.to(clouds, 0,{opacity:0},0);

}
      if (currentTime >= 10 &&currentTime < 16) {
      tl.fromTo(sun, 2,
        {
          marginLeft:'75vw',
          marginBottom:'100vw',
          width:'30vw',
          height:'30vw',
        },
        {
        marginLeft:'73vw',
        marginBottom:'99vw',
        width:'33vw',
        height:'33vw',
        yoyo:true,
        repeat:-1,}
        ,1);

        tl.to(backgroundcolor, 0,
          {
          opacity:1,
          }
          ,0);

      tl.to(cloud1, 9,
        {
        marginLeft: '200vw',
        repeat:-1,
        ease: Power0.easeNone,
        }
        ,1);
      tl.to(cloud2, 10,
          {
          marginLeft: '200vw',
          repeat:-1,
          ease: Power0.easeNone,
          }
          ,4);

      tl.to(cloud3, 9,
            {
            marginLeft: '200vw',
            repeat:-1,
            ease: Power0.easeNone,
            }
            ,7);

      tl.to(cloud4, 10,
              {
              marginLeft: '200vw',
              repeat:-1,
              ease: Power0.easeNone,
              }
              ,10);

      }
      if (currentTime >= 16 &&currentTime < 22) {
      tl.fromTo(sun, 10,
          {
          marginLeft:'75vw',
          marginBottom:'100vw',
          width:'30vw',
          height:'30vw',
          },
          {
          marginLeft: '-35vw',
          marginBottom: '-35vw',
          width: '80vw',
          height:'80vw',}
          ,1);

      tl.to(cloud1, 9,
        {
        marginLeft: '200vw',
        repeat:-1,
        ease: Power0.easeNone,
        }
        ,-10);
      tl.to(cloud2, 10,
          {
          marginLeft: '200vw',
          repeat:-1,
          ease: Power0.easeNone,
          }
          ,-14);

      tl.to(cloud3, 9,
            {
            marginLeft: '200vw',
            repeat:-1,
            ease: Power0.easeNone,
            }
            ,-17);

      tl.to(cloud4, 10,
              {
              marginLeft: '200vw',
              repeat:-1,
              ease: Power0.easeNone,
              }
              ,-20);
      tl.fromTo(clouds, 4,
              {
              opacity:1,
              },
              {
              opacity:0,
              }
            ,1);
      tl.fromTo(backgroundcolor, 10,
              {
                opacity:1,
              },
              {
                opacity:0,
              }
          ,1);
      tl.fromTo(nightsky, 10,
                  {
                  opacity: 0,
                  },
                  {
                  opacity: 1,
                  }
                  ,4);
}
      if (currentTime >= 22 &&currentTime < 24) {
        tl.to(nightsky, 0,
                {
                opacity:1,
                }
                ,0);

        tl.fromTo(stars, 20,
                {
                opacity:0,
                },
                {
                opacity:1,
                }
                ,3);
      }

}


//klok
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
