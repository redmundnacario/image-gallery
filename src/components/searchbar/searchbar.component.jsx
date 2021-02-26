import {useState } from 'react';
import { FormControl, 
         Button, 
         InputGroup } from 'react-bootstrap';


const SearchBar = ({handleClick}) => {
    const [searchString, setSearchString] =useState("")
    return (
        <div className="search-bar">
            <form onSubmit={(e)=> handleClick(e, searchString)}>
                <InputGroup>
                    <FormControl type="text" placeholder="Search" onChange={(e) => setSearchString(e.target.value)}>
                    </FormControl>
                    <InputGroup.Append>
                        <Button variant="primary" type="submit" onClick={null}>Go!</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </div>
    )
}

export default SearchBar
