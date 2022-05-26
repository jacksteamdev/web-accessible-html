console.log("background");

chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  if (reason === chrome.runtime.OnInstalledReason.INSTALL)
    chrome.tabs.create({ url: "https://en.wikipedia.org/wiki/Bear" });
});

export {};
