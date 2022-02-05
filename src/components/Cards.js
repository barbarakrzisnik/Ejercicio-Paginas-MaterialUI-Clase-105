import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Cards = () => {
  return (
    <div className="flex-row">
        <Card align="center"
          sx={{
            minWidth: 300,
            borderRadius: 2,
            m: 3 }}>
          <CardHeader
            title="Free"
            align="center"
            sx={{
              gap: 2,
              bgcolor: "#E7EBF0" }}/>
          <CardContent align="center">
            <div className="flex-row">
              <Typography variant="h2">$0</Typography>
              <Typography variant="body1">/mo</Typography>
            </div>
            <Typography variant="h6">10 users included </Typography>
            <Typography variant="h6">2 GB of storage </Typography>
            <Typography variant="h6">Help center access </Typography>
            <Typography variant="h6">Email support </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
              mb: 2 }}>
            <Button variant="outlined">Sign up for free</Button>
          </CardActions>
        </Card>
        <Card align="center"
          sx={{
            minWidth: 300,
            borderRadius: 2,
            m: 3 }}>
          <CardHeader
            title="Pro"
            subheader="Most popular"
            align="center"
            sx={{
              gap: 2,
              bgcolor: "#E7EBF0" }}/>
          <CardContent align="center">
            <div className="flex-row">
              <Typography variant="h2">$15</Typography>
              <Typography variant="body1">/mo</Typography>
            </div>
            <Typography variant="h6">20 users included </Typography>
            <Typography variant="h6">10 GB of storage </Typography>
            <Typography variant="h6">Help center access </Typography>
            <Typography variant="h6">Priority email support </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
              mb: 2 }}>
            <Button variant="contained">Get started</Button>
          </CardActions>
        </Card>
        <Card align="center"
          sx={{
            minWidth: 300,
            borderRadius: 2,
            m: 3 }}>
          <CardHeader
            title="Enterprise"
            align="center"
            sx={{
              gap: 2,
              bgcolor: "#E7EBF0" }}/>
          <CardContent align="center">
            <div className="flex-row">
              <Typography variant="h2">$30</Typography>
              <Typography variant="body1">/mo</Typography>
            </div>
            <Typography variant="h6">50 users included </Typography>
            <Typography variant="h6">30 GB of storage </Typography>
            <Typography variant="h6">Help center access </Typography>
            <Typography variant="h6">Phone & email support </Typography>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
              mb: 2 }}>
            <Button variant="outlined">Contact us</Button>
          </CardActions>
        </Card>
    </div>
  );
};

export default Cards;
