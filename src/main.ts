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

// console.log(quickSort(array));

// TWO SUM

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
const nums = [3, 3];
const target = 6;

function twoSums(array: number[], target: number) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(twoSums(nums, target));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;
