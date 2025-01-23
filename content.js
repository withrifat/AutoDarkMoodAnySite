// Check if dark mode is already applied
if (!document.body.classList.contains("dark-mode")) {
    document.body.classList.add("dark-mode");
  
    // Apply dark mode styles dynamically
    let style = document.createElement("style");
    style.innerHTML = `
      body, html {
        background-color: #121212 !important;
        color: #ffffff !important;
      }
      a { color: #bb86fc !important; }
      img, video { filter: brightness(0.8) contrast(1.2); }
      *:not(img):not(video) { background-color: #121212 !important; }
    `;
    document.head.appendChild(style);
  }
  