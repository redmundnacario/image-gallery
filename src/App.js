import JumbotronComponent from './components/jumbotron/jumbotron.component';
import NavbarComponent from "./components/navbar/navbar.component";
import ImageList from "./components/image-list/image-list.component";
import SpinnerComponent from './components/spinner/spinner.component';

import {useState, useEffect , useLayoutEffect} from 'react';

import React from 'react';

// const mainURL = `https://api.unsplash.com/photos/`;
// const searchURL = `https://api.unsplash.com/search/photos/`;

const mainURL = "https://api.unsplash.com/photos/random";
const searchURL = "https://api.unsplash.com/search/photos";
const clientID = process.env.REACT_APP_apiKey;
const DEFAULT_IMAGE_COUNT = 25;
const IMAGE_INCREMENT_COUNT = 10;


const App = () => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] =useState([])
  const [searchString, setSearchString] =useState(null)
  // Custom hooks output
  const [width, height] = useWindowSize();
  const [page, setPage]= usePage();


  useEffect(()=>{
    if (page <= 3){
      fetchImageList()
    }
  }, [page, searchString])

  useEffect(() => {

  })


  const fetchImageList = async() =>{
    setLoading(true);

    // const pageURL = `&page=${page}`;
    // const queryURL = `&query=${query}`;
    let url;
    if (searchString){
      url = `${searchURL}?` + new URLSearchParams({
        page: page,
        query: searchString,
        per_page: DEFAULT_IMAGE_COUNT,
        client_id: clientID,
      })
      console.log(url)
      
    } else {
      url = `${mainURL}?` + new URLSearchParams({
        count: DEFAULT_IMAGE_COUNT,
        client_id: clientID,
      })
    }

    console.log(url)
    const result = await fetch(url)
      .then(response => response.json())
      .then(result => result)

    const data = searchString ? result.results : result

    setImages([...images, ...data ])
    setLoading(false);
    // console.log(result)
      console.log(page)
  }

  const submitSearchValue = (e, searchValue) =>{
    e.preventDefault()
    if (searchValue == "") {
      searchValue = null;
    }
    setImages([])
    setPage(1)
    setSearchString(searchValue)
    console.log("submit", searchValue)
  }

  return (
    <div className="App">
      {/*<NavbarComponent/>*/}
      <JumbotronComponent 
        handleClick = {submitSearchValue}
      />
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
      if ( windowScrollHeight >= documentBodyHeight){
        // console.log("positive",windowScrollHeight, documentBodyHeight -2 )
        setPage((oldPage) => {
          return oldPage + 1;
        })
      }
    }
    
    window.addEventListener("scroll", updatePage);
    return () => window.removeEventListener("scroll", updatePage);
  }, []);
  return [page, setPage];
}




export default App;
