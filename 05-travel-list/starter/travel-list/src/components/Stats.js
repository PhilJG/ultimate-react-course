export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <en>Start adding some items to your packing list</en>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <en>
        {percentage === 100
          ? "You got everything to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </en>
    </footer>
  );
}
