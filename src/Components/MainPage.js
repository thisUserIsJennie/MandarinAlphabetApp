/**
 * MainPage.js manages the content of everything except the Navigation Bar at the top of the app.
 * Depending on what tab the user has selected, this may be the home page, 
 * the quiz page, or the writing page, etc.
 */
import '../App.css';
import React from "react";
import { basicKeyboard, interactiveKeyboard } from './ZhuyinKeyboard';

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
        {basicKeyboard()}
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