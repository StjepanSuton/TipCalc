import { Container, Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import Bill from "./Bill";
import ButtonGroups from "./ButtonGroups";
import NumberOfPeople from "./NumberOfPeople";

export default function Calculator(props) {
  const matches = useMediaQuery("(max-width: 700px)");
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const setTipHandler = (percentTip) => {
    setTip(percentTip);
  };
  const setBillHandler = (total) => {
    if (parseInt(total) < 0) {
      setBill(0);
    } else {
      setBill(total);
    }
  };

  const setPeopleHandler = (people) => {
    if (parseInt(people) < 0) {
      setPeople(0);
    } else {
      setPeople(people);
    }
  };

  useEffect(() => {
    setTotalAmount((parseInt(bill) + parseInt(tip)) / parseInt(people));
    setTipAmount(parseInt(tip) / parseInt(people));
  }, [setTipAmount, setTotalAmount, tip, people, bill]);

  useEffect(() => {
    if (bill <= 0) {
      props.tipCalculatorHandler(0);
      props.totalPerPersonHandler(0);
    } else {
      props.tipCalculatorHandler(tipAmount);
      props.totalPerPersonHandler(totalAmount);
    }
  }, [bill, people, tipAmount, totalAmount]);
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}
        style={{
          maxWidth: 390,
          minWidth: 300,
          minHeight: 430,
          paddingTop: matches === true ? 20 : 0,
          paddingBottom: 40,
        }}
      >
        <Grid item>
          <Bill setBillHandler={setBillHandler} />
        </Grid>
        <Grid item>
          <ButtonGroups bill={bill} setTipHandler={setTipHandler} />
        </Grid>
        <Grid item>
          <NumberOfPeople setPeopleHandler={setPeopleHandler} />
        </Grid>
      </Grid>
    </Container>
  );
}
