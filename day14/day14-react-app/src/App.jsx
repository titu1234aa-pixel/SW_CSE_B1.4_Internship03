import './App.css'
import SimpleList from "./components/ListOne";
import UserList from "./components/ListTwo";
import ProductListDemo from "./components/ListThree";
import CounterHook from "./components/HookOne";

function App() {

return (
    <>
      <SimpleList />
      <UserList />
      <ProductListDemo />

      <CounterHook/>
    </>
  )
}
export default App