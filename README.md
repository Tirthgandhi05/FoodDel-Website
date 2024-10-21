# FoodDel-Website

**DAY 1
Important Things learnt:**

1} React Router DOM is a library that helps you handle routing in React applications. It allows you to create a Single Page Application (SPA) with different URLs or routes for different views, without the need for a full page refresh.
For example, in a food delivery website, you might have different pages like Home, Menu, Order, and Checkout. React Router DOM allows you to show different components for each of these pages based on the URL (e.g., /home, /menu, /checkout).

2} A JSX file is a file that contains JSX (JavaScript XML), a syntax extension for JavaScript used in React to describe how the user interface (UI) should look. JSX allows you to write HTML-like code directly within JavaScript, which is then compiled into regular JavaScript by tools like Babel.
JSX allows you to write HTML-like syntax within JavaScript

3} => - Arrow function
example:  
```jsx
const Navbar = () => {
  return <div>Navbar Content</div>;
};

```

4} Assets.js- a file with importing all images as a constant and then a object asset with all constants so you can use the images with a name rathere than linking them always.


**Day 2
Important Things Learnt:**

1} Flex - Can be called 1D. Genrally preferred. By default aligns across row.

a) **flex-direction:**
Defines the direction in which the flex items are laid out.
Possible values:
    row (default): Items are placed in a horizontal row, from left to right.
    row-reverse: Items are placed in a horizontal row, but in reverse order (right to left).
    column: Items are placed in a vertical column, from top to bottom.
    column-reverse: Items are placed in a vertical column, but in reverse order (bottom to top).

b) **justify-content**
Controls the alignment of flex items along the main axis (horizontal by default).
Possible values:
    flex-start: Aligns items to the start of the container.
    flex-end: Aligns items to the end of the container.
    center: Centers items along the main axis.
    space-between: Distributes items evenly, with the first item at the start and the last at the end, with equal space between the others.
    space-around: Distributes items with equal space around them (half space at the edges).
    space-evenly: Distributes items with equal space between and around them.

c) **align-items**
Controls the alignment of flex items along the cross axis (vertical by default).
Possible values:
    stretch (default): Stretches items to fill the container along the cross axis.
    flex-start: Aligns items to the start of the cross axis.
    flex-end: Aligns items to the end of the cross axis.
    center: Centers items along the cross axis.
    baseline: Aligns items so that their baselines (usually text lines) align.


2} To get a downloaded font into app we will get the import code for it and paste it into index.css

3}**Imp CSS code learnt**
```css
.navbar button{
    background: transparent;
    font-size: 16px;
    color: #49557e;
    border: 1px solid tomato;
    padding: 10px 30px;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.3s;
}
```
meaning: border makes a border around button and border radius 50px means rounds the corner of borders.
also padding adds space between the written and button borders. transition makes the hover effect smoother.

```css
.navbar button:hover{
    background-color: #fff4f2;
}
```
on hovering the cursor the background changes.


**Day 3
Important Things Learnt**
1} React Hook: special tool that allows you to add extra features to your functional components. Functional components are just simple JavaScript functions that help you display parts of a webpage. But sometimes, you need more than just displaying things—you need your app to remember things or do something when something else happens. This is where hooks come in!

Example: 
a} useState- Imagine you are building a simple counter. Each time you click a button, you want the number on the screen to increase. Normally, a simple function can’t remember what the number was before the button was clicked. It would reset the number every time. You need some way for your function to remember things across clicks.
That’s what the useState hook does! It gives your component a memory—it lets your component store and remember values, like the number of clicks.
Synatx:
```js
const [stateVariable, setStateFunction] = useState(initialValue);
```

```js
import React, { useState } from 'react';

function Counter() {
  // useState lets us create a variable (count) that React remembers between renders.
  const [count, setCount] = useState(0); // Start count at 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
Code explanation of Navbar.jsx code:


2} React Router DOM: 
```jsx
<Routes>:
```
The Routes component is used to define the routes for the app. It wraps around different Route components.

3} Padding toh chahiye hogi sari jagah to make space.

4} Animations:
```css
@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
```
keyframes - used for animations in css
0%:
This indicates the starting point of the animation. The percentage (0%) signifies that this is the beginning of the animation timeline. It means "at the very start of the animation.

One more example:

```css
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  50% {
    opacity: 0.5;       
    transform: translateY(10px) scale(1.05);
  }
  100% {
    opacity: 1;            
    transform: translateY(0) scale(1); 
  }
}
```
0% (Start):
opacity: 0;: The text is invisible at the start.
transform: translateY(20px) scale(0.8);: The text starts 20 pixels lower than its final position and is slightly smaller (80% of its original size).

50% (Midway):
opacity: 0.5;: The text is halfway visible.
transform: translateY(10px) scale(1.05);: The text moves slightly upwards (10 pixels) and scales up to 105% of its original size, giving a bounce effect.

100% (End):
opacity: 1;: The text is fully visible.
transform: translateY(0) scale(1);: The text is at its final position and size.


Easing Functions (ease)
Easing functions control the speed of an animation over its duration. They define how the intermediate frames of the animation are calculated, creating different effects. Here are a few common types of easing:

ease: This is a default easing function that starts the animation slowly, accelerates in the middle, and then slows down at the end. It creates a smooth transition.

linear: The animation progresses at a constant speed from start to finish.

ease-in: The animation starts slowly and speeds up toward the end.

ease-out: The animation starts quickly and slows down toward the end.

ease-in-out: The animation starts slowly, speeds up in the middle, and then slows down again at the end.

The forwards value is a part of the animation-fill-mode property. It controls what happens to the animated element after the animation ends.
forwards: The animated element retains the styles of the last keyframe after the animation ends. This means that if your animation ends at a specific state, the element will remain in that state instead of reverting back to its original position or styles.


**Day 4
Important Things Learnt**
1} Map in JS:
The map() function is a higher-order array method in JavaScript that allows you to iterate over an array, apply a function to each element, and return a new array based on the results of that function. It's a more concise and functional approach to transforming data in arrays.

Eg: 
```jsx
{menu_list.map((item, index) => {
  return (
    <div key={index} className="explore-menu-list-item">
      <img src={item.menu_image} alt="" />
      <p>{item.menu_name}</p>
    </div>
  )
})}
```
What is menu_list?
In simple terms, menu_list.map() is used to loop through an array of data called menu_list. For each item in this array, it creates a new piece of HTML (in this case, a <div> element) and displays it on the screen.
```js
{
  menu_image: 'path_to_image.jpg',
  menu_name: 'Item Name'
}
```
map() goes through each object (each item) in the menu_list array one by one and creates new elements based on that data.

Example with Dummy Data:
If menu_list contains data like this:

```js
const menu_list = [
  { menu_image: 'pizza.jpg', menu_name: 'Pizza' },
  { menu_image: 'burger.jpg', menu_name: 'Burger' },
  { menu_image: 'pasta.jpg', menu_name: 'Pasta' }
];
The map() function will transform it into the following JSX:
```

```jsx
<div key={0} className="explore-menu-list-item">
  <img src="pizza.jpg" alt="" />
  <p>Pizza</p>
</div>

<div key={1} className="explore-menu-list-item">
  <img src="burger.jpg" alt="" />
  <p>Burger</p>
</div>

<div key={2} className="explore-menu-list-item">
  <img src="pasta.jpg" alt="" />
  <p>Pasta</p>
</div>
```
So, it will output a list of three items: Pizza, Burger, and Pasta.

<div key={index} className="explore-menu-list-item">:

This creates a <div> element for each menu item.
The key={index} part is important. In React, when you loop through an array and create elements like this, each element needs a unique key. We use index (the position in the array) as the key. This helps React efficiently manage and update the list.
className="explore-menu-list-item": This assigns a CSS class to the <div>. This class will be used to style the element with CSS (like setting width, colors, etc.).
<img src={item.menu_image} alt="" />:

This creates an image (<img>) element.
src={item.menu_image}: This sets the source of the image. It pulls the image from item.menu_image. For example, if the current item is the pizza, item.menu_image would be 'pizza.jpg', and this line of code would display the pizza image.
alt="": This is for accessibility (used by screen readers) and is a required attribute for images. In this case, it's empty, but typically it should describe the image.
<p>{item.menu_name}</p>:

This creates a paragraph (<p>) element that displays the name of the menu item.
{item.menu_name}: This pulls the name of the food from item.menu_name. If item is { menu_image: 'pizza.jpg', menu_name: 'Pizza' }, then item.menu_name will display 'Pizza' inside the paragraph.

2} 
```css
.explore-menu-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    text-align: center;
    margin: 20px 0px;
    overflow-x: scroll;
}
```
margin: 20px 0px;:

This adds 20px of margin on the top and bottom of the .explore-menu-list container.
No horizontal margin is applied (0px on the left and right).

overflow-x: scroll;:
This makes the container scrollable horizontally if the content (menu items) inside it overflows the container's width.
If the container has too many menu items to fit on the screen, a horizontal scrollbar will appear, allowing the user to scroll left and right to view more items.


3) Very very important react hooks:
used to give memory to components
one way we have used it in Exploremenu.jsx and home.jsx is:

```jsx
const [category,setCategory] = useState("All");
<ExploreMenu category={category} setCategory = {setCategory}/>

```
Think of useState as a way to create a variable (category) that can change over time, and setCategory is how we update that value.


4) Object Destructuring:
Basic Example:
```js
const fruits = ['apple', 'banana', 'orange'];

// Traditional way
let firstFruit = fruits[0];
let secondFruit = fruits[1];
let thirdFruit = fruits[2];

// With array destructuring
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(thirdFruit);  // Output: 'orange'
```

Skipping items:
```js
const colors = ['red', 'green', 'blue'];

// Skip the first item
const [, secondColor] = colors;

console.log(secondColor);  // Output: 'green'
```
Setting Default:
```js
const numbers = [10];

// Destructure and set default value for the second element
const [firstNum, secondNum = 5] = numbers;

console.log(firstNum);   // Output: 10
console.log(secondNum);  // Output: 5
```
Nested object Destructuring
```js
const user = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// Destructure nested object properties
const { name, address: { city, zip } } = user;

console.log(name);  // Output: 'Alice'
console.log(city);  // Output: 'New York'
console.log(zip);   // Output: '10001'
```
Destructuring in function parameter:
```js
// Example of a function using destructuring for its parameter
const printPersonDetails = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'Bob', age: 25 };
printPersonDetails(person);  // Output: 'Name: Bob, Age: 25'
```
Key difference in array and object destructuring :
In array order matters.
In object it doesnt
eg:
```js
const { a, b } = { b: 2, a: 1 }; // a = 1, b = 2 (order doesn't matter)
```
5) Active and other usestate hooks:
```jsx
onClick={myFunction}
```
iske jagah we used direct function daalke:
```jsx
onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
```
setCategory: This is a function that updates the state category. It takes a new value as an argument to set the state.

prev => prev === item.menu_name ? "All" : item.menu_name: This is another arrow function that takes prev as its argument. prev refers to the previous state of the category.

If prev (the current category) equals item.menu_name, it changes the category to "All".
If not, it sets the category to the current item.menu_name

same as:
```jsx
onClick={() => {
  if (category === item.menu_name) {
    setCategory("All");
  } else {
    setCategory(item.menu_name);
  }
}}
```
6) Active classname setting:
```jsx
<img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
```
If the current category is the same as the menu_name of the item, the "active" class is added to the image (e.g., className="active").
Otherwise, no class is added (e.g., className="").
This allows for conditional styling, like highlighting the selected menu item.
