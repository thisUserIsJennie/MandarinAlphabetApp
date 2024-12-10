/**
 * ZhuyinKeyboard.js
 */
import React from "react";
import zhuyinCharacterList from "../Utilities/ZhuyinDictionary";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const interactiveKeyboard = () => {

}

/**
 * Generates the simple Zhuyin keyboard that plays the pronounciation audio for the Home Page
 */
export const basicKeyboard = () => {
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