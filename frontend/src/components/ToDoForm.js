import { useState } from "react";
import Input from "../UI/Input";
import Checkbox from "../UI/Checkbox";
import Dropdown from "../UI/Dropdown";

import styles from "./ToDoForm.module.css";
import { useDispatch } from "react-redux";
import { addToDo } from "../reduxToolkit/thunks/todoThunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ToDoForm = ({ isLoading }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [assignees, setAssignees] = useState([]);
  const [assignor, setAssignor] = useState("");

  const dispatch = useDispatch();
  const MEMBERS = ["S K Dubey", "Rekha", "Shivani", "Tarun"];

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const dudeDateInputHandler = (e) => {
    setDueDate(e.target.value);
  };

  const assigneesCheckboxHandler = (option) => {
    setAssignees((prevAssignees) => {
      if (prevAssignees.includes(option)) {
        return prevAssignees.filter((name) => name !== option);
      } else {
        return [...prevAssignees, option];
      }
    });
  };

  const assignorDropdownHandler = (e) => {
    setAssignor(e.target.value);
  };

  const checkAllInputsValid = () => {
    const isTitleValid = !!title.trim();
    const isDueDateValid = !!dueDate.trim(); // Assuming dueDate is a string
    const areAssigneesValid = assignees.length > 0;
    const isAssignorValid = !!assignor.trim();

    return (
      isTitleValid && isDueDateValid && areAssigneesValid && isAssignorValid
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!checkAllInputsValid()) return; // Prevent form submission if inputs are not valid

    const todo = {
      title: title,
      dueDate: dueDate,
      assignedTo: assignees,
      addedBy: assignor,
    };
    dispatch(addToDo(todo));
    setTitle("");
    setDueDate("");
    setAssignees("");
    setAssignor("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2> Add To Do Below: </h2>
      <Input
        label="To do Title: "
        value={title}
        onChange={titleInputHandler}
        placeholder="Add the to do here"
      ></Input>

      <Input
        label="Due Date: "
        value={dueDate}
        type="date"
        onChange={dudeDateInputHandler}
        placeholder="Add the to do here"
      ></Input>

      <label className={styles.checkbox}>
        Who will do it?
        {MEMBERS.map((option) => {
          return (
            <Checkbox
              key={option}
              selected={assignees}
              option={option}
              onChange={assigneesCheckboxHandler}
            />
          );
        })}
      </label>

      <Dropdown
        question="Who is adding this to do?"
        value={assignor}
        options={MEMBERS}
        defaultOption="Please Select...."
        onChange={assignorDropdownHandler}
      />
      <button
        disabled={!title || !dueDate || !assignees.length || !assignor}
        type="submit"
      >
        Add&nbsp;
        {isLoading && (
          <FontAwesomeIcon icon={faSpinner} spinPulse></FontAwesomeIcon>
        )}
      </button>
    </form>
  );
};

export default ToDoForm;
