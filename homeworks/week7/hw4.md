## 什麼是 DOM？
document object model，是 javascript 可以操控 tag 的橋樑，本質上，它將網頁與腳本或程式語言連結在一起。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
capture and then bubbling
capture : 從 window 到 target 這段
bubbling : 從 target 回 window 這段

## 什麼是 event delegation，為什麼我們需要它？
事件代理，可以共用事件觸發的機制，而不是所有需要的 tag 都自己宣告一個事件監聽

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()：是阻止預設行為
event.stopPropagation()：是阻止事件傳遞