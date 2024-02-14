import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../reduxToolkit/thunks/todoThunks";
import useFormattedDate from "../hooks/useFormattedDate";
import useRelativeTime from "../hooks/useRelativeTime";

const TodoDetails = ({ todo }) => {
  const dispatch = useDispatch();

  const todoDeleteHandler = (e) => {
    dispatch(deleteToDo(todo._id));
  };
  const formattedDueDate = useFormattedDate(todo.dueDate);
  const relativeCreatedAtDate = useRelativeTime(todo.createdAt);

  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <FontAwesomeIcon
        onClick={todoDeleteHandler}
        icon={faTrashAlt}
      ></FontAwesomeIcon>
      <p>
        <strong>Assigned To: </strong>
        {todo.assignedTo?.join(", ")}
      </p>
      <p>
        <strong>Due date: </strong>
        {formattedDueDate}
      </p>
      <p>
        <strong>Added On: </strong>
        {relativeCreatedAtDate}
      </p>
    </div>
  );
};

export default TodoDetails;
