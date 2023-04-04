function makeCake() {
  return new Promise((resolve, reject) => {
    const isHealthy = prompt("Is Kayo healthy? (Type 'yes' or 'no')");
    if (isHealthy.toLowerCase() === "yes") {
      const numCakes = prompt("How many cakes can Kayo Make?");
      resolve(`I have ${numCakes} cakes And I am happy`);
    } else {
      reject("There is no cake And I am sad");
    }
  });
}

makeCake()
  .then((message) => {
    console.log(message);
    console.log("Let's have a party!");
  })
  .catch((error) => {
    console.error(error);
    console.log("We'll still have a party, but without cake.");
  });