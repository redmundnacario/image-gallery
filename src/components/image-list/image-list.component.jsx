
import ImageCard from '../image-card/image-card.component';

import {Container, Row, Col , Card} from 'react-bootstrap'


const ImageList = ({images}) => {
    return (
        <Container className="image-list">
            {
                images.map((image, index) => (
                    <ImageCard key={image.id + `${index}`} 
                        {...image}/>
                ))
            }
        </Container>
    )
}

export default ImageList
