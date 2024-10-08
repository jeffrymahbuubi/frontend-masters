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

- There is a built-in functio to do iteration which is called `forEach`, as given example:

  ```javascript
  const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
  ];

  let timesCalled = 0;
  function logCity(city) {
    console.log(timesCalled, city);
    timescalled++;
  }

  cities.forEach(logCity);

  /* log
  0 "Seattle"
  1 "San Francisco"
  2 "Salt Lake City"
  3 "Amsterdam"
  4 "Hong Kong"
  */
  ```

### Putting it All Together

#### [1. The DOM](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/the-dom)

- So what is `document`? The `document` object basically allows you to reach into the HTML and change or edit it. For example:

  ```javascript
  <div class="red-square"></div>

  .red-square {
    color: crimson;
    width: 100px;
    height: 100px;
  }

  const redSquare = document.querySelector(".red-square")
  // <div class="red-square" style="background-color: limegreen;"></div>
  redSquare.style.backgroundColor = "red"
  ```

- You will notice that in CSS you write `background-color`, while in the DOM, when using JavaScript, you use `backgroundColor`. The `background-color` property in CSS corresponds to the `backgroundColor` property in JavaScript. This is due to JavaScript's camelCase naming convention for CSS properties.

- Visit this link [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), which will give you an idea of what elements you can manipulate with the DOM in HTML.

#### [2. Events and Listeners](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/events-and-listeners)

- Websites are meant to be reactive to users. To be reactive, we need to wait for them to interact, such as clicking a button. We achieve this by waiting for **events**. We respond to these events by using **event listeners**.
- The method to add **event listeners** is, for example:

  ```javascript
  const button = document.querySelector(".event-button");
  button.addEventListener("click", function () {
    alert("Hey there!");
  });
  ```

- **Event Delegation** and **Event Bubbling** are also two concepts that might be asked during an interview. For example, suppose you have a group of elements that you need to listen for events on. You could write an event listener for each element, but this would be tedious. Instead, a more efficient approach is to use **event delegation**. This leverages **event bubbling**, where an event fired on an element propagates up to its parent, and then to its parent's parent, and so on. By attaching a single event listener to a common ancestor, you can handle events for multiple child elements.

  ```javascript
  // You could write an event listener for each button
  <div class="button-container">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
  </div>;

  // Instead you can target the class "button-container"
  document
    .querySelector(".button-container")
    .addEventListener("click", function (event) {
      alert(`You clicked on button ${event.target.innerText}`);
    });

  // But that implemenation will lead to a bug, try to click between the button you will get alert "You clicked on button 1 2 3 4 5", so you can add a if-condition to make sure that it a "button" element first then target the innerText
  document
    .querySelector(".button-container")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        alert(`You clicked on button ${event.target.innerText}`);
      }
    });
  ```

#### [3. Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/putting-it-all-together/project)

### Talking to Servers

#### [1. JSON](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/json)

- JSON (JavaScript Object Notation), a standard language that frontend can interact with backend. So how we do it? We need to find a way to request the data from the server without refreshing the page. We can use a technique called AJAX, which is acronym that stands for (Asynchronous JavaScript and XML). But this method wasn't used anymore since no one now use XML.
- An MDN Documentation of JSON can be visit [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON). A JSON is like JavaScript but the `key` value should be enclosed in `""` (quote notation)

  ```json
  {
    "name": "Luna",
    "age": 10,
    "breed": "Havanese",
    "location": {
      "city": "Seattle",
      "state": "WA"
    }
  }
  ```

- A built-in method in JavaScript callaed `JSON.parse` will parse JSON into a JavaScript Object that we can access as usual like given:

  ```javascript
  const responseObject = JSON.parse(responseFromServer);
  console.log(responseObject);

  /*
      Object {
    "age": 10,
    "breed": "Havanese",
    "location": Object {
      "city": "Seattle",
      "state": "WA",
    },
    "name": "Luna",
  }
  */
  ```

- On the other way around, if you want to create a JSON from JavaScript `Object`, you can use `JSON.stringify(Object)`, like given:

  ```javascript
  const dog = {
    name: "Luna",
    age: 10,
    breed: "Havanese",
    location: {
      city: "Seattle",
      state: "WA",
    },
  };

  const objString = JSON.stringify(dog);
  /*
    "{\"name\":\"Luna\",\"age\":10,\"breed\":\"Havanese\",\"location\":{\"city\":\"Seattle\",\"state\":\"WA\"}}"
  */
  ```

#### [2. AJAX](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/ajax)

- JSON APIs: An API (Application Programming Interface) is a URL that you can make requests to in order to get information back from the server/backend. For more details, check [Web APIs by MDN](https://developer.mozilla.org/en-US/docs/Web/API).
- Check out a collection of [publicly available APIs](https://github.com/toddmotto/public-apis).
- For example, an API `api.example.com/weather?zip=98109`. The `?zip=98109` is called a query string. If you want multiple queries, they are separated by `&` (ampersand), e.g., `example.com/weather?zip=98109&day=tomorrow`.
- A method to get the result of an API request is using `promises`, which represent a future value. With `promises`, we can use a function with its `then` method. We also use `fetch`, a built-in function that accepts a URL and tries to get information from the API. For example:

  ```javascript
  function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
      // first then
      .then(function (response) {
        const processingPromise = response.text();
        return processingPromise;
      })
      // last then
      .then(function (processedResponse) {
        const dogObject = JSON.parse(processedResponse); // {"message":"https://images.dog.ceo/breeds/poodle-standard/n02113799_4642.jpg","status":"success"}
        const img = document.createElement("img");
        img.src = dogObject.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
      });
  }
  ```

- **Requests** take time. Therefore, we need the ability to _wait_. This is called asynchronous (async) code. `fetch` returns a `promise`. We then need to handle the response from the API. In our case, we're saying it's going to be `text()`.
- We use **promise chaining** because we don't know how long it will take to transform our response into text. By **returning the promise** at the end of the first `then`, we can use its data in the second `then`.
- In the second `then`, we read the `message` which contains the URL, create an `img` tag, and append it to the DOM. The result is we get a cool dog picture!
- Suppose we know that the response is `JSON`, which is often the case. We can do the following, thereby removing the need for `JSON.parse`:

  ```javascript
  function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
      // first then
      .then(function (response) {
        const processingPromise = response.JSON(); //  {"message":"https://images.dog.ceo/breeds/poodle-standard/n02113799_4642.jpg","status":"success"}
        return processingPromise;
      })
      // last then
      .then(function (processedResponse) {
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
      });
  }
  ```

#### [3. async/await](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/async-await)

- Using `promises` can make code hard to read. A much easier method is to use `async/await`, which is supported in recent versions of JavaScript. As follows:

  ```javascript
  const DOG_URL = "https://dog.ceo/api/breeds/image/random";

  const doggos = document.getElementById("dog-target3");

  async function addNewDoggo() {
    const promise = await fetch(DOG_URL);
    const processedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  }
  ```

- The `await` keyword can only be used inside `async` functions. All `await` does is tell your code to "pause execution of this function until this promise resolves." So, on the line `const promise = await fetch(DOG_URL);`, the function stops executing until your API call finishes.
- An example of how to use `await` to gather results from multiple function calls:

  ```javascript
  async function getName(name) {
    return name;
  }

  async function getLotsOfNames() {
    const names = await Promise.all([
      getName("Brian"),
      getName("Casandra"),
      getName("Reid"),
      getName("Niki"),
    ]);
    console.log(names);
  }

  getLotsOfNames();

  /*
    Output:
    [
      "Brian",
      "Casandra",
      "Reid",
      "Niki"
    ]
  */
  ```

- `async` functions _always_ return `promises`. Despite the fact that we're not doing any awaiting in `getName`, because it's `async`, it returns a `promise`. This can catch people off guard. That's how async functions work and why `await` works: they're async, and therefore one may have to wait when you call them. For example:

  ```javascript
  async function getName() {
    return "Brian";
  }

  console.log("a promise", getName());

  getName().then(function (name) {
    console.log("the actual name", name);
  });

  /*
  "a promise" Promise {}
  Promise {}"the actual name" "Brian"
  */
  ```

#### [4. Project](https://btholt.github.io/complete-intro-to-web-dev-v3/lessons/talking-to-servers/project)
