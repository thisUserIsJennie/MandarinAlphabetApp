/**
 * MainPage manages the content of everything except the Navigation Bar at the top of the app.
 * Depending on what tab the user has selected, this may be the home page, 
 * the quiz page, or the writing page, etc.
 */
import zhuyinCharacterList from "./ZhuyinDictionary";
import './App.css';
import React from "react";

const MainPage = (selectedContent) => {
  var displayContent;

  switch (selectedContent) {
    case "HomePage":
      displayContent = homePage();
      console.log("Selected Home Page");
      break;
    default:
      displayContent = unknownPage();
      console.log("ERROR: UNKNOWN PAGE");
      break;
  }

  return displayContent;
}

const homePage = () => {
  return (
    <div>
      <div>
        <div>
          <header>
            <h1>About Zhuyin</h1>
            <p>The "alphabet" for learning Mandarin</p>
          </header>
          <p>Zhuyin 注音, also known as Bopomofo ㄅㄆㄇㄈ,
            is a set of characters designed to help you learn to pronounce Mandarin words.
            Think of it like the English ABC's, except for pronounciation only.</p>
        </div>
        <div id="keyboard">
          <h1>Initial Characters</h1>
          {zhuyinCharacterList[0].map(keyButtonGenerator, this)}
          <h1>Middle Characters</h1>
          {zhuyinCharacterList[1].map(keyButtonGenerator, this)}
          <h1>Final Characters</h1>
          {zhuyinCharacterList[2].map(keyButtonGenerator, this)}
        </div>
      </div>
    </div>
  )
}

const keyButtonGenerator = (key) => {
  const audioPath = "audio/" + key + ".mp3";
  return (
  <button onClick={() => playAudio(key)}>{key}</button>);
}

const playAudio = (key) => {
  const audioPath = "audio/" + key + ".mp3";
  var audio = new Audio(audioPath);
  audio.autoplay = false;
  audio.play();
}

const unknownPage = () => {
  return (
    <div>
      <header>
        <h1>Oops, an error occurred!</h1>
        <p>An unknown error has occurred :( Please reach out to Jennie for help.</p>
      </header>
    </div>
  )
}


export default MainPage;