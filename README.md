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

As a user, I expect the sum to be 40730 and the numbers to be 145, 40585.

**Information Architecture**

The function `digitFactorial()` returns an object, whose structure is:

`{
    sum: number,
    numbers: array (number)
}`

To view object properties, use the form of `objectName.propertyName`.

`digitFactorial().sum` is a number
`digitFactorial().numbers` is an array of numbers

## Features

Allows the user to show or hide the solution as described in [Project Euler 034](https://projecteuler.net/problem=34).

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-034) at the main branch.

## Credites

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)


