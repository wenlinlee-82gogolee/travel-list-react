export default function Stats({ items }) {
  if (!items.length) {
    return <div className="stats">Start Adding Some Items...</div>;
  }
  const itemsNum = items.length;
  const packedItems = items.filter(item => item.done === true).length;
  const donePercent = Math.round((packedItems / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {donePercent === 100
          ? 'All done!'
          : `You have ${itemsNum} items on your list, and you already packed ${packedItems} items (${donePercent}%)`}
      </em>
    </footer>
  );
}
