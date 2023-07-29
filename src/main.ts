import './style.css';

// QUICK SORT

function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const leftArray = array.filter((el) => el < pivot);
  const rightArray = array.filter((el) => el > pivot);

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

function quickSortares(array: number[]): number[] {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element is already sorted
  }

  const left = [];
  const right = [];
  let pivot = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    if (array[i] > pivot) right.push(array[i]);
  }

  return [...quickSortares(left), pivot, ...quickSort(right)];
}

// console.log(quickSortares([2, 1, 4, 5, 9, 22, 11, 6, 55, 3]));

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

// console.log(containsDuplicate([1, 2, 3, 4]));

// 9. Palindrome Number

// Given an integer x, return true if x is a palindrome and false otherwise.

function isPalindrome(n: number) {
  const nArray = n.toString().split('');
  const nArrayReverse = [...nArray].reverse();

  for (let i = 0; i <= nArray.length; i++) {
    if (nArray[i] !== nArrayReverse[i]) return false;
  }

  return true;
}

// console.log(isPalindrome(121));

// IS PALINDROME STRING

function isPalindromeString(s: string) {
  const alphanumericOnly = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = alphanumericOnly.split('').reverse().join('');
  return alphanumericOnly === reversed;
}

// console.log(isPalindromeString('A man, a plan, a canal: Panama'));

// IS ANAGRAM
function isAnagram(s: string, t: string) {
  const counter = [];
  const sArray = s.split('').sort();
  const tArray = t.split('').sort();

  if (s.length !== t.length) return false;

  for (let i = sArray.length - 1; i >= 0; i--) {
    if (sArray[i] === tArray[i]) {
      counter.push(true);
    } else {
      counter.push(false);
    }
  }

  return counter.every((el) => el === true);
}

// console.log(isAnagram('anagram', 'nagaram'));

// LONGEST COMMON PREFIX
//Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs: string[]) {
  let cur = strs[0];
  let temp = '';

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] == strs[i][j]) {
        temp += cur[j];
      } else {
        break;
      }
    }
    cur = temp;
    temp = '';
  }
  return cur;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// MINIMUM SIZE SUBARAY SUM
// Input: target = 7, nums = [2,3,1,2,4,3]
//Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

function minSubArrayLength(target: number, nums: number[]) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  console.log(nums);

  for (let right = 0; right < nums.length; right++) {
    console.log(`index is ${right}`);
    console.log(`adding number ${nums[right]}`);
    sum += nums[right];
    console.log(`sum is ${sum}`);
    while (sum >= target) {
      console.log('sum is greater than target');
      console.log(`min length before comparison is ${minLength}`);
      minLength = Math.min(minLength, right - left + 1);
      console.log(`min length after comparison is ${minLength}`);
      console.log(`sum before comparison is ${sum}`);
      sum -= nums[left];
      console.log(`removing ${nums[left]} from ${sum}`);
      left++;
      console.log(`sum after comparison is ${sum}`);
    }
  }

  return minLength;
}

// console.log(minSubArrayLength(7, [2, 3, 1, 2, 4, 3]));

// function minSubArraySum(nums: number[], size: number) {
//   let currSum = 0;
//   let maxSumSeen = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     currSum += nums[i];

//     console.log(`current index is ${i}`);
//     console.log(nums[i]);

//     if (i >= size - 1)
//       console.log(`index is ${i}, size  is ${size - 1}, entering if block`);

//     if (i >= size - 1) {
//       console.log(`new current sum is ${currSum}`);
//       console.log('max sum seen before comparison is ' + maxSumSeen);
//       maxSumSeen = Math.max(currSum, maxSumSeen);
//       console.log('max sum seen after comparison is ' + maxSumSeen);
//       console.log('current sum before subtraction ' + currSum);
//       console.log(`removing ${nums[i - (size - 1)]} from ${currSum}`);
//       currSum -= nums[i - (size - 1)];

//       console.log('current sum after subtraction ' + currSum);
//     }
//   }

//   return maxSumSeen;
// }

// console.log(minSubArraySum([2, 3, 1, 2, 4, 3], 3));

function minArraySum(nums: number[], target: number) {
  let maxSumSeen = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (i >= target - 1) {
      maxSumSeen = Math.max(maxSumSeen, currentSum);

      currentSum -= nums[i - (target - 1)];
    }
  }

  return maxSumSeen;
}

// console.log(minArraySum([2, 3, 1, 2, 4, 3], 3));

// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array; // Base case: array with 0 or 1 element is already sorted
//   }

//   // Split the array into two halves
//   const middle = Math.floor(array.length / 2);
//   const leftHalf = array.slice(0, middle);
//   const rightHalf = array.slice(middle);

//   // Recursively sort each half
//   const sortedLeft = mergeSort(leftHalf);
//   const sortedRight = mergeSort(rightHalf);

//   // Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   const mergedArray = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Merge the two sorted arrays into a single sorted array
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       mergedArray.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       mergedArray.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add any remaining elements from the left and right arrays
//   while (leftIndex < left.length) {
//     mergedArray.push(left[leftIndex]);
//     leftIndex++;
//   }

//   while (rightIndex < right.length) {
//     mergedArray.push(right[rightIndex]);
//     rightIndex++;
//   }

//   return mergedArray;
// }

// // Example usage:
// const arr = [38, 27, 43, 3, 9, 82, 10];
// const sortedArr = mergeSort(arr);
// console.log('Original array:', arr);
// console.log('Sorted array:', sortedArr);

// BUDDY STRINGS
// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

function buddyStrings(s: string, goal: string) {
  if (s.length !== goal.length || s.length <= 1) return false;
  if (s === goal) return new Set(s).size < s.length;

  let buddy = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) buddy.push(i);
  }

  if (buddy.length !== 2) return false;
  if (s[buddy[0]] !== goal[buddy[1]] || s[buddy[1]] !== goal[buddy[0]])
    return false;

  return true;
}

console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));

// aaaaaaba c

/* 
i + 1
a => a
a => a
a => a
a => a
a => a
a => a



*/

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;
