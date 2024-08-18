import LoginStatus from './auth/LoginStatus';
import {useContext} from "react";
import TasksContext from "./tasks/tasksContext";
import useTasks from "./tasks/useTasks";
import useCounterStore from "./counter/counterStore";

const NavBar = () => {
  const {tasks} = useTasks();
  const counter = useCounterStore(selector => selector.counter);

  console.log("Render NavBar")
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
