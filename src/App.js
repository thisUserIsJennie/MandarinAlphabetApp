import logo from './customLogo.jpg';
import './App.css';
import MainPage from './MainPage';

/* TODO: don't hardcode page selection values */
const PageSelection = {HomePage: "HomePage"};

const App = () => {
  var userSelectedContent = PageSelection.HomePage;
  const mainContent = MainPage(userSelectedContent);
  const sidebar = Sidebar();

  return (
    <div className="App">
      {mainContent};
      {sidebar};
    </div>
  );
}

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div class="inner">
        <nav id="menu">
          <header class="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a href="index.html">Homepage</a></li>
            <li>
              <span class="opener">Features Coming Soon</span>
              <ul>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">Learn To Write Zhuyin</a></li>
                <li><a href="#">Interactive Keyboard</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default App;
