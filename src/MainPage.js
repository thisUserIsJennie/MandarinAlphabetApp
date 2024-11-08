/**
 * MainPage manages the content of everything except the Sidebar.
 * Depending on what tab the user has selected, this may be the home page, 
 * the quiz page, or the writing page, etc.
 */

import { Button } from "react-bootstrap";
import Zhuyin from "./ZhuyinDictionary";

const MainPage = (selectedContent) => {
  var displayContent;

  switch (selectedContent) {
    case "HomePage":
      displayContent = HomePage();
      console.log("Selected Home Page");
      break;
    default:
      displayContent = UnknownPage();
      console.log("ERROR: UNKNOWN PAGE");
      break;
  }

  return displayContent;
}

const HomePage = () => {
  // const keyboard = AlphabetKeyboard();
  var buttonList = [];
  for (const char in Zhuyin) {
    buttonList += Zhuyin[char];
  }
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
        <div>
          <button>
            {buttonList[0]}
          </button>
          </div>
      </div>
    </div>
  )
}

// const AlphabetKeyboard = () => {
//   var buttonList = [];
//   for (const char in Zhuyin) {
//     buttonList += Zhuyin[char];
//   }

//   return (buttonList.map((char) => <button>{char}</button>));
// }

const UnknownPage = () => {
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