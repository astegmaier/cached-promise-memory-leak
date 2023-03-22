document.getElementById("make-class-leak").onclick = () => {
  const myClassInstance = new MyClass();
  myClassInstance.myAsyncMethod();
};

class MyClass {
  async myAsyncMethod() {
    const result = await getAndCachePromise();
    console.log("myAsyncMethod ran with promise result: ", result);
  }
}

const promiseCache = [];

function getAndCachePromise() {
  const myPromise = new Promise((resolve) => resolve("<PromiseResult>"));
  promiseCache.push(myPromise.then()); // <-- we copy the promise before storing it, which fixes the leak.
  return myPromise;
}
