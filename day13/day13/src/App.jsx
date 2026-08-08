```jsx
import Button from "./components/FunctionalComponent";
import { LeftArrow, RightArrow } from "./components/FunctionalComponentTwo";
import ProfileList from "./components/Props";

const name = "Amay";
const isLoggedIn = false;

function App() {
  return (
    <>
      {/* JSX Rule 1: Return one parent element */}
      <h2>Hello</h2>
      <h2>Hello again</h2>

      {/* JSX Rule 2: Every tag must be closed properly */}
      <p>Error</p>
      <input type="text" />

      {/* JSX Rule 3: Use camelCase for attributes */}
      <button onClick={() => alert("Clicked")} onMouseOver={() => console.log("Mouse over")}>
        Click
      </button>

      {/* JSX Rule 4: Embedding JavaScript with curly braces */}
      <h3>Hello, {name}</h3>

      {/* JSX Rule 5: Use expressions, not statements */}
      <p>{isLoggedIn ? "Welcome back" : "Please Login"}</p>

      {/* Functional Component */}
      <Button />

      {/* Functional Components with named exports */}
      <LeftArrow />
      <RightArrow />

      {/* Props Component */}
      <ProfileList />
    </>
  );
}

export default App;
```
