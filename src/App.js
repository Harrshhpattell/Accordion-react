import "./App.css";
import { useState } from "react";
const faqs = [
  {
    title: "What is React?",
    text: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage rendering updates by utilizing a virtual representation of the DOM.",
  },
  {
    title: "What are React components?",
    text: "React components are modular, self-contained building blocks that encapsulate a portion of a user interface. They enable the construction of complex UIs by breaking them into manageable, reusable parts.",
  },
  {
    title: "What is JSX?",
    text: "JSX, or JavaScript XML, is a syntax extension for React. It lets developers write UI components using a syntax similar to HTML within their JavaScript code.",
  },
  {
    title: "What is the Virtual DOM?",
    text: "The Virtual DOM is a lightweight in-memory representation of the actual DOM. React uses it to optimize and batch updates, resulting in more efficient rendering of changes to the user interface.",
  },
  {
    title: "What is state in React?",
    text: "State in React refers to mutable data within a component that can influence its rendering and behavior. It enables components to manage dynamic content and respond to user interactions.",
  },
  {
    title: "What are props?",
    text: "Props, short for properties, are a way to pass data from parent to child components. They make components flexible and reusable, allowing dynamic content and configuration.",
  },
  // Add more questions and answers as needed
];

function App() {
  return (
    <div className="App">
      <Header />
      <Accordion data={faqs} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Accordion</h1>
    </header>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((list, i) => (
        <AccordionItems
          key={list.title}
          num={i}
          title={list.title}
          text={list.text}
        />
      ))}
    </div>
  );
}

function AccordionItems({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={isOpen ? "active" : "item"} onClick={handleToggle}>
      <div className="head">
        <p>{num <= 9 ? `0${num + 1}` : num + 1}</p>
        <p className={isOpen ? "open" : "close"}>
          {isOpen ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
        </p>
      </div>
      <p className="title">{title}</p>
      {isOpen && <p className="text">{text}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h4>Harsh Patel</h4>
    </footer>
  );
}

export default App;
