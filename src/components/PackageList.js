import { useState } from 'react';
import Item from './Item';

export default function PackageList({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearLists,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'task') {
    sortedItems = [...items].sort((a, b) => a.task.localeCompare(b.task));
  }
  if (sortBy === 'packed') {
    sortedItems = [...items].sort((a, b) => Number(a.done) - Number(b.done));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="task">Sort by task order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={() => onClearLists()}>Clear Lists</button>
      </div>
    </div>
  );
}
