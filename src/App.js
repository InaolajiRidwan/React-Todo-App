import "./App.css";
import TodoList from "./Component/TodoList";
// import { User } from "./Component/User";
// import {Planets} from "./Component/Planets";
// import {Usestat} from "./Component/Usestat";

function App() {
  const users = [
    { name: "flame", age: 32 },
    { name: "amina", age: 28 },
    { name: "afiyah", age: "7month" },
  ];
  return (
    <div className="App">
      {/* {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })} */}
      {/* <Planets />
      <Usestat /> */}

      <TodoList />
    </div>
  );
}

export default App;
