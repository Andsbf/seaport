import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import DataAcquisitionFactory from "../../lib/DataAcquisition/DataAcquisitionFactory.js";

export default function AcquisitionSelection({ onAcquisitionTypeClick }) {
  const acquisitionOptions = [
    {
      type: DataAcquisitionFactory.TYPES.REMOTE,
      title: "Remote",
      description: "Plot graph from DHI api"
    },
    {
      type: DataAcquisitionFactory.TYPES.LOCAL,
      title: "Local File",
      description: "Plot graph from local file"
    }
  ];

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={10}>
        <Typography gutterBottom variant="h5" component="h2">
          Choose data acquisition method
        </Typography>
      </Grid>
      {acquisitionOptions.map(option => (
        <Grid item xs={10} sm={5} key={option.title}>
          <Card data-acq-type={option.type} onClick={onAcquisitionTypeClick}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {option.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {option.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
