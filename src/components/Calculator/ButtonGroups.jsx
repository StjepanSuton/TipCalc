import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
export default function ButtonGroups(props) {
  const [costumTip, setCostumTip] = useState(0);
  /*Very Lazy should have found another way */
  const [five, setFive] = useState(false);
  const [ten, setTen] = useState(false);
  const [fiften, setFiften] = useState(false);
  const [twentyFive, setTwentyFive] = useState(false);
  const [fifty, setFifty] = useState(false);

  const setTipCostumHandler = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    }
    setCostumTip(parseInt(e.target.value) * props.bill * 0.01);
    setFive(false);
    setTen(false);
    setFiften(false);
    setTwentyFive(false);
    setFifty(false);
  };
  const set5PercentTipHandler = () => {
    setCostumTip(props.bill * 0.05);
    setFive(true);
    setTen(false);
    setFiften(false);
    setTwentyFive(false);
    setFifty(false);
  };
  const set10PercentTipHandler = () => {
    setCostumTip(props.bill * 0.1);
    setFive(false);
    setTen(true);
    setFiften(false);
    setTwentyFive(false);
    setFifty(false);
  };
  const set15PercentTipHandler = () => {
    setCostumTip(props.bill * 0.15);
    setFive(false);
    setTen(false);
    setFiften(true);
    setTwentyFive(false);
    setFifty(false);
  };
  const set25PercentTipHandler = () => {
    setCostumTip(props.bill * 0.25);
    setFive(false);
    setTen(false);
    setFiften(false);
    setTwentyFive(true);
    setFifty(false);
  };
  const set50PercentTipHandler = () => {
    setCostumTip(props.bill * 0.5);
    setFive(false);
    setTen(false);
    setFiften(false);
    setTwentyFive(false);
    setFifty(true);
  };

  useEffect(() => {
    props.setTipHandler(costumTip);
  }, [props, costumTip]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Select Tip</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={set5PercentTipHandler}
            variant="contained"
            fullWidth
            color={five === true ? "secondary" : "primary"}
          >
            5%
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={set10PercentTipHandler}
            variant="contained"
            fullWidth
            color={ten === true ? "secondary" : "primary"}
          >
            10%
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={set15PercentTipHandler}
            variant="contained"
            fullWidth
            color={fiften === true ? "secondary" : "primary"}
          >
            15%
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={set25PercentTipHandler}
            variant="contained"
            fullWidth
            color={twentyFive === true ? "secondary" : "primary"}
          >
            25%
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={set50PercentTipHandler}
            variant="contained"
            fullWidth
            color={fifty === true ? "secondary" : "primary"}
          >
            50%
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            onChange={setTipCostumHandler}
            size="small"
            variant="outlined"
            label="costum"
            type="number"
            edge="end"
          ></TextField>
        </Grid>
      </Grid>
    </div>
  );
}
