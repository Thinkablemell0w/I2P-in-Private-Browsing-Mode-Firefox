function getChrome() {
  if (browser.runtime.getBrowserInfo == undefined) {
    console.log("Running in Chrome detected");
    return true;
  }
  return false;
}

function isDroid() {
  if (!getChrome()) {
    var gettingInfo = browser.runtime.getPlatformInfo();
    gettingInfo.then(got => {
      if (got.os == "android") {
        console.log("Running in Android detected");
        return true;
      } else {
        console.log("Running in Desktop detected");
        return false;
      }
    });
  }
  return false;
}