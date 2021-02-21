import JumbotronComponent from './components/jumbotron/jumbotron.component';
import NavbarComponent from "./components/navbar/navbar.component";
import ImageList from "./components/image-list/image-list.component";
import SpinnerComponent from './components/spinner/spinner.component';

import {useState, useEffect , useLayoutEffect} from 'react';

import React from 'react';

// const clientID = `?client_id=pz0F3WnapMOL2DspE3UwW36_ij17qQ6gaCgIUL-lxx4`;
// const mainURL = `https://api.unsplash.com/photos/`;
// const searchURL = `https://api.unsplash.com/search/photos/`;

const mainURL = "https://api.unsplash.com/photos/random";
const clientID = process.env.REACT_APP_apiKey;
const DEFAULT_IMAGE_COUNT = 25;
const IMAGE_INCREMENT_COUNT = 10;


const App = () => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] =useState([])
  const [page, setPage] = useState(4);
  const [query, setQuery] = useState("");
  
  // Custom hooks output
  const [width, height] = useWindowSize();
  

  useEffect(()=>{
    fetchImageList()
  }, [])

  const fetchImageList = async() =>{
    setLoading(true);

    // const pageURL = `&page=${page}`;
    // const queryURL = `&query=${query}`;

    const url = `${mainURL}?` + new URLSearchParams({
      count: DEFAULT_IMAGE_COUNT,
			client_id: clientID,
    })

    console.log(url)
    const result = await fetch(url)
      .then(response => response.json())
      .then(result => result)

    setImages(result)
    setLoading(false);
    // console.log(result)
  }

  return (
    <div className="App">
      <NavbarComponent/>
      <JumbotronComponent />
      <ImageList images={images}/>
      <SpinnerComponent loading={loading}/>
    </div>
  )
}

// Custom Hooks
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default App;
