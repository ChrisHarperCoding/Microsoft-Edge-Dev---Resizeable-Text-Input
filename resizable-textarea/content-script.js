function toggleResizableTextarea() {
    const textareas = document.querySelectorAll('textarea');
    
    textareas.forEach((textarea) => {
      const resizable = textarea.style.resize === 'both';
      textarea.style.resize = resizable ? 'none' : 'both';
    });
  }
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleResizableTextarea') {
      toggleResizableTextarea();
      sendResponse({ success: true });
    }
  });  