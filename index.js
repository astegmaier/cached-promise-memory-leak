document.getElementById("make-class-leak").onclick = () => {
  const myClassInstance = new MyClass();
  myClassInstance.myAsyncMethod(); // <-- each MyClass instance on which you call myAsyncMethod will leak.
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
  return myPromise;
}
