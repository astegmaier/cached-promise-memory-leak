document.getElementById("make-class-leak").onclick = () => {
  const myClassInstance = new MyClass();
  myAsyncFunction(myClassInstance); // <-- each myClassInstance that's captured in the closure of a myAsyncFunction call will leak.
};

class MyClass {}

async function myAsyncFunction(myClassInstanceInClosure) {
  result = await getAndCachePromise();
  console.log("myAsyncFunction ran with promise result: ", result);
}

const promiseCache = [];

function getAndCachePromise() {
  const myPromise = new Promise((resolve) => resolve("<PromiseResult>"));
  promiseCache.push(myPromise);
  return myPromise;
}
