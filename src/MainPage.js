/**
 * MainPage manages the content of everything except the Sidebar.
 * Depending on what tab the user has selected, this may be the home page, 
 * the quiz page, or the writing page, etc.
 */

const MainPage = (selectedContent) => {
    var displayContent;
    
    switch (selectedContent){
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
    return (
        <div id="main">
          <div class="inner">
            <div class="content">
              <header>
                <h1>About Zhuyin</h1>
                <p>The "alphabet" for learning Mandarin</p>
              </header>
              <p>Zhuyin 注音, also known as Bopomofo ㄅㄆㄇㄈ, 
                is a set of characters designed to help you learn to pronounce Mandarin words. 
                Think of it like the English ABC's, except for pronounciation only.</p>
            </div>
            <div id="alphabetKeys"></div>
          </div>
        </div>
      )
}

const UnknownPage = () => {
    return (
        <div id="main">
            <header>
                <h1>Oops, an error occurred!</h1>
                <p>An unknown error has occurred :( Please reach out to Jennie for help.</p>
              </header>
        </div>
    )
}


export default MainPage;