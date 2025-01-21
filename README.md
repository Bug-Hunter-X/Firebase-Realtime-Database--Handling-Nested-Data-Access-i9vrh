# Firebase Realtime Database: Handling Nested Data Access

This repository demonstrates a common error when working with nested data in the Firebase Realtime Database and provides a solution to prevent unexpected crashes.

## Problem

Accessing deeply nested data in the Firebase Realtime Database without proper error handling can lead to application crashes if the expected data structure is not present.  The provided `bug.js` file illustrates this issue.

## Solution

The `bugSolution.js` file demonstrates a more robust way to access nested data by using optional chaining and nullish coalescing to handle cases where data may be missing. This approach prevents runtime errors and makes the code more resilient.

## How to reproduce

1. Clone the repository.
2.  Replace the placeholder Firebase configuration in the `bug.js` and `bugSolution.js` files with your own Firebase project details.
3. Run `bug.js`.  You'll see that it will throw an error if the nested path is not found in your database.
4. Run `bugSolution.js`. You'll notice it handles missing data gracefully.
