# 任意组合键 AnyCombinationKeys

![Animation.gif](Animation.gif)

---


可以绑定"任意"两个按键，作为组合键。

*依赖Jquery*

"Any two keys" can be bound as a key combination.

*require jquery*

---

## Get Started

```
<!-- include jQuery -->
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>

<!-- include AnyCombinationKeys.js-->
<script src="../dist/AnyCombinationKeys.min.js"></script>
```

## Usage

HTML

```
<input id="input" type="text">
```

JavaScript

```
$("#input").anyCombinationKeys({   //绑定元素，$(document)为绑定全局
  key:13,                         //绑定主按键，键代码。默认：13(Enter键)
  compositeKey: 17,               //绑定副按键，键代码。默认：17(Ctrl键)
  interval:250,                   //主副按键之间的最大时间间隔(ms)。默认：250ms
  onKey: function() {             //主按键按下触发的函数。
    console.log("onKey");
  },
  onCompositeKey: function() {    //组合键按下触发的函数。
    console.log("onCompositeKey");
  }});
```
