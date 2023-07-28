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
      console.log(cur[j]);

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

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;
