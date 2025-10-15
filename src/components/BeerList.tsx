import React from 'react';
import Beer from './Beer';

type BeerListProps = {
  beers: string[];
  onRemove?: (id: number) => void;
};

export default function BeerList({ beers, onRemove }: BeerListProps) {
  return (
    <ul>
      {beers.map((b, i) => (
        <Beer key={i} id={i} name={b} onRemove={onRemove} />
      ))}
    </ul>
  );
}
