import React, { useState, useEffect } from 'react';
import FlashcardList from '../components/FlashcardList';
import '../app.css';
import axios from 'axios';
import sampleFlashcards from '../components/Flashcards';

function Api() {
  const [flashcards] = useState(sampleFlashcards)

  useEffect(() => {
    axios
    .get('https://5f67698138ce8700163985e3.mockapi.io/data/Cards')
    .then(res => {
      console.log(res.data)
    })
  })

  return (
    <FlashcardList flashcards={flashcards} />
  );
}

export default  Api;