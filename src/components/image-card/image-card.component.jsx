
import {Card , Image} from 'react-bootstrap';
//scss
import './image-card.styles.scss'

const ImageCard = ({src, height, width}) => {

    // const [rowGap1, rowHeight1] = useWindowSize();
    // console.log(rowGap1, rowHeight1)
    const grid = document.getElementsByClassName("image-list")[0]
    const imageListWidth = grid.clientWidth
    const gridCol = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-template-columns"))
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"))
	const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"))

    let hardCodeDivisor;
    if (gridCol >= 265){
        hardCodeDivisor = 4;
    } else {
        hardCodeDivisor = 4.9;
    }

    let rowSpan = Math.ceil((((height * 1080) / width / hardCodeDivisor) + (rowGap/2)) / (rowHeight + rowGap)) 
    // console.log( imageListWidth )
    return (
        <Card className = "image-card"
            style={{display: "block", gridRowEnd:`span ${rowSpan}`}}>
            <Image className="image-card-img" src={src} fluid/>
        </Card>
    )
}

export default ImageCard
