import { Jumbotron } from 'react-bootstrap'
import SearchBar from '../searchbar/searchbar.component';

//scss
import './jumbotron.styles.scss'
const JumbotronComponent = ({handleClick}) => {
    return (
        <Jumbotron className="jumbotron" fluid>
            <h1>Image Gallery</h1>
            <p>Search and download free high-quality images from the internet.</p>
            <br/>
            <SearchBar 
                handleClick={handleClick}
            />

        </Jumbotron>
    )
}

export default JumbotronComponent
