import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const Footer = () => {
return (
        <div className="footer">
            <div className='contenedor-links'>
            <div className="columnas-footer">
                <Typography variant="h6">Company</Typography>
                <Link underline="none" variant="h6">Team</Link>
                <Link underline="none" variant="h6">History</Link>
                <Link underline="none" variant="h6">Contact us</Link>
                <Link underline="none" variant="h6">Locations</Link>
            </div>
            <div className="columnas-footer">
                <Typography variant="h6">Features</Typography>
                <Link underline="none" variant="h6">Team</Link>
                <Link underline="none" variant="h6">History</Link>
                <Link underline="none" variant="h6">Contact us</Link>
                <Link underline="none" variant="h6">Locations</Link>
                <Link underline="none" variant="h6">Another one</Link>
            </div>
            <div className="columnas-footer">
                <Typography variant="h6">Resources</Typography>
                <Link underline="none" variant="h6">Team</Link>
                <Link underline="none" variant="h6">History</Link>
                <Link underline="none" variant="h6">Contact us</Link>
                <Link underline="none" variant="h6">Locations</Link>
            </div>
            <div className="columnas-footer">
                <Typography variant="h6">Legal</Typography>
                <Link underline="none" variant="h6">Team</Link>
                <Link underline="none" variant="h6">History</Link>
                <Link underline="none" variant="h6">Contact us</Link>
                <Link underline="none" variant="h6">Locations</Link>
            </div>
            </div>
            <Typography variant="caption">Copyright © <Link underline="none" variant="caption">Your website</Link> 2022</Typography>
        </div>
        
    )
}

export default Footer