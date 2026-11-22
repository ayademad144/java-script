function success() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
}

success().then((message) => console.log(message));

