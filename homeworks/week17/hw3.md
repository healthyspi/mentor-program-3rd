var a = 1
function fn(){
  console.log('1',a) // undefined
  var a = 5
  console.log('2',a) // 5
  a++
  var a
  fn2()
  console.log('3',a) // 20
  function fn2(){
    console.log('4',a) // 6
    a = 20
    b = 100
  }
}
fn()
console.log('5',a) // 1
a = 10
console.log('6',a) // 10
console.log('7',b) // 100

答對
