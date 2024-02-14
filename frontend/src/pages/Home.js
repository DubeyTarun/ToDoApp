import { useEffect } from "react";
import TodoDetails from "../components/TodoDetails";
import ToDoForm from "../components/ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDo } from "../reduxToolkit/slices/todoSlice";

const Home = () => {
  const { todos, isAddingTodo, isError } = useSelector(
    (state) => state.todoSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchToDo());
  }, [dispatch]);

  return (
    <div className="home">
      <ToDoForm isLoading={isAddingTodo} />
      {!isError && (
        <div className="todos">
          {todos &&
            todos.map((todo) => {
              return <TodoDetails key={todo._id} todo={todo} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
