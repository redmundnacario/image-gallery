
import {Card , Image, Button} from 'react-bootstrap';
//scss
import './image-card.styles.scss'

const ImageCard = (
    {
        urls: { regular },
        width,
        height,
        alt_description,
        likes,
        user: {
        name,
        portfolio_url,
        profile_image: { medium },
        },
        links: { download },
    }
    ) => {

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
    const downloadLink = `${download}?force=true`;
    return (
        <Card className = "image-card"
            style={{display: "block", gridRowEnd:`span ${rowSpan}`}}>
            <Image className="image-card-img" alt={alt_description} src={regular} fluid/>
            <div className= "photo-info">
                <div>
                    <h6>{name}</h6>
                    <p className="mb-0">{likes} likes </p>
                    <a
                    className="h6"
                    href={downloadLink}
                    download
                    target="_blank"
                    rel="noreferrer"
                    >
                    <i class="fas fa-download text-white"></i>
                    </a>
                </div>
                <a href={portfolio_url}>
                    <img src={medium} alt="" className="user-img" />
                </a>
            </div>
        </Card>
    )
}

export default ImageCard
