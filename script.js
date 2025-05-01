let recognition;
let isRecording = false;

const output = document.getElementById("output");
const micButton = document.getElementById("micButton");
const yearSpan = document.getElementById("year");

// Set current year
yearSpan.textContent = new Date().getFullYear();

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    isRecording = true;
    micButton.classList.add("recording");
    output.textContent = "Listening...";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
  };

  recognition.onerror = (event) => {
    output.textContent = "Error: " + event.error;
  };

  recognition.onend = () => {
    isRecording = false;
    micButton.classList.remove("recording");
  };
} else {
  alert("Speech recognition is not supported in this browser.");
}

micButton.addEventListener("click", () => {
  if (!isRecording && recognition) {
    recognition.start();
  } else if (isRecording && recognition) {
    recognition.stop();
  }
});
// Set year
yearSpan.textContent = new Date().getFullYear();

// Copy functionality
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  const text = output.textContent.trim();
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => {
        copyBtn.textContent = "📋 Copy";
      }, 2000);
    }).catch(err => {
      alert("Failed to copy: " + err);
    });
  }
});
