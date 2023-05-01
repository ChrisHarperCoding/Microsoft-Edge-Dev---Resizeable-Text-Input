chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleResizableTextarea' }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else if (response && response.success) {
        console.log('Toggled resizable textarea');
      }
    });
  });  