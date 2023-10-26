/**
 * AnyHotKey.js
 * Copyright (C) 2022 youtpot.com
 * MIT License
 *
 * @author youtpot
 * @version 1.0.4 2023-10-25
 * @link https://github.com/youtpot/AnyHotKey
 */

/**
 * 将任意两个按键作为热键（默认：Enter）
 * Use any two keys as hotkey (default: Enter)
 * @param {HTMLElement} element - 监听的 DOM 元素
 * @param {object} [options] - 配置选项
 * @param {number} [options.key] - 主按键的键代码，默认为 13（Enter 键）
 * @param {number} [options.subKey] - 副按键的键代码
 * @param {function} [options.onKey] - 主按键按下时触发的回调函数
 * @param {function} [options.onHotkey] - 主副按键按下时触发的回调函数
 * @param {number} [options.interval] - 主副按键按下的最大时间间隔（毫秒），默认为 250ms
 */
function AnyHotKey(element, options) {
    let defaults = {
        key: 13,
        subKey: 0,
        onKey: function() {},
        onHotkey: function() {},
        interval: 250
    };

    let opt = Object.assign({}, defaults, options);
    let preKey = [0, 0];

    if(opt.subKey === 0){
        element.addEventListener("keydown", function(event) {
            const keyCode = event.keyCode;

            if (keyCode === opt.key) {
                if(keyCode === 13) {
                    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                }
                opt.onKey(this);
            }
        });
    }else{
        element.addEventListener("keydown", function(event) {
            const keyCode = event.keyCode;
            const currentTime = new Date().getTime();

            if (keyCode === opt.key) {
                if(keyCode === 13) {
                    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                }
                if (preKey[0] === opt.subKey && preKey[1] + opt.interval >= currentTime) {
                    opt.onHotkey(this);
                } else {
                    opt.onKey(this);
                }
            }

            preKey[0] = keyCode;
            preKey[1] = currentTime;
        });
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { AnyHotKey };
} else {
    window.AnyHotKey = AnyHotKey;
}
