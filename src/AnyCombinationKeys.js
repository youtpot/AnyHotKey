/*!
 * AnyCombinationKeys.js
 * Copyright (C) 2022 youtpot.com
 * MIT License
 *
 * @author youtpot
 * @version 2023-10-24
 * @link https://github.com/youtpot/AnyCombinationKeys
 */

; (function() {
    /**
     * 监听任意两个按键并触发回调函数（默认：Ctrl+Enter）
     * Listens to any two keys and trigger the callback function (default: Ctrl+Enter)
     * @param {HTMLElement} element - 监听的 DOM 元素
     * @param {object} [options] - 配置选项
     * @param {number} [options.key] - 绑定主按键的键代码，默认为 13（Enter 键）
     * @param {number} [options.combinationKey] - 绑定副按键的键代码，默认为 17（Ctrl 键）
     * @param {function} [options.onKey] - 主按键按下时触发的回调函数
     * @param {function} [options.onCombinationKey] - 组合键按下时触发的回调函数
     * @param {number} [options.interval] - 主副按键按下的最大时间间隔（毫秒），默认为 250ms
     */
    function anyCombinationKeys(element, options) {
        let defaults = {
            key: 13,
            combinationKey: 17,
            onKey: function() {},
            onCombinationKey: function() {},
            interval: 250
        };

        let opt = Object.assign({}, defaults, options);
        let preKey = ["", 0];

        element.addEventListener("keydown", function(event) {
            if (event.keyCode === opt.key && event.keyCode === 13) {
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            }

            if (event.keyCode === opt.key && preKey[0] === opt.combinationKey && preKey[1] + opt.interval >= new Date().getTime()) {
                opt.onCombinationKey(this);
            } else if (event.keyCode === opt.key) {
                opt.onKey(this);
            }

            preKey[0] = event.keyCode;
            preKey[1] = new Date().getTime();
        });
    }

    window.anyCombinationKeys = anyCombinationKeys;

})();
