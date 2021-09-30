import React, { ReactElement, ReactNode } from "react";
import "./App.css";

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithElement({ title }: { title: ReactNode }) {
  return <h1>{title}</h1>;
}

function Dialog({ header, children }: { header?: () => ReactNode; children: () => ReactNode }) {
  return (
    <div>
      {header && (
        <div>
          <strong>{header?.()}</strong>
        </div>
      )}
      {children()}
    </div>
  );
}

function List<ListItem>({ items, render }: { items: ListItem[]; render: (item: ListItem) => ReactNode }) {
  return (
    <ul>
      {items.map((item, index) => {
        <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
}

function App() {
  return (
    <div className='App'>
      <Heading title='Something different'></Heading>
      <HeadingWithElement title={<div>Element</div>}></HeadingWithElement>
      <HeadingWithElement title={"Plain text"}></HeadingWithElement>

      <Dialog header={() => <span>True content</span>}>{() => "Content from a function"}</Dialog>

      <List items={[1, 2, 3, 4, 5]} render={(item: number) => `Number is ${item}`} />
    </div>
  );
}

export default App;
