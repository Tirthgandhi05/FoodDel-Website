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