---
title: "10 Linting Rules for Writing Better Asynchronous Code"
pubDate: 09/12/2023 14:25 # MM/DD/YYYY HH:MM
author: "Mengkheang Thor"
tags:
  - JavaScript
  - Node.js
  - ESLint
imgUrl: "../../assets/eslint.jpeg"
description: "Unlock the power of linting with essential rules for crafting top-notch asynchronous JavaScript code. Learn to prevent bugs and boost efficiency, mastering error handling and callback management for cleaner, more maintainable code. "
layout: "../../layouts/BlogPost.astro"
---

# 🧹 Linting Rules for Writing Better Asynchronous JavaScript Code

Debugging asynchronous code in JavaScript often feels like navigating through a minefield. You don't know when and where console.log statements will appear, coupled with the challenge of ensuring executed run in the desired order, can be difficult.

Imagine having a reliable guide while writing asynchronous code, providing valuable insights to prevent potential errors. Thankfully, linters are a big help in identifying and addressing bugs before they get in our production environment. Below, you'll find a comprehensive list of linting rules tailored to enhance your proficiency in writing asynchronous code for JavaScript and Node.js.

Even if you opt not to implement these rules in your project, exploring their use case may help you to better understand asynchronous coding, ultimately bolstering your developer skills.

The following rules are shipped by default with [ESLint](https://eslint.org/). Enable them by adding them to your `.eslintrc` configuration file.

## 1. Avoid Async Promise Executors

Rule: no-async-promise-executor

```js
// ❌
new Promise(async (resolve, reject) => {});

// ✅
new Promise((resolve, reject) => {});
```

Don't pass async functions to the Promise constructor. While you can pass an async fuctions to the Promise constructor, it's considered an bad pratice. First, if the async function throw error, the error will be lost and won't be rejected by the newly created Promise. Second, if `await` is used inside the constructor, wrapping it in an new Promise might be unnecessary.

## 2. No Await Inside Loops

Rule: no-await-in-loop

Avoid using await inside loops to improve efficiency. When performing an action on every item within an iterable and waiting for an asynchronous operation, it frequently suggests that the program isn't fully harnessing JavaScript's event-driven architecture. Opting for parallel execution of these tasks can significantly enhance the efficiency of your code

```js
// ❌
for (const url of urls) {
  const response = await fetch(url);
}

// ✅
const responses = [];
for (const url of urls) {
  const response = fetch(url);
  responses.push(response);
}

await Promise.all(responses);
```

## 3. No Return in Promise Constructor

Rule: no-promise-executor-return

Don't return values inside a Promise constructor. Values provided within a Promise constructor hold no significance and don't impact the promise in any manner. Instead, you should pass the value to the `resolve` function, or if an error arises, invoke `reject` with the error
```js
// ❌
new Promise((resolve, reject) => {
  return result;
});

// ✅
new Promise((resolve, reject) => {
  resolve(result);
});
```

## 4. Prevent Race Conditions

Rule: require-atomic-updates

Ensure synchronous variable updates to avoid race conditions. With the exmaple below, What is the final value of `totalPosts`?

```js
// ❌
let totalPosts = 0;

async function getPosts(userId) {
  const users = [{ id: 1, posts: 5 }, { id: 2, posts: 3 }];
  await sleep(Math.random() * 1000);
  return users.find((user) => user.id === userId).posts;
}

async function addPosts(userId) {
  totalPosts += await getPosts(userId);
}

await Promise.all([addPosts(1), addPosts(2)]);
console.log('Post count:', totalPosts);
```

Perhaps you've noticed that this question was a trick question, and the correct answer isn't 8. Indeed, the `totalPosts` variable will display either 5 or 3. Feel free to test it in your browser.

The issue occur due to a time delay between reading and modifying `totalPosts`, resulting in a race condition. Consequently, when the value is updated in a separate function call, this change isn't immediately reflected in the current function's scope. As a solution, ensure that the variable is both read and updated simultaneously to prevent this race condition.

```js
// ✅
let totalPosts = 0;

async function getPosts(userId) {
  const users = [{ id: 1, posts: 5 }, { id: 2, posts: 3 }];
  await sleep(Math.random() * 1000);
  return users.find((user) => user.id === userId).posts;
}

async function addPosts(userId) {
  const posts = await getPosts(userId);
  totalPosts += posts; // variable is read and immediately updated
}

await Promise.all([addPosts(1), addPosts(2)]);
console.log('Post count:', totalPosts);
```

## 5. Limit Callback Nesting

Rule: max-nested-callbacks

Refactor deep callback nesting for readability. Excessive nesting in code could make the code difficult to read and maintain. Consider converting callbacks into promises and adopting  async/await syntax when writing asynchronous JavaScript code.

```js
/* eslint max-nested-callbacks: ["error", 3] */

// ❌
async1((err, result1) => {
  async2(result1, (err, result2) => {
    async3(result2, (err, result3) => {
      async4(result3, (err, result4) => {
        console.log(result4);
      });
    });
  });
});

// ✅
const result1 = await asyncPromise1();
const result2 = await asyncPromise2(result1);
const result3 = await asyncPromise3(result2);
const result4 = await asyncPromise4(result3);
console.log(result4);
```

## 6. Avoid Unnecessary await

Rule: no-return-await

Remove unnecessary await when returning promises. Awaiting for a promise and promptly returning it is redundant because every value returned from an async function is return wrapped in a new promise. Consequently, you can directly return the promise itself.

```js
// ❌
async () => {
  return await getUser(userId);
}

// ✅
async () => {
  return getUser(userId);
}
```

There is one exception to the rule when it is wrap in a try/catch block. In this case, the await is necessary to catch the error. Remove the await will cause the promise rejection not to be caught. My recommendation is to assign the result of the promise to a variable and return it to make it clear.

```js
// 👎
async () => {
  try {
    return await getUser(userId);
  } catch (error) {
    // Handle getUser error
  }
}

// 👍
async () => {
  try {
    const user = await getUser(userId);
    return user;
  } catch (error) {
    // Handle getUser error
  }
}
```

## 7. Use Error Objects for Rejection

Rule: prefer-promise-reject-errors

Always reject promises with an Error object. This approach simplifies error tracing as error objects retain a stack trace, finding in the source of the error.

```js
// ❌
Promise.reject('An error occurred');

// ✅
Promise.reject(new Error('An error occurred'));
```

# Node.js Specific Rules

The following rules are additional ESLint rules for Node.js provided by the [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) plugin. To use them, you need to install and add the plugin to the plugins array in your `.eslintrc` configuration file.

## 8. Handle Callback Errors

Rule: node/handle-callback-err

Handle errors in callbacks properly. In Node.js, it's usual to send errors as the first thing in a callback function. If you forget to deal with these errors, your app might act differently.

This rule checks if the first thing in a function is named `err`. In big projects, you might see different names like `e` or `error` for errors. You can adjust this rule by adding a second option in your `.eslintrc` file, like this: `node/handle-callback-err: ["error", "^(e|err|error)$"]`.

```js
// ❌
function callback(err, data) {
  console.log(data);
}

// ✅
function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
}
```

## 9. Enforce Error-First Callbacks

Rule: Enforce Error-First Callbacks

Ensure callback functions follow error-first conventions. This rule prevents accidental calls to a callback function with a non-error as the first parameter. It aligns with the convention in error-first callbacks, where the first argument should be an error, or `null`/`undefined` if there's no error.

This rule applies only when the function is named `cb` or `callback`.

```js
// ❌
cb('An error!');
callback(result);

// ✅
cb(new Error('An error!'));
callback(null, result);
```

## 10. Avoid Synchronous Methods

Rule: node/no-sync

Use async alternatives instead of synchronous Node.js methods. Using synchronous methods for I/O operations in Node.js can slow down the event loop. Typically, for web applications, it's better to use asynchronous methods for I/O tasks.

However, in certain cases like CLI utilities or scripts, using synchronous methods is acceptable. You can turn off this rule at the beginning of your file with `/* eslint-disable node/no-sync */`.


```js
// ❌
const file = fs.readFileSync(path);

// ✅
const file = await fs.readFile(path);
```


That's all there is to it! Incorporate these linting rules into your project for asynchronous code and address any problems that arise. You might just eliminate a couple of pesky bugs! 🚫🐛