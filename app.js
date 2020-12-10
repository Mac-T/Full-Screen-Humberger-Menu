$(function() {

    //---------------------------------
    // modal menu setting
    //---------------------------------

    $('.modalWrap').hide();

    $('.menu-trigger').on('click', function() {

        disHp = window.innerHeight;
        disHp = Number(disHp);

        $('.modalWrap').animate({ opacity: "toggle" }, {
            duration: "slow",
            easing: "linear",
        });
        if (!$('.modalWrap').hasClass('onModal')) {
          scrPos = $(window).scrollTop();
          localStorage.setItem('scrPos', scrPos);
          scrPosNum = localStorage.getItem('scrPos');
          
        } 
        
        $(this).toggleClass('active');
        $('.modalWrap').toggleClass('onModal');
        
        $('body').addClass('active');
        if (!$('.modalWrap').hasClass('onModal')) {
            //$('.modalWrap').hide();
            $('body').css({
                height: '100%',
                width: '100%',
                overflow: 'scroll',
            });

            
        } else {
            $('body').css({
                height: disHp,
                width: '100%',
                overflow: 'hidden',
            });

        }

        console.log(scrPosNum);
        $(window).scrollTop(scrPosNum);
        $('.modalWrap').css({top: scrPosNum + 'px'});

        return false;
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
