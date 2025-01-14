let x = 1; //global variable

const y = () => {
  let z = 2; //local variable
  console.log(x);
  console.log(z);
};

y();
console.log(x);
console.log(z);
