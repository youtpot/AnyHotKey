/*!
 * AnyCombinationKeys.js
 * Copyright (C) 2022 youtpot.com
 * MIT License
 *
 * @author youtpot
 * @version 2023-9-24
 * @link https://github.com/youtpot/AnyCombinationKeys
 */



; (function($) {
    /*!
     * 绑定元素按下任意两个键所触发的函数（默认：Ctrl+Enter）
     * Function triggered by pressing any two keys on the binding element (default: Ctrl+Enter)
     *
     * @param {object} options key/combinationKey/onKey/onCombinationKey/interval
     */
    $.fn.anyCombinationKeys = function(options) {
        let defaults = {
            key:13,//绑定主按键，键代码。默认：13(Enter键)
            combinationKey: 17,//绑定副按键，键代码。默认：17(Ctrl键)
            onKey: function() {},//主按键按下触发的函数。
            onCombinationKey: function() {},//组合键按下触发的函数。
            interval:250,//主副按键之间的最大时间间隔(ms)。默认：250ms
        };
        let opt = $.extend({},defaults, options);
        let preKey = ["", 0];

        this.each(function(){
            $(this).on("keydown", function(event){
                if(event.keyCode === opt.key){
                    if(event.preventDefault){
                        event.preventDefault();
                    }else{
                        event.returnValue=false;}
                }

                if(event.keyCode === opt.key && preKey[0] === opt.combinationKey && preKey[1] + opt.interval >= new Date().getTime()){
                    opt.onCombinationKey(this);
                }else if(event.keyCode === opt.key){
                    opt.onKey(this);
                }

                preKey[0] = event.keyCode;
                preKey[1] = new Date().getTime();

            });
        });
    }

})(jQuery);
