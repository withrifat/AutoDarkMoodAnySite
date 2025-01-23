document.getElementById("toggle").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleDarkMode
      });
    });
  });
  
  function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.querySelector("style").remove();
    } else {
      let style = document.createElement("style");
      style.innerHTML = `
        body, html { background-color: #121212 !important; color: #ffffff !important; }
        a { color: #bb86fc !important; }
        img, video { filter: brightness(0.8) contrast(1.2); }
        *:not(img):not(video) { background-color: #121212 !important; }
      `;
      document.head.appendChild(style);
      document.body.classList.add("dark-mode");
    }
  }
  