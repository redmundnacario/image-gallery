import { Jumbotron } from 'react-bootstrap'
import SearchBar from '../searchbar/searchbar.component';

//scss
import './jumbotron.styles.scss'
const JumbotronComponent = ({page}) => {
    return (
        <Jumbotron className="jumbotron" fluid>
            <h1>Free Images!</h1>
            <p>Search and Download free high-quality images from the internet.</p>
            <p>{page}</p>
            <SearchBar/>

        </Jumbotron>
    )
}

export default JumbotronComponent
