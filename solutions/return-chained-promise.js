document.getElementById("make-class-leak").onclick = () => {
  const myClassInstance = new MyClass();
  myClassInstance.myAsyncMethod(getAndCachePromise());
};

class MyClass {
  async myAsyncMethod(promise) {
    const result = await promise;
    console.log("myAsyncMethod ran with promise result: ", result);
  }
}

const promiseCache = [];

function getAndCachePromise() {
  const myPromise = new Promise((resolve) =>
    setTimeout(() => resolve("<PromiseResult>"), 50)
  );
  promiseCache.push(myPromise);
  // Instead of returning myPromise, we returned the chained promise returned by myPromise.then().
  // This solves the leak - but why?
  return myPromise.then((result) => {
    console.log("getAndCachePromise then() handler resolved promise with result: ", result);
  });
}
