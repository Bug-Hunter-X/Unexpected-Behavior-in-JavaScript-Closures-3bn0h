function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);

  console.log(z); // 30
  // Create a copy of x to avoid modifying the original variable
  let xCopy = x;
  xCopy = 30;
  console.log(foo(xCopy, y)); //50
  console.log(foo(x,y)) //30
}

bar();