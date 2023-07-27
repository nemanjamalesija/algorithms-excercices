import './style.css';

// QUICK SORT
const array = [8, 3, 1, 5, 9, 2, 7, 4, 6];

function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const leftArray = array.filter((el) => el < pivot);
  const rightArray = array.filter((el) => el > pivot);

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort(array));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  </div>
`;
