import { Button } from "../button";

export function Form() {
  return (
    <form action="">
      <div>
        <label htmlFor="task">Adicione uma nova atividade</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Qual sua nova atividade?"
          required
        />
      </div>
      <div>
        <label htmlFor="time">Tempo da atividade</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          placeholder="Adicione o tempo da atividade?"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>criar</Button>
    </form>
  );
}