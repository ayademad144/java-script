const check = (num) => {
  if (num) {
    return `${num} is a truthy value `;
  } else {
    return `invalid ,  ${num} is not a truthy value`;
  }
};

console.log(check([]));