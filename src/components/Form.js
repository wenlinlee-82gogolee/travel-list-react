import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [task, setTask] = useState('');
  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newItem = { task, qty, packed: false, id: Date.now() };

    onAddItems(newItem);

    setTask('');
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} onChange={e => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
