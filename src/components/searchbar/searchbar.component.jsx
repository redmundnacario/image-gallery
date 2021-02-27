
import { FormControl, 
         Button, 
         InputGroup,
         Row, Col } from 'react-bootstrap'


const SearchBar = () => {
    return (
        <div className="search-bar">
            <InputGroup>
                <FormControl type="text" placeholder="Search">
                </FormControl>
                <InputGroup.Append>
                    <Button variant="primary" type="submit">Go!</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar
