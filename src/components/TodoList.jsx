import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sotredTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  const isEmpty = todos.length ? styles.list : "";
  return (
    <div className={isEmpty}>
      {sotredTodos.map((item) => (
        <TodoItem
          item={item}
          key={item.name}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
