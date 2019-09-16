# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a Javascript library and the main problem it solves is the poor performance of DOM operations. React solves this problem without reloading the page and updating only the changed nodes with the help of a virtual DOM and Hot Reloading.

2. What does it mean to think in react?

Thinking in react means that when building applications we should think about how React re-renders the UI on any state changes, code reusable components and pass data down via props.

3. Describe state.

State is the applications' way to store data and update the UI accordingly without reloading the page.

4. Describe props.

Props or `properties` are the different parameters we can send to components in order to pass down data from the parent component and render the application according to that data.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects when we're using `useEffect` run after the DOM is rendered and also after any of the variables in the array (second parameter) are updated, so if we want to sync effects with a component we need to pass its state or props in that array.