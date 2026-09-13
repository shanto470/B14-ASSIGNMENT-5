# TechStack

TechStack is a simple web application where users can explore different technologies and create their own technology stack.

## Description

This project is made with React and TypeScript. Users can see different technologies, check their details, add them to their stack, and remove them whenever they want.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* Vite
* JSON

## Features

* View different technologies with their name, category, difficulty, rating, and description.
* Add technologies to your own stack and see which ones are already selected.
* Remove a selected technology or remove all technologies from the stack.



## 1. What is JSX, and why is it used in React?

JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data inside a component and the state can be changed.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage state in React.

In my project, I used it for storing the selected technologies.

```tsx
const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([]);
```

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used for running some code after a component renders.

It can be used to load data from a JSON file when the component starts.

In my project, I used Promise and Suspense to load the JSON data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

example:

```tsx
technologies.map(technology => (
    <TechnologyCard
        key={technology.id}
        technology={technology}
    />
))
```

Here, `technology.id` is used as the key.

## 6. What is conditional rendering?

Conditional rendering means showing different things based on a condition.

I used it for the selected stack. If there is no selected technology, I show:

```tsx
No technologies selected yet.
```

Otherwise, I show the selected technologies.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from parent to child using props.

For example:

```tsx
<TechnologyCard
    technology={technology}
    selectedTechnologies={selectedTechnologies}
    setSelectedTechnologies={setSelectedTechnologies}
/>
```

The child can use the function received from the parent to update the parent's state.

```tsx
setSelectedTechnologies([
    ...selectedTechnologies,
    technology
]);
```
