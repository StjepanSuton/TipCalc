import {
  Typography,
  Grid,
  Container,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import ResetButton from "./ResetButton";

const useStyles = makeStyles({
  textField: {
    fontWeight: "bold",
    fontSize: 18,
  },
  numberField: {
    fontWeight: "bold",
    fontSize: 28,
    color: "hsl(183.1034482758621, 59.183673469387756%, 61.568627450980394%)",
  },
});

export default function DisplayTotal(props) {
  const matches = useMediaQuery("(max-width: 700px)");
  const classes = useStyles();
  const clearHandler = props.clearHandler;

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={5}
        style={{
          maxWidth: 390,
          minWidth: 400,
          minHeight: 415,
          paddingTop: matches === true ? 20 : 20,

          backgroundColor: "hsl(183, 100%, 15%)",
          color: "white",
          borderRadius: 14,
        }}
      >
        <Grid item>
          <Grid container>
            <Grid item xs={8}>
              <Typography className={classes.textField} gutterBottom>
                Tip Amount
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography className={classes.numberField}>
                {isFinite(props.tipPerson) === false
                  ? `0.00$`
                  : `${props.tipPerson.toFixed(2)}$`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>/person</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={8}>
              <Typography className={classes.textField} gutterBottom>
                Total
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography className={classes.numberField}>
                {isFinite(props.totalPerPerson) === false
                  ? `0.00$`
                  : `${props.totalPerPerson.toFixed(2)}$`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>/person</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ResetButton clearHandler={clearHandler} />
        </Grid>
      </Grid>
    </Container>
  );
}
