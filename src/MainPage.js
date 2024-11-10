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
        {homePageIntro()}
        <div id="homePagekeyboard">
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


//https://en.wikipedia.org/wiki/Pinyin
const homePageIntro = () => {
  return (
    <div id="zhuyinIntro">
      <header>
        <h1>About Zhuyin</h1>
        <h5>The "alphabet" for learning Mandarin</h5>
      </header>
      <div class="grid-container">
        <div class="grid-child">
          <p>Zhu-Yin-Fu-Hao 注音符號, also known as Bopomofo ㄅㄆㄇㄈ,
            is a set of characters designed to help you learn to pronounce Mandarin words.
            Think of it like the English ABC's, except for pronounciation only.</p>
          <p>Zhuyin can be an alternative tool for Pinyin, and in fact, is taught to children
            in Taiwanese schools when they are first learning to read and write Chinese characters.</p>
          <p>See the image to the right for examples of Chinese characters accompanied by both Zhuyin and Pinyin.</p>
        </div>

        <img class="grid-child" src="zhuyinVsPinyinExample.jpg"></img>
      </div>
    </div>);
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