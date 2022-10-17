import React from 'react';

function choice(items) {
  const randIdx = Math.floor(Math.random() * (items.length + 1));
  return items[randIdx];
}

function remove(items, item) {
  const itemIdx = items.indexOf(item);
  itemIdx === -1 ? undefined : items.splice(itemIdx, 1);
}

export { choice, remove };