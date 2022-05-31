/*#
 * compositeKey.js <https://github.com/youtpot/compositeKey>
 * youtpot.com
 */


; (function($) {
    /**
     * [绑定元素按下Enter或按下Ctrl+Enter的事件，或者绑定任意两个键]
     */
    $.fn.submitWithCtrl = function(options) {
        let defaults = {
            key:13,//keycode
            compositeKey: 17,//keycode
            onKey: function() {},
            onCompositeKey: function() {},
            interval:250,//interval time of two press
        };
        let opt = $.extend({},defaults, options);
        let preKey = ["", 0];

        this.each(function(){
            $(this).keydown(function(event){
                if(event.keyCode === opt.key){
                    if(event.preventDefault){
                        event.preventDefault();
                    }else{
                        event.returnValue=false;}
                }

                if(event.keyCode === opt.key && preKey[0] === opt.compositeKey && preKey[1] + opt.interval >= Math.round(new Date())){
                    opt.onCompositeKey(this);
                }else if(event.keyCode === opt.key){
                    opt.onKey(this);
                }

                preKey[0] = event.keyCode;
                preKey[1] = Math.round(new Date());

            });
        });
    }

})(jQuery);
