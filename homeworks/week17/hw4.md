```js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ?? obj.inner.hello.call(obj.inner) // 2
obj2.hello() // ?? obj2.hello.call(obj2) // 2
hello() // ?? hello.call(null) // 未定義所以是 window ---> 錯了
```

--> log 出 window.value 所以是 undefined
