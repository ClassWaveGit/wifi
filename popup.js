document.getElementById('openTabsBtn').addEventListener('click', () => {
  const numTabs = parseInt(document.getElementById('numTabs').value);

  if (isNaN(numTabs) || numTabs < 1) {
    alert("Please enter a valid number.");
    return;
  }

  for (let i = 0; i < numTabs; i++) {
    chrome.tabs.create({ url: "https://fast.com/fr/" });
  }
});
