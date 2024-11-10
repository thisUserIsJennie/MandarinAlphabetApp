/**
 * MainPage.js manages the content of everything except the Navigation Bar at the top of the app.
 * Depending on what tab the user has selected, this may be the home page, 
 * the quiz page, or the writing page, etc.
 */
import zhuyinCharacterList from "./ZhuyinDictionary";
import './App.css';
import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/**
 * Sets the display content depending on which page the user has selected
 * @param {String} selectedContent "HomePage", "Quiz", etc.
 * @returns Content to display on page, or an error message if invalid parameter was passed in.
 */
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

/**
 * Generates Home Page content
 */
const homePage = () => {
  return (
    <div>
      <div>
        {homePageIntro()}
        {homePageKeyboard()}
      </div>
    </div>
  )
}

/**
 * Generates the introductory info at the top of the Home Page
 */
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
          <p>Zhuyin can be an alternative tool for <a href="https://en.wikipedia.org/wiki/Pinyin" target="_blank">Pinyin</a>,
            and in fact, is taught to children in Taiwanese schools when they are first
            learning to read and write Chinese characters.</p>
          <p>See the image to the right for examples of Chinese characters accompanied by both Zhuyin and Pinyin.</p>
        </div>

        <img class="grid-child" src="zhuyinVsPinyinExample.jpg"></img>
      </div>
    </div>);
}

/**
 * Generates the simple Zhuyin keyboard that plays the pronounciation audio for the Home Page
 */
const homePageKeyboard = () => {
  const initialCharsKeys = Object.keys(zhuyinCharacterList[0]);
  const middleCharsKeys = Object.keys(zhuyinCharacterList[1]);
  const finalCharsKeys = Object.keys(zhuyinCharacterList[2]);
  return (
    <div id="homePagekeyboard">
      <h1>
        Initial Characters
        <Tippy content="Initial characters will always be found at the beginning of a 
          word when they are being used. They do not come after middle or final characters.
          Some words do not use initial characters at all, and either begin with a middle character 
          or are a singular final character." placement="right-end" animation="perspective-subtle">
          <span>&#x1F6C8;</span>
        </Tippy>
      </h1>
      {initialCharsKeys.map(keyButtonGenerator, this)}
      <h1>Middle Characters
        <Tippy content="Middle characters will either be the first character in a word if no initial character 
          is being used, or come after an initial character. They may be sandwiched between an initial
          character and final character." placement="right-end" animation="perspective-subtle">
          <span>&#x1F6C8;</span>
        </Tippy>
      </h1>
      {middleCharsKeys.map(keyButtonGenerator, this)}
      <h1>Final Characters
        <Tippy content="Final characters will always come after initial and/or middle characters,
          unless they are used singularly." placement="right-end" animation="perspective-subtle">
          <span>&#x1F6C8;</span>
        </Tippy>
      </h1>
      {finalCharsKeys.map(keyButtonGenerator, this)}
    </div>);
}

/**
 * Given the current Zhuyin character to generate a key for on the keyboard, 
 * find its pronounciation text and create a button that plays its audio file.
 */
const keyButtonGenerator = (key, index, arr) => {
  const audioPath = "audio/" + key + ".mp3";
  var pronounciation = "";

  //Figure out whether the current key is an initial, middle, 
  //or final to get the pronounciation
  switch (arr[0]) {
    case 'ㄅ':
      pronounciation = (zhuyinCharacterList[0])[key];
      break;
    case '一':
      pronounciation = (zhuyinCharacterList[1])[key];
      break;
    case 'ㄚ':
      pronounciation = (zhuyinCharacterList[2])[key];
      break;
    default:
      break;
  }

  return (
    <div class="simpleKey">
      <button onClick={() => playAudio(key)}>{key}</button>
      <label>{pronounciation}</label>
    </div>);
}

/**
 * Creates a new Audio object for the given Zhuyin key and plays the audio file
 * @param {String} key Zhuyin character to pronounce
 */
const playAudio = (key) => {
  const audioPath = "audio/" + key + ".mp3";
  var audio = new Audio(audioPath);
  audio.autoplay = false;
  audio.play();
}

/**
 * Displays an error message. Used for when an invalid page has been selected.
 */
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