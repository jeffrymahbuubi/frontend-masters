# Complete Intro to Web Dev, v3

## Description

- Links = https://frontendmasters.com/courses/web-development-v3/tags/
- Material Lecture = https://btholt.github.io/complete-intro-to-web-dev-v3/
- Lecturer = Brian Holt - Product Manager of Stripe

## Course Material

### HTML

#### [1. Tags](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/tags)

#### [2. Common HTML Tags](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/types-of-tags)

#### [3. Attributes, Class, & IDs](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/attributes)

#### [4. Organizing HTML](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/organizing-html)

#### [5. Head & Meta Tags](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/head-and-meta-tags)

- In VS Code, type `html:5` to generate boilerplate to start your website project.

#### [6. HTML Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/html/html-project)

- In VS Code, type `lorem10`, for example, to generate a `lorem` with 10 sentences. You can increase or decrease the number to generate the `lorem`.
- A tip when creating HTML is to organize your code. You can use the `class` attribute for naming. Also, use semantic HTML, such as `<section></section>` for sections, `<article></article>` when creating an article, and `<nav></nav>` when creating navigation.

### CSS

#### [1. Rules](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/rules)

- A tip: if you want to change the style of certain text in a paragraph, you can wrap the text using `<span></span>`.

#### [2. Selectors and the Cascade](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/selectors-and-the-cascade)

- A tip when naming a `class` is to name it based on what it represents, not what it looks like. For example, use `class='branding'` instead of `class='red-branding'`.
- In general, avoid excessive cascading. If you are using pre-made components like Bootstrap and want to apply your new style, you can add a new class to the HTML element and place your new style at the bottom of the CSS file to override the previous style..

#### [3. Pseudoclasses and Pseudoelements](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/pseudoclasses-and-pseudoelements)

#### [4. Layout CSS](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/layout-css)

- By default, every tag in CSS has a `display` property. For example, `div`s are `display: block` by default, while `span`s are `display: inline`.
- `height`, `width`, `padding`, `border`, and `margin` cannot be manipulated if the element is `display: inline`.
- One exception in CSS is to use the given properties as they are. For example, suppose you set a `div` with `width: 100px; border: 3px` (it will apply `3px` on the right and `3px` on the left). If you want the `div` to have `100px` including the border, not `106px`, you should use the `box-sizing` property.

  ```css
  * {
    box-sizing: border-box;
  }
  ```

#### [5. Flex](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/flex)

- `justify-content` handles the horizontal justification and `align-items` handles the vertical alignment.

#### [6. Grid](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/grid)

- `grid` useful is more laying out of page (which is are frequently grid-like).
- A common use case for grid which is for laying out whole webpage
- Check [caniuse](https://caniuse.com/?search=grid) to check the support for `grid` on all browsers.
- The powerful feature of `grid` is that you can describe your layout in English as follows (check the course website for details!).:

  ```css
  .my-page {
    display: grid;
    grid-template-areas:
      "nav-header  nav-header  nav-header  nav-side"
      "main-body   main-body   .           nav-side"
      "footer      footer      footer      footer";
  }
  ```

#### [7. Animations](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/animations)

- We can define animations using only the given keyframes. Version 1 and the former do different things. The first one defines multiple stages of the animation (0%, 25%, and 100%), allowing for more complex animations with intermediate steps.

  ```css
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ```

  or

  ```css
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  ```

#### [8. Putting It Together](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/putting-it-together)

#### [9. Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/css/project)

- One thing that can be improved is the `nav` element. Since there is no button to navigate, it is better to use `<header>` because it makes more semantic sense.

### JavaScript

#### [1. Intro](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/intro)

- The logical process of a website is to put the `stylesheet (CSS)` first, then the `HTML` (the content), and lastly the `<script src="./logic.js"></script>` in the `body` of the HTML.

#### [2. Numbers, Strings, and Booleans](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/numbers-strings-and-booleans)

- Template literals are literals with backticks (`) which enable the use of multi-line strings.

  ```javascript
  const firstName = "Jeffry";
  const lastName = "Mahbuubi";
  const sentence = `Hello my name is ${firstName} ${lastName}`;
  ```

#### [3. Control Flow](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/control-flow)

- It is recommended to use triple-equals (`===`), which means the conditions must be true in both value and data type. Using double-equals (`==`) could lead to **type coercion**. For example, `false == 0` is true, but you will most likely prefer it to be false because they are different data types.

#### [4. Loops](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/loops)

- Subtraction (`-=`), Multiplication (`*=`), Division (`/=`), Exponentiation (`**=`) are just shorthand operations.
- `++variable` (Pre-Increment): The value of `variable` is incremented first, and then the new value is used.
- `variable++` (Post-Increment): The current value of `variable` is used first, and then the variable is incremented.

  ```javascript
  let camelCase = 5;

  // Pre-increment
  console.log(++camelCase); // Output: 6
  console.log(camelCase); // Output: 6

  camelCase = 5; // Resetting the value for comparison

  // Post-increment
  console.log(camelCase++); // Output: 5
  console.log(camelCase); // Output: 6
  ```

#### [5. Exercise](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/exercise)

- Using a for-loop to log an emoji given a condition:

  ```javascript
  const timesToRepeat = 10;
  const character = "🐩";

  answer = "";

  for (i = 0; i < timesToRepeat; i++) {
    answer += character;
  }

  console.log(answer);

  // 🐩🐩🐩🐩🐩🐩🐩🐩🐩🐩🐩
  ```

- Another way is to use a `built-function`:

  ```javascript
  const timesToRepeat = 10
  const character "🐩"

  console.log("".padStart(timesToRepeat, character))
  ```

#### [6. Functions](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/functions)

#### [7. Scope](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/scope)

#### [8. Builtins](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/builtins)

#### [9. Objects](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/objects)

#### [10. Context](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/context)

- The `this` keyword refers to the context where a piece of code, such as a function's body, is supposed to run. See this [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) for details.
- There is a context where we use the `this` keyword. For example, in this case, `pulledOutGetAddress` will be `undefined` because the `this` keyword doesn't know where to refer to in the object.

  ```javascript
  const me = {
    name: {
      first: "Brian",
      last: "Holt",
    },
    location: {
      streetNumber: 500,
      street: "Fakestreet",
      city: "Seattle",
      state: "WA",
      zipCode: 55555,
      country: "USA",
    },
    getAddress() {
      return `${this.name.first} ${this.name.last}
  ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`;
    },
  };

  console.log(me.getAddress());

  const pulledOutGetAddress = me.getAddress();
  console.log(pulledOutGetAddress); // worked
  console.log(pulledOutGetAddress()); // undefined
  ```

- The `this` keyword in the global scope refers to the `window` object. The `console` is also a part of the `window` object, so everything that "has no context" is actually stored in the `window`.

#### [11. Arrays](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/javascript/arrays)

### Putting it All Together

#### [1. The DOM](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/the-dom)

#### [2. Events and Listeners](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/events-and-listeners)

#### [3. Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project)

### Talking to Servers

#### [1. JSON](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/json)

#### [2. AJAX](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/ajax)

#### [3. async/await](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/async-await)

#### [4. Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project)
