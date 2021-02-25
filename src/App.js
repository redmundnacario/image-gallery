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
  const [query, setQuery] = useState("");
  
  // Custom hooks output
  const [width, height] = useWindowSize();
  const page =usePage()


  useEffect(()=>{
    if (page <= 3){
      fetchImageList()
    }
  }, [page])




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

    setImages([...images,...result])
    setLoading(false);
    // console.log(result)
    console.log(page)
  }

  return (
    <div className="App">
      <NavbarComponent/>
      <JumbotronComponent page={page}/>
      <ImageList images={images}/>
      <SpinnerComponent loading={loading}/>
    </div>
  )
}

// Custom Hooks
// Get Windows Size
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {

      function updateSize() {
        setSize([
                window.innerWidth,
                window.innerHeight
                ]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function usePage(){
  const [page, setPage] = useState(1);
  useEffect(() => {
    function updatePage(){
      const windowScrollHeight = window.innerHeight + window.scrollY
      const documentBodyHeight = document.body.scrollHeight 
      if ( windowScrollHeight >= documentBodyHeight -2 ){
        // console.log("positive",windowScrollHeight, documentBodyHeight -2 )
        setPage((oldPage) => {
          return oldPage + 1;
        })
      }
    }
    
    window.addEventListener("scroll", updatePage);
    return () => window.removeEventListener("scroll", updatePage);
  }, []);
  return page;
}




export default App;
