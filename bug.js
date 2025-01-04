function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);

  console.log(z); // 30
  x = 30;
  console.log(foo(x, y)); //50
}