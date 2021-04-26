$(function(){


    //언어선택 옵션박스에 대한 설정
    const $form = $('header>.container>form');
    const $langlist = $('header>.container>form>fieldset>.langlist');
    const $lang = $('header>.container>form>fieldset>.langlist>li>a');

    $form.on('click', function(){
        console.log('언어선택 클릭');
        $langlist.toggle();
    });

    $form.on('mouseleave', function(){
        $langlist.hide();
    });

    $lang.on('click', function(evt){
        //이번에 선택한 요소의 텍스트를 가져온다.
        const selectedLang = $(this).text();
        
        //input 요소의 value 속성값으로 넣어준다.
        $("#lang").val(selectedLang);

        evt.preventDefault();
    });


});


//슬라이드 코드구현
$(function(){

    const $indicators = $('section>.line-visual>.line-visual-pagination>li>a');
    const $container = $('section>.line-visual>.line-visual-container');

    $indicators.on('click', function(evt){
        evt.preventDefault();

        const nowIdx = $indicators.index(this);

        $container.stop().animate({
            left : -(100 * nowIdx) + '%'
        });

        //인디케이터 활성화
        $(this).parent().addClass('on').siblings().removeClass('on');
        $indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    });

   
});

$(function(){
    const $mnu = $('header>.container>nav>.gnb>li>a');
    let mnuIdx = 0;
    let arrArticleTop = [];
    // arrArticleTop[0] = $('.line-msg').offset().top-250;
    // arrArticleTop[1] = $('.line-tel').offset().top-250;
    // arrArticleTop[2] = $('.line-sticker').offset().top-250;
    // arrArticleTop[3] = $('.line-share').offset().top-250;
    // arrArticleTop[4] = $('.line-tip').offset().top-250;
    // arrArticleTop[5] = $('.line-friends').offset().top-250;
    

    for(let i=0;i<6;i++){
        arrArticleTop[i] = $('.srv').eq(i).offset().top-250
    }
    
    $mnu.on('click',function(evt){
        evt.preventDefault();

        mnuIdx = $mnu.index(this)
        $mnu.eq(mnuIdx).parent().addClass('on').siblings().removeClass('on')
        
        

        $('html,body').stop().animate({
            scrollTop : arrArticleTop[mnuIdx]+150
        });

    });
    $(window).on('scroll',function(){
        let scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        for(let k=0;k<6;k++){
            if(scrollTop>=arrArticleTop[k]){
                $mnu.eq(k).parent().addClass('on').siblings().removeClass('on')
            }else if(scrollTop<arrArticleTop[0]){
                $mnu.parent().removeClass('on')
            };
        };
        // if(scrollTop>=arrArticleTop[0]){
        //     $mnu.eq(0).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop>arrArticleTop[1]){
        //     $mnu.eq(1).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop>arrArticleTop[2]){
        //     $mnu.eq(2).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop>arrArticleTop[3]){
        //     $mnu.eq(3).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop>arrArticleTop[4]){
        //     $mnu.eq(4).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop>arrArticleTop[5]){
        //     $mnu.eq(5).parent().addClass('on').siblings().removeClass('on')
        // };
        // if(scrollTop<arrArticleTop[0]){
        //     $mnu.parent().removeClass('on')
        // };
    });

    $('.ci>a').on('click',function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop : 0
        });
    });
});