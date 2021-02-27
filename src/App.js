import JumbotronComponent from './components/jumbotron/jumbotron.component';
import NavbarComponent from "./components/navbar/navbar.component";

import {useState, useEffect} from 'react'

import React from 'react'


const clientID = `?client_id=pz0F3WnapMOL2DspE3UwW36_ij17qQ6gaCgIUL-lxx4`;
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] =useState([])
  const [page, setPage] = useState(4);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetchImageList()
    console.log(images)
  }, [])

  const fetchImageList = async() =>{
    setLoading(true);

    const pageURL = `&page=${page}`;
    // const queryURL = `&query=${query}`;

    const url = `${mainURL}${clientID}${pageURL}`
    console.log(url)
    const result = await fetch(url)
      .then(response => response.json())
      .then(result => result)

    setImages(result)
  }

  return (
    <div className="App">
      <NavbarComponent/>
      <JumbotronComponent/>
    </div>
  )
}

export default App;
