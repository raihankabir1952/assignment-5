# 🚀 Tech Explorer

Tech Explorer is a modern web application where users can explore different technologies and learn about their category, description, rating, difficulty level, and popularity badge.
## 🛠️ Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
## ✨ Features

- 🔍 Explore different technologies with detailed information.
- 🗂️ Filter technologies by category such as Frontend, Backend, Database, and DevOps.
- ⭐ View technology ratings, difficulty levels, icons, and badges.

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.  
It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent to a child.  
**State** is data managed inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and change data in a component.  
I used it to manage technology and selected technology data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.  
I used it to load the JSON data when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.  
It helps React update the list correctly.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when no technology is selected.

```jsx
{selectedTech.length === 0 && (
  <p>No technologies selected.</p>
)}
