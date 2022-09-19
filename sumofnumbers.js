const test = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++
  }
  return total;
}

function sumRecursive(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    return nums[0] + sumRecursive(nums.slice(1, nums.length));
  }
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {return memo + num}, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursive(test));
console.log(sumTheSimpleWay(test));
