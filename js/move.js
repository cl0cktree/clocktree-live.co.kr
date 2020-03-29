$(function(){
	var data_idx = 0;
    var slide_leng = $('.slide').length;
    function movement(){
        next_slie = setTimeout(function(){
            data_idx++;
            $('.slide_0'+data_idx).fadeIn(300);
            if (data_idx<slide_leng) {
                data_idx++;
            } else {
                data_idx = 1;
            }
            $('.slide_0'+data_idx).fadeOut(300);
        });
    }
});
