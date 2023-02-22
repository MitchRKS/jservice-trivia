---
track:  "React"
title:  "First exercise"
week:  18
day:  1
type:  "lecture"
topics:  "JSX, ESM"
prereqs:  "JSX"
---

![React](https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124)

# React-first-exercises

# Setup

Fork the repo [here](https://git.generalassemb.ly/seirfx-hedwig/react-first-exercise)

Initialize Your Project

```bash

npm i

```

Run project

```bash

npm run dev

```

### Recap on Hooks

React Hooks are a new feature in React 16.8 that allow you to add state and other React features to functional components. Prior to React Hooks, only class components could have state and access to lifecycle methods. With hooks, you can now add state and other functionality to functional components, making them more versatile and easier to use.

There are several built-in hooks in React, including `useState`, `useEffect`, and `useContext`, among others. These hooks can be used to add state, perform side effects, and manage component behavior, without having to write a class component.

To use a hook in a functional component, you simply need to call the hook function at the top of your component. For example, to add state to a component, you would use the `useState` hook like this:

```javascript

const  [count,  setCount]  =  useState(0);

```

React Hooks are easy to use, and can help you write more concise, maintainable, and reusable code. They are a powerful tool that every React developer should be familiar with.

### Hook: `useState`

`useState` is a hook in React that allows you to add state variables to your functional components. State is data in your application that can change over time, and is used to manage the dynamic behavior of a React component.

The `useState` hook takes a single argument, which is the initial state value. It returns an array with two elements: the current state value, and a function to update the state. In this code, `const [count, setCount] = useState(0)` is destructuring the returned array into two variables, `count` and `setCount`.

The `count` variable is the current state value, and it can be used in your JSX code just like any other variable. The `setCount` function is used to update the state, and it takes a new state value as an argument. When you call `setCount`, React will re-render the component and update the UI to reflect the new state.

`useState` is a very useful and versatile hook that allows you to manage state in your React components, making it easier to build dynamic and interactive applications.

## Tasks

Inside of your `App` component include a component for each task like this

```jsx
function  App()  {
return (
  <div  className="App">
   <TaskOne />
   <TaskTwo />
   <TaskThree />
   <TaskFour />
   {/**.... */}
  </div>
 );
}
```

 1. Toggling a boolean value: Create a simple component that has a button. When the button is clicked, it should toggle a state variable between true and false. You can use the state variable to display either "ON" or "OFF" on the page.
 2. Simple counter: Create a component that has a button and displays a count. When the button is clicked, the count should increment by 1. You can use the state variable to store the count value.
 3. Input form: Create a component that has an input field and a button. When the user types into the input field, the state variable should update with the current value of the input field. When the button is clicked, the current value of the state variable should be displayed on the page.
 4. Color picker: Create a component that has multiple color buttons (e.g. red, green, blue). When a button is clicked, the state variable should update with the selected color, and the background color of the page should change to the selected color.

 5. Todo list: Create a component that has an input field and a "Add" button. When the user types into the input field and clicks the "Add" button, the state variable should update with the new value as an item in a list. The component should display the list of items and allow users to remove items from the list.

**Bonus**

1. Timer: Create a component that displays a countdown timer. The component should have a state variable for the remaining time in seconds, and use `useEffect` to update the timer every second until it reaches 0.

2. Window width: Create a component that displays the current width of the window. The component should use `useEffect` to update the state variable whenever the window is resized.

**SUPER MEGA BONUS**

1. User profile: Create a component that has input fields for a user's first name, last name, and email. The component should have a state variable that is an object representing the user's profile information. When the input fields are updated, the state variable should update to reflect the current values of the input fields.

2. Task manager: Create a component that allows the user to add tasks to a list and mark tasks as complete. The component should have a state variable that is an array of objects representing the tasks, with each object having a `description` and a `completed` property. When a task is added or marked as complete, the state variable should update to reflect the current state of the tasks. The component should display the list of tasks, with completed tasks crossed out.
