#Technologies used -
1. react
2. HTML
3. css
4. vite
5. typescript

#Features- 
1. Easy to use UI
2. add to stack
3. stack clearing

#Answer of the questions-
1. What is JSX, and why is it used in React?
- the HTML written in javascript, it enables use to write HTML in JS.

2. What is the difference between props and state?
-props are data passed from parent to child, state is used when a data is changed and needs to show the change 

3. What does the useState hook do, and where did you use it in this project?
- it stores changing data, I used it when I needed to show the change after an action(like button clicking)

4. What does the useEffect hook do, and why did you need it to load the JSON data?
-useEffect handles the data after rendering, I did not used it here.

5. Why does every item in a .map() list need a unique key prop?
-A unique key helps React identify each list item and update the correctly.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
- It means showing different data based on a condition;
as example - 
    {isSelected ? "Added to Stack" : "Add to Stack"}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- A parent passes data through props, and a child sends data back by calling a callback function passed through props
