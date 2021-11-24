import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import sana from "../assets/sana.jpg";
import { useSelector } from "react-redux";

export default function MuiCard() {
  const state = useSelector((e) => e);
  console.log(state);
  return (
    <Card sm={4} sx={{ maxWidth: 300, margin: "10px " }}>
      <CardMedia component="img" height="400" image={sana} alt="sana-image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {state[0].answerOptions} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {state[0].questionText} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">price</Button>
        <Button size="small">import sana</Button>
      </CardActions>
    </Card>
  );
}
