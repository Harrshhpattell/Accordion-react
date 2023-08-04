import { useState } from "react";

export default function Accordion({ data }) {
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
