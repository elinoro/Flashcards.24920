import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Api from './Api/Api';
import Flashcard from './components/Flashcard';
import FlashcardList from './components/FlashcardList';
import Header from './components/Header';
import ManageCards from './components/ManageCards';

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <BrowserRouter>
        <div>
          <Header />
          <Api />
          <Route path='/flashcardList' exact component={FlashcardList} />
          <Route path='/flashcardsList/:id' exact component={Flashcard} />
          <Route path='/manageCards' exact component={ManageCards} />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;