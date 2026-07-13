const myPromise = new Promise((resolve, reject) => {
  let result = "failed";
  // console.log("Toi di thi dai hoc la da do~");
  if (result === "pass") {
    resolve("xin bo me mua xe oto");
  } else {
    reject("di hoc nghe");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("vui ve voi quyet dinh cua minh!");
  });

const myFunction = async () => {
  const data = await myPromise();
};
