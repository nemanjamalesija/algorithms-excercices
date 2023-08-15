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
// console.log(quickSort(array));

function quickSortares(array: number[]): number[] {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element is already sorted
  }

  const left = [];
  const right = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return [...quickSortares(left), pivot, ...quickSort(right)];
}
// console.log(quickSortares([2, 1, 4, 5, 9, 22, 11, 6, 55, 3]));

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

// VALID PARENTHESES
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
// console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));

// MAJORITY ELEMENT
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums: number[]) {
  const setter = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!setter.has(nums[i])) setter.set(nums[i], 1);
    else {
      setter.set(nums[i], setter.get(nums[i]) + 1);
    }
  }
  return [...setter.entries()].sort((a, b) => b[1] - a[1])[0][0];
}
// console.log(majorityElement([6, 5, 5]));

// LONGEST PALINDROMIC SUBSTRING
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

function longestPalindrome(s: string) {
  const array = [];

  if (s.length === 1) return s;
  if (s.length === 2 && s.charAt(0) !== s.charAt(1)) return s.charAt(0);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length + 1; j++)
      if (
        s.split('').splice(i, j).join('') ===
        s.split('').splice(i, j).reverse().join('')
      ) {
        array.push(s.split('').splice(i, j).join(''));
      }
  }

  return array.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}
////////
function binnarySearch(nums: number[], target: number) {
  let lo = 0;
  let hi = nums.length;

  while (lo < hi) {
    let middle = Math.floor(lo + (hi - lo) / 2);

    if (nums[middle] === target) return true;
    else if (nums[middle] < target) {
      lo = middle + 1;
    } else if (nums[middle] > target) hi = middle;
  }
  return false;
}
// console.log(binnarySearch([1, 2, 3, 4, 5, 6], 6));

function findBreakCrystalBall(breaks: boolean[]) {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = i; j <= i + jumpAmount && j <= breaks.length; j++) {
    if (breaks[j]) return j;
  }

  return false;
}

// console.log(
//   findBreakCrystalBall([false, false, false, false, true, true, true])
// );

function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
}

// console.log(bubbleSort([1, 3, 2, 6, 4, 10, 7, 5]));

// GROUP ANAGRAMS
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs: string[]) {
  const newStrs = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    newStrs.push(strs[i].split('').sort().join(''));
  }

  for (let j = 0; j < newStrs.length; j++) {
    if (!map.has(newStrs[j])) {
      map.set(newStrs[j], [strs[j]]);
    } else {
      map.get(newStrs[j]).push(strs[j]);
    }
  }
  return Array.from(map.values());
}
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }

  return arr;
}
// console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

function insertionSortWhile(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];

      j--;
    }
    arr[j + 1] = current;
    j--;
  }
  return arr;
}
// console.log(insertionSortWhile([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));

function fibonacci(n: number): number {
  if (n === 2 || n === 1) return 1;
  else if (n === 0) return 0;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(3));

function fibonacciLoop(n: number) {
  const sequence = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[n];
}

// console.log(fibonacciLoop(10));

function nestedAdd(input: any) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      sum += nestedAdd(input[i]);
    } else {
      sum += input[i];
    }
  }

  return sum;
}
// console.log(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]));

function factorialRecursion(n: number): number {
  if (n === 1) return n * 1;

  return n * factorialRecursion(n - 1);
}

// console.log(factorialRecursion(5));
function mergeSort(array: number[]) {
  if (array.length <= 1) {
    return array; // Base case: array with 0 or 1 element is already sorted
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort each half
  console.log(leftHalf + ' left half');
  console.log(rightHalf + ' right half');
  const sortedLeft = mergeSort(leftHalf) as number[];
  const sortedRight = mergeSort(rightHalf) as number[];

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]) {
  const results = [];

  console.log(left + ' merging left half');
  console.log(right + ' merging right half');

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  console.log('merging');
  console.log('returning ' + results.concat(left, right));

  return results.concat(left, right);
}

// Example usage:
// const arr = [1, 5, 7, 4, 2, 3, 6];
// const sortedArr = mergeSort(arr);
// console.log('Original array:', arr);
// console.log('Sorted array:', sortedArr);

//  Return the k most frequent elements. You may return the answer in any order.
// Input: (nums = [1, 1, 1, 2, 2, 3]), (k = 2);
// Output: [1, 2];

function topKFrequent(array: number[], k: number) {
  const map = new Map();
  let finalArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) map.set(array[i], [array[i]]);
    else {
      map.get(array[i]).push(array[i]);
    }
  }

  const newArr = [...map.values()].sort((a, b) => b.length - a.length);

  if (k > newArr.length) return -1;

  for (let j = 0; j < k; j++) {
    finalArr.push(newArr[j][0]);
  }

  return finalArr;
}
// console.log(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2));

// Product of Array Except Self
//Input: nums = [1, 2, 3, 4];
//Output: [24, 12, 8, 6];

// 128. Longest Consecutive Sequence
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

function longestConsecutive(nums: number[]) {
  if (nums.length === 0) return 0;

  const setSequence = new Set(nums);
  let maxSequenceLength = 0;

  for (const num of setSequence) {
    if (!setSequence.has(num - 1)) {
      // Only start counting for the smallest element of a sequence
      let currentNum = num;
      let currentSequenceLength = 1;

      while (setSequence.has(currentNum + 1)) {
        currentNum += 1;
        currentSequenceLength += 1;
      }

      maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
    }
  }

  return maxSequenceLength;
}
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// TWO SUM
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers: number[], target: number) {
  const arraySolution: number[] = [];

  // Iterate through the array using the loop variable 'i'
  for (let i = 0; i < numbers.length; i++) {
    // Reset the pointers 'left' and 'right' for each iteration
    let left = i;
    let right = numbers.length - 1;

    // Use a nested while loop to search for a pair that sums up to 'target'
    while (left <= right) {
      if (numbers[left] + numbers[right] === target) {
        arraySolution.push(left + 1);
        arraySolution.push(right + 1);
        return arraySolution; // Return the solution once found
      } else if (numbers[left] + numbers[right] > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return arraySolution; // Return an empty array if no solution is found
}
// console.log(twoSum([5, 25, 75], 100));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;
