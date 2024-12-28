import { Form } from "./components/form";
import { List } from "./components/list";

export function App() {
  return (
    <div className="app">
      <h1>Alura studies</h1>
      <div className="form-list">
        <Form />
        <List />
      </div>
    </div>
  );
}
