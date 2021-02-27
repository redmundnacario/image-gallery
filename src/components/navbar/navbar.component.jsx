import { Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <a className="logo" href="/">
                <i className="fas fa-camera-retro text-black"></i>
                </a>
            </Navbar.Brand> 
        </Navbar>
    )
}

export default NavbarComponent
