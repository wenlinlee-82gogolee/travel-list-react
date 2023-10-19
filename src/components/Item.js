export default function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.done}
        checked={item.done}
        onChange={() => {
          onUpdateItem(item.id);
        }}
      />
      <span style={item.done ? { textDecoration: 'line-through' } : {}}>
        {item.qty} {item.task}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
