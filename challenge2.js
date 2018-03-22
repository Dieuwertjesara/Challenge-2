
myAnimation();

function myAnimation() {
      var currentTime = 6 //new Date().getHours();
      var tl = new TimelineMax();
      var sun = document.getElementById('sun');
      var clouds = document.getElementsByClassName('clouds');
      //var currentDuration = myAnimation.duration(5);
      if (currentTime >= 6 &&currentTime < 8) {
        tl.to(wakeup, 0,{
          opacity:1,
        });
      }
      if (currentTime >= 8 &&currentTime < 10) {
        tl.to(breakfast, 0,{
          opacity:1,
        });
      }
      if (currentTime >= 12 &&currentTime < 14) {
        tl.to(noon, 0,{
          opacity:1,
        });
      }
      if (currentTime >= 14 &&currentTime < 18) {
        tl.to(afternoon, 0,{
          opacity:1,
        });
      }

      if (currentTime >= 18 &&currentTime < 20) {
        tl.to(dinner, 0,{
          opacity:1,
        });
      }
      if (currentTime >= 20 &&currentTime < 22) {
        tl.to(evening, 0,{
          opacity:1,
        });
      }
      if (currentTime >= 22 &&currentTime < 24) {
        tl.to(night, 0,{
          opacity:1,
        });
      }

      if (currentTime >= 0 &&currentTime < 6) {
        tl.to(stars, 10,{opacity:1,},3);
        tl.to(nightsky, 0,
                {
                opacity:1,
                }
                ,0);
        tl.to(sun,0,{
          opacity:0,
        },0);
}

      if (currentTime >= 6 &&currentTime < 10) {
      tl.fromTo(sun, 10,
        {
        marginBottom:'-70vmin',
        marginLeft:'-45vmin',
        width: '90vmin',
        height:'90vmin',
        },
        {
          top:0,
          right: 0,
          marginLeft:'75vw',
          marginBottom:'100vw',
          width:'30vmin',
          height:'30vmin',}
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
          top:0,
          right: 0,
          marginLeft:'75vw',
          marginBottom:'100vw',
          width:'30vmin',
          height:'30vmin',
        },
        {
        top:0,
        right: 0,
        marginLeft:'73vw',
        marginBottom:'99vw',
        width:'33vmin',
        height:'33vmin',
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
      tl.fromTo(sun, 10,{
        top:0,
        right: 0,
        marginLeft:'75vw',
        marginBottom:'100vw',
        width:'30vmin',
        height:'30vmin',
        ease: Power1.easeOut,
      },{
          marginLeft:'-80vw',
          marginTop:'100vh',
          width: '90vmin',
          height:'90vmin',
          ease: Power1.easeIn,
        });

      tl.to(cloud1, 9,
        {
        marginLeft: '200vw',
        repeat:-1,
        ease: Power0.easeNone,
        }
        );
      tl.to(cloud2, 10,
          {
          marginLeft: '200vw',
          repeat:-1,
          ease: Power0.easeNone,
          }
          ,-14);

      tl.to(cloud3, 30,
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
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//refresh
refreshAt(6,0,0);
refreshAt(6,30,0);
refreshAt(7,0,0);
refreshAt(7,30,0);
refreshAt(8,0,0);
refreshAt(8,30,0);
refreshAt(9,0,0);
refreshAt(9,30,0);
refreshAt(10,0,0);
refreshAt(10,30,0);
refreshAt(11,0,0);
refreshAt(11,30,0);
refreshAt(12,0,0);
refreshAt(12,30,0);
refreshAt(13,0,0);
refreshAt(13,30,0);
refreshAt(14,0,0);
refreshAt(14,30,0);
refreshAt(15,0,0);
refreshAt(15,30,0);
refreshAt(16,0,0);
refreshAt(16,30,0);
refreshAt(17,0,0);
refreshAt(17,30,0);
refreshAt(18,0,0);
refreshAt(18,30,0);
refreshAt(19,0,0);
refreshAt(19,30,0);
refreshAt(20,0,0);
refreshAt(20,30,0);
refreshAt(21,0,0);
refreshAt(21,30,0);
refreshAt(22,0,0);
refreshAt(22,30,0);
refreshAt(23,0,0);
refreshAt(23,30,0);
refreshAt(24,0,0);
refreshAt(0,0,0);
refreshAt(0,30,0);
refreshAt(1,0,0);
refreshAt(1,30,0);
refreshAt(2,0,0);
refreshAt(2,30,0);
refreshAt(3,0,0);
refreshAt(3,30,0);
refreshAt(4,0,0);
refreshAt(4,30,0);
refreshAt(5,0,0);
refreshAt(5,30,0);

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}
