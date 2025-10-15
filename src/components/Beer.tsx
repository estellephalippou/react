import React from 'react';

type BeerProps = {
  id: number;
  name: string;
  onRemove?: (id: number) => void;
};

export default function Beer({ id, name, onRemove }: BeerProps) {
  return (
    <li>
      {name}
      {onRemove && (
        <button onClick={() => onRemove(id)} style={{ marginLeft: 8 }}>
          Remove
        </button>
      )}
    </li>
  );
}
