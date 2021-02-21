import {Spinner} from 'react-bootstrap';
import "./spinner.styles.scss";
const SpinnerComponent = ({loading}) => {
    return (
        <div 
            className="spinner"
            style={{
                display: loading === true ? "block" : "none",
            }}
            >
            <Spinner 
                animation="border" 
                variant="primary"
                role="status"
            />    
        </div>
    )
}

export default SpinnerComponent
