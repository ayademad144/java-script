let nums = [1, 3, 7, 2, 4];
let largest = 0;
let x = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] > largest) {
      largest = n[i];
    }
  }
  console.log(largest);
};

x(nums);
