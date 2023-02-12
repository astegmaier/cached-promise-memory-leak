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
  promiseCache.push(myPromise);
  // Instead of returning myPromise, we returned a clone
  // This solves the leak - but why?
  const clone = myPromise.then();
  return clone;
}
