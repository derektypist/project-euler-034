# Project Euler 034 - Digit Factorials

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145

The aim is to find the sum of all numbers which are equal to the sum of the factorial of their digits.

**Note:** As 1! = 1 and 2! = 2 are not sums, they are not included.

Information at [Project Euler 034](https://projecteuler.net/problem=34)

## UX

**Getting Started**

Click on the Show Solution Button to show the solution.  Click on the Hide Solution Button to hide the solution.

**User Stories**

As a user, I can show or hide the solution.

As a user, I expect the function `digitFactorial()` to return an object.

As a user, I expect the function `digitFactorial()` to return `{sum: 40730, numbers: [145,40585]}`

**Information Architecture**

The function `digitFactorial()` returns an object, whose structure is:

`{
    sum: number,
    numbers: array (number)
}`

## Features

Allows the user to show or hide the solution as described in [Project Euler 034](https://projecteuler.net/problem=34).
