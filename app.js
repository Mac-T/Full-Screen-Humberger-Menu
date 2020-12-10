$(function() {

    //---------------------------------
    // modal menu setting
    //---------------------------------

    $('.modalWrap').hide();

    $('.menu-trigger').on('click', function() {

      var scrPosNum;

        $('.modalWrap').animate({ opacity: "toggle" }, {
            duration: "slow",
            easing: "linear",
        });
        if (!$('.modalWrap').hasClass('onModal')) {
          var scrPos = $(window).scrollTop();
          localStorage.setItem('scrPos', scrPos);
          var scrPosNum = localStorage.getItem('scrPos');
          
         

        } else {


          
          $(window).scrollTop(scrPosNum);

        }
        
        $(this).toggleClass('active');
        $('.modalWrap').toggleClass('onModal');
        $('body').css({ position: 'fixed', });
         $(window).scrollTop(scrPosNum);
        $('body').addClass('active');
        if (!$('.modalWrap').hasClass('onModal')) {
            //$('.modalWrap').hide();
            $('body').css({ position: 'relative' });
        }
        console.log(scrPosNum);
    });

    $(window).on("resize load", function() { //初回読み込みMODAL

        //ディスプレイサイズheight取得
        var disHm = '-' + window.innerHeight;
        var disHp = window.innerHeight;
        disHm = Number(disHm);
        disHp = Number(disHp);
        //ディスプレイサイズwidth取得
        var disWm = '-' + document.documentElement.clientWidth;
        var disWp = document.documentElement.clientWidth;
        disWm = Number(disWm);
        disWp = Number(disWp);

        if (!$('.modalWrap').hasClass('onModal')) {
            $('.modalWrap').css({
                height: disHp,
                width: '100%',
                overflow: 'hidden',
            });
        }

        $('.menu-trigger').on('click', function() {
            $('.onModal').css({
                height: disHp,
                width: disWp,
            });
            $('.modalWrap').css('overflow-y', 'scroll');
        });

    });

    $(window).on("resize", function() { //resize読み込みMODAL
        //ディスプレイサイズheight取得
        var disHm = '-' + window.innerHeight;
        var disHp = window.innerHeight;
        disHm = Number(disHm);
        disHp = Number(disHp);
        //ディスプレイサイズwidth取得
        var disWm = '-' + document.documentElement.clientWidth;
        var disWp = document.documentElement.clientWidth;
        disWm = Number(disWm);
        disWp = Number(disWp);
        if ($('.modalWrap').hasClass('onModal')) {
            $('.onModal').css({
                height: disHp,
                width: disWp,
            });
        }
    });

})
