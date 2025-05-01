

# Voice Assistant - Dext

## Overview

This project implements a voice-based assistant using HTML, CSS, and JavaScript. The application allows users to interact with the assistant using their voice. Once the voice is recognized and converted into text, it displays the result on the screen. The user can also copy the recognized text with a **Copy** button. The design is responsive and works seamlessly on both desktop and mobile devices.

---

## Features

* **Voice Input**: Start and stop voice recognition with a single button.
* **Live Speech Recognition**: Convert voice to text in real-time.
* **Copy Text**: Copy the recognized text to the clipboard using a **Copy** button.
* **Responsive Design**: The application is fully responsive and optimized for both desktop and mobile screens.
* **Animated Mic Button**: The mic button changes color and animates when speaking.
* **Footer**: Displays a copyright message with the current year.

---

## Technologies Used

* **HTML5**: For the structure of the web page.
* **CSS3**: For styling the user interface, including responsive design.
* **JavaScript**: For voice recognition functionality using the Web Speech API and clipboard interactions.

---

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dhiraj7kr/V2T.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd V2T
   ```

3. **Open the `index.html` file** in your preferred browser to see the application in action.

---

## Features in Detail

### 1. **Voice Input**

The application uses the Web Speech API's Speech Recognition interface. When you press the mic button, the app listens to your voice input and converts it to text.

### 2. **Copy Text Button**

After the voice is converted to text, users can click the **Copy** button on the top-right to copy the converted text to their clipboard.

### 3. **Responsive Design**

The layout is fully responsive and adjusts for different screen sizes, ensuring the app works seamlessly on desktop, tablet, and mobile devices.

### 4. **Mic Button Animation**

When the app starts listening to your voice, the mic button turns red and animates with a pulsating effect to indicate that the system is recording.

---

## File Structure

```plaintext
V2T/
├── index.html        # Main HTML file
├── style.css         # Styles for the app
└── script.js         # JavaScript for handling voice recognition and copy functionality
```

---

## How It Works

### 1. **Voice Recognition (Speech-to-Text)**:

* The `SpeechRecognition` API is used to capture voice input.
* Once the user clicks the mic button, the application listens for speech and displays the recognized text in real-time.

### 2. **Copy Functionality**:

* The recognized text is stored in the `<div id="output">`.
* When the **Copy** button is clicked, it copies the content of `#output` to the clipboard.

### 3. **Responsive Design**:

* The layout is handled using Flexbox and media queries to ensure the app works on all screen sizes. The navbar stays on the top, and the mic button is positioned at the bottom.

---

## Live Demo

You can view a live demo of the application here: [Demo Link](#)

---

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Acknowledgments

* **Web Speech API**: Used for speech-to-text functionality.
* **SVG Icons**: Used for the mic button.

---

Feel free to reach out if you have any questions or suggestions. Enjoy using the **Dext Voice Assistant**! 😊

---

Let me know if you'd like any changes to this README or need further customization!
