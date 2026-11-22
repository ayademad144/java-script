let divide = (num) => {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("divisible by both");
  } else {
    console.log("not divisible by both");
  }
};
divide(15);
