
import React ,{Component} from 'react';
import './App.css';
import Portfolio from './Component/Home/Portfolio';
import Footer from './Component/Footer/Footer';
import MainProject from './MainProject/MainProject';
import Skills from './Component/Skills/Skills';

export class App extends Component {
  render() {
    return (
      <div >
        <Portfolio/>
        <Skills/>
        <MainProject/>

        <Footer/>
      </div>
    )
  }
}

export default App



