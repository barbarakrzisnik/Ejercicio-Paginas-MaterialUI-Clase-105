import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FormatAlignJustify } from "@mui/icons-material";

const Header = () => {
  return (
    <div>
      <Box sx={{ 
          bgcolor: "#E7EBF0",
          boxShadow: "none",
          m: 0
       }}>
        <AppBar sx={{ 
          bgcolor: "#E7EBF0",
          boxShadow: "none",
       }} position="static" disableElevation>
          <Toolbar>
            <Typography
              color="text.primary"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Company name
            </Typography>
            <Button variant="text" color="primary">
              Features
            </Button>
            <Button variant="text" color="primary">
              Enterprise
            </Button>
            <Button variant="text" color="primary">
              Support
            </Button>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex-center">
        <Box sx={{ width:600 }}>
          <Typography variant="h3" align="center" gutterBottom>Pricing</Typography>
          <Typography variant="h5" align="center">Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Header;
