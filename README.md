# 任意热键 AnyHotKey

![Animation.gif](Animation.gif)

---


**将"任意"两个按键作为热键，包括非功能键。**

_原生JavaScript，不依赖任何库。_

**Use 'any' two keys as hotkey, including non-function keys.**

_Uses JavaScript, no dependencies._

---

## Usage
You will need `Node.js` installed on your system.

```
npm install anyhotkey --save
```

HTML

```
<input>
```

JavaScript

```
import { AnyHotKey } from 'anyhotkey';

const inputElement = document.querySelector('input');
    AnyHotKey(inputElement, {
        interval: 250,                  // 主副按键按下的最大时间间隔
        key: 13,                        // 主按键的键代码
        subKey: 17,                     // 副按键的键代码
        onKey: function() {             // 主按键按下时触发的回调函数
            console.log("onKey")
        },
        onHotkey: function() {          // 主副按键按下时触发的回调函数
            console.log("onHotkey")
        }
    });
```

Example
[demo.html](demo%2Fdemo.html)

### OR

You can manually download and link AnyHotKey.min.js in your HTML.

HTML

```
<script src="../dist/AnyHotKey.min.js"></script>

<input>
```

JavaScript

```
const inputElement = document.querySelector('input');
    AnyHotKey(inputElement, {
        interval: 250,                  // 主副按键按下的最大时间间隔
        key: 13,                        // 主按键的键代码
        subKey: 17,                     // 副按键的键代码
        onKey: function() {             // 主按键按下时触发的回调函数
            console.log("onKey")
        },
        onHotkey: function() {          // 主副按键按下时触发的回调函数
            console.log("onHotkey")
        }
    });
```

Example
[demo_manually.html](demo%2Fdemo_manually.html)