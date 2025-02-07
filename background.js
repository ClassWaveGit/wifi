let refreshInterval;

chrome.runtime.onInstalled.addListener(() => {
  // Start auto-refreshing tabs when the extension is installed
  startAutoRefresh();
});

function startAutoRefresh() {
  // Clear any previous intervals
  if (refreshInterval) clearInterval(refreshInterval);

  // Set the interval to refresh all tabs every 30 seconds
  refreshInterval = setInterval(() => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.reload(tab.id);  // Reload each tab
      });
    });
  }, 30000); // 30000 ms = 30 seconds
}

chrome.runtime.onSuspend.addListener(() => {
  clearInterval(refreshInterval);  // Clear the interval when the extension is unloaded
});
