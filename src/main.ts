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
const nums = [3, 2, 3];
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

// console.log(twoSumsBetter(nums, target));

//  Longest Substring Without Repeating Characters

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

function lengthOfLongestSubstring(str: string) {
  let maxLength = 0;
  let start = 0;
  const charSet = new Set();

  for (let end = 0; end < str.length; end++) {
    while (charSet.has(str[end])) {
      console.log('while loop deleting ' + str[end] + ' i is ' + end);
      charSet.delete(str[start]);
      start++;
    }
    console.log('for loop, adding ' + str[end] + ' i is ' + end);
    charSet.add(str[end]);
    maxLength = [...charSet].length;
  }

  return maxLength;
}

// console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3

// valid parentheses
function isValid(s: string) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      console.log(stack);
    } else {
      const lastOpening = stack.pop();

      if (
        (char === ')' && lastOpening !== '(') ||
        (char === ']' && lastOpening !== '[') ||
        (char === '}' && lastOpening !== '{')
      ) {
        return false; // Invalid
      }
    }
  }
  console.log(stack);
  return stack.length === 0; // The stack should be empty if all parentheses are valid
}

// const s = '([{()()}])';
// console.log(isValid(s));

// CONTAINS DUPLICATE
function containsDuplicate(nums: number[]) {
  const set = new Set();

  for (let i = 0; i <= nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }
  if (set.size > 0) return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;
