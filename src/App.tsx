import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import InvertedWorld from './components/Inverted-World';
import StrangerThingsWorld from './components/Stranger-Things-World';
import StrangerThingsGallery from './components/Stranger-Things-Gallery';
import './App.css';

function App() {
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  return (
    <div className={theme}>
      <Header handleChangeTheme={changeTheme}/>
      <main>
        <div id="bottom-characters" className="world-characters"></div>
        <InvertedWorld />
        <StrangerThingsWorld />
        <StrangerThingsGallery />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
