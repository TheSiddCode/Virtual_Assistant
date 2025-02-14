let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice=document.querySelector("#content")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }
}

// Uncomment this if you want to auto-execute the wish function on page load
// window.addEventListener('load', () => {
//     wishMe();
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
};

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
});

function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Siddhant, how can I help you?")
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Siddhant");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube")
        window.open("https://www.youtube.com/")
    }
    else{
        let finalText="this is what i found on internet regarding this"+message.replace("shifra","") || message.replace("shipra","")
            speak(finalText)
        window.open(`https://www.bing.com/search?q=${message}`)

    }
}

