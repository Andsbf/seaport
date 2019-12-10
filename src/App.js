import React, { useState } from "react";
import { Grid, CircularProgress, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Graph from "./components/Graph/Graph";
import AcquisitionSelection from "./components/AcquisitionSelection/AcquisitionSelection";
import DataAcquisitionFactory from "./lib/DataAcquisition/DataAcquisitionFactory.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  }
}));

export default function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const handler = async event => {
    setIsLoading(true);

    const { acqType } = event.currentTarget.dataset;
    const data = await DataAcquisitionFactory(acqType);

    setData(data);
    setIsLoading(false);
  };

  const renderBody = () => {
    if (isLoading) {
      return <CircularProgress />;
    }

    if (data) {
      return <Graph data={data} />;
    }

    return <AcquisitionSelection onAcquisitionTypeClick={handler} />;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        {renderBody()}
      </Grid>
    </React.Fragment>
  );
}
