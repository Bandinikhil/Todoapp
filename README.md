# Offline TODO App

This is a simple offline TODO app built with React.js. It allows you to create, complete, and reset todos. The app preserves the state even when the page is refreshed or the browser is closed, thanks to the use of localStorage.

## Key Features

- Add new todos by typing in the input field and pressing Enter.
- Click on a todo to mark it as complete. Completed todos are moved to the bottom of the list.
- Active todos are displayed in order of creation (most recent on top).
- Completed todos are displayed in order of completion (most recent on top).
- Use the Reset button to clear all todos and return to the initial state.
- The app works offline and retains the state even after a page refresh or browser closure.

## Assumptions

- The app is designed to be used in modern web browsers such as Google Chrome and Mozilla Firefox.
- No authentication or user management features are required for this app.
- The app does not support editing or deleting individual todos. Once a todo is added, it cannot be modified or removed individually.
- The styling and design of the app are kept minimal.

## Unhandled Edge Cases

- Duplicate Todos: The app currently allows adding duplicate todos with the same text. If needed, additional logic can be implemented to prevent the addition of duplicate todos.
- Long Todo Text: The app does not handle long todo texts that may exceed the width of the container. Styling enhancements or truncation logic can be added to handle long texts gracefully.
- Responsive Design: The current CSS styles are optimized for desktop screens. 

## Usage

1. Clone the repository:

```bash
git clone https://github.com/Bandinikhil/Todoapp.git


Navigate to the project directory:
bash
Copy code

cd react-app

Install dependencies:
bash
Copy code
npm install

Start the development server:
bash

Copy code
npm start

Open the app in your browser at

 https://todoappe.netlify.app/

Technologies Used
React.js: A JavaScript library for building user interfaces.
localStorage: Web storage API used to store and retrieve the todos locally.



