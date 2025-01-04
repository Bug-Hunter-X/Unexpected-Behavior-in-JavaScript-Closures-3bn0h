# Unexpected Behavior in JavaScript Closures

This repository demonstrates a common issue related to closures in JavaScript. The bug arises from unexpected variable modifications within nested functions, leading to incorrect results.

## Bug Description
The `foo` function takes two arguments and returns their sum. The `bar` function initializes variables, calls `foo`, and modifies one of them before calling `foo` again. This modification affects the output unexpectedly due to how JavaScript handles closures.

## How to Reproduce
Clone this repository and run `bug.js`. Observe the output and note the discrepancy between the expected and actual values.

## Solution
The `bugSolution.js` file shows a way to resolve this issue by using techniques like immediately invoked function expressions (IIFE) or creating copies of variables to prevent unintended side effects.