import { useState } from 'react';
import Logo from './Logo';
import Stats from './Stats';
import Form from './Form';
import PackageList from './PackageList';

// const listData = [
//   { id: 1, task: 'passport', qty: 1, done: false },
//   { id: 2, task: 'T-Shirts', qty: 5, done: false },
//   { id: 3, task: 'camera', qty: 1, done: false },
//   { id: 4, task: 'pants', qty: 5, done: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems(items => [...items].filter(item => item.id !== id));
  }
  function handleUpdateItem(id) {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, done: !item.done } : item))
    );
  }
  function handleClearLists() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearLists={handleClearLists}
      />
      <Stats items={items} />
    </div>
  );
}
