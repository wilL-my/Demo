$(function () {

    //微信二维码
    $('.head-wrap .head .nav ul .weixin .cont').mouseenter(function () {
        $('.head-wrap .head .nav ul .weixin .code-wx').fadeIn();
    }).mouseleave(function () {
        $('.head-wrap .head .nav ul .weixin .code-wx').fadeOut();
    });

    //fullpage插件配置
    $('#containers').fullpage({
        /*配置参数*/
        sectionsColor: ['#fff','#fff','#ef674d','#fff'],
        verticalCentered: false, /*屏幕内容对齐方式，默认垂直居中*/
        navigation:true, /*指示器*/
        navigationPosition:'left', /*指示器位置*/
        afterLoad:function (link, index) {
            $('.section') .eq(index-1).addClass('now');
        },
        afterRender: function () {
            $('.arrow-down').on('click',function () {
                //jquery封装插件 $.fn.name = function(){}
                //jquery本身没有的方法通过$.fn的方法追加方法 认为是追加方法
                $.fn.fullpage.moveSectionDown();
            })
        },
        onLeave:function (index,nextIndex,direction) {
            if (index==1){
                $('.head').removeClass('black').addClass('white');
                $('.wx-logo').addClass('white')
            }
            if (index == 3) {
                $('.arrow-down').hide();
            }else{
                $('.arrow-down').show();
            }
            if (nextIndex == 1){
                $('.head').removeClass('white');
                $('.wx-logo').removeClass('white');
            }
        },
        afterSlideLoad:function(anchorLink,index,slideIndex,direction){
            if ( slideIndex == 2){
                $('.contents03-3').addClass('flicker');
            }
        },
        //页面切换的时间，默认为700毫秒
        scrollingSpeed: 1000
    });

    // 视频插件
    $('.html-video-background').videoBackground();


    // 第一屏文字
    //节流


    // $('.head-content .head-content-download a:not(.mobile)').mouseover(function () {
    //     $(this).animate({backgroundColor: '#fff',color: '#3e94fc'})
    // }).mouseleave(function () {
    //     $(this).animate({backgroundColor: 'rgba(255,255,255,0)',color: '#fff'})
    // })
    //
    // $('.head-content .head-content-download a:last').mouseover(function () {
    //     $(this).animate({backgroundColor: '#317FD3',color: '#fff'})
    // }).mouseleave(function () {
    //     $(this).animate({backgroundColor: '#3e94fc',color: '#fff',})
    // })

//    第二屏*********
    var appList = [
        {
            width:'80px',
            height:'80px',
            top:'60%',
            left:'20%'
        },
        {
            width:'70px',
            height:'70px',
            top:'55%',
            left:'40%'
        },
        {
            width:'90px',
            height:'90px',
            top:'70%',
            left:'50%'
        },
        {
            width:'40px',
            height:'40px',
            top:'20%',
            left:'80%'
        },
        {
            width:'60px',
            height:'60px',
            top:'30%',
            left:'85%'
        },
        {
            width:'80px',
            height:'80px',
            top:'50%',
            left:'10%'
        },
        {
            width:'70px',
            height:'70px',
            top:'60%',
            left:'80%'
        },
        {
            width:'80px',
            height:'80px',
            top:'65%',
            left:'90%'
        },
        {
            width:'60px',
            height:'60px',
            top:'35%',
            left:'35%'
        },
        {
            width:'80px',
            height:'80px',
            top:'25%',
            left:'50%'
        }
        ];

    var apps = $('.contents02 .apps img');
    for (let i = 0; i < apps.length; i++) {
        $(apps[i]).css(appList[i]);
    }


//    下载页
    $('.contents04 .downloadLogo .downloadList li').mouseover(function () {
        $(this).find('p').css({paddingTop:0});
        $(this).find('.a-download').css({opacity:1});
    });
    $('.contents04 .downloadLogo .downloadList li').mouseleave(function () {
        $(this).find('p').css({paddingTop:20});
        $(this).find('.a-download').css({opacity:0});
    })
})