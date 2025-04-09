import { MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;

  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(i) {
    const result = [
      [], //  -
      [], //  \
      [], //  /
      [], //  |
    ];

    for (let j = 0; j < sequenceSize; j++) {
      result[0].push(j - gap + i);
      result[1].push(fieldSize * (j - gap) + (j - gap) + i);
      result[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      result[3].push(fieldSize * (j - gap) + i);
    }
    const x = i % fieldSize;
    if (x < gap || x >= fieldSize - gap) {
      result.shift();
      result.shift();
      result.shift();
    }

    return result;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);

      const winnerIndexes = indexRows.find((row) => compareElements(row));
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }
  return undefined;
}
