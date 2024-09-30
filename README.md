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