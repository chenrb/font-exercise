$(function() {
    var $skill_0 = $('#skill_0')
        , $skill_1 = $('#skill_1')
        , $skill_2 = $('#skill_2')
        , $skill_3 = $('#skill_3')
        , $skill_show_0 = $('#skill_show_0')
        , $skill_show_1 = $('#skill_show_1')
        , $skill_show_2 = $('#skill_show_2')
        , $skill_show_3 = $('#skill_show_3')
        ;
    
    listen_skill ();

    function listen_skill () {
        $skill_0.on('click', function () {
            $('dd').hide();
            $skill_show_0.show();
        });
        $skill_1.on('click', function () {
            $('dd').hide();
            $skill_show_1.show();
        });
        $skill_2.on('click', function () {
            $('dd').hide();
            $skill_show_2.show();
        });
        $skill_3.on('click', function () {
            $('dd').hide();
            $skill_show_3.show();
        });
    }
})