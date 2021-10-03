import React from "react";
import { useState } from "react";
import { Box, useMediaQuery } from "@material-ui/core";
import Calculator from "./Calculator/Calculator";
import DisplayTotal from "./Amount/DisplayTotal";

export default function AllCard() {
  const matches = useMediaQuery("(max-width: 700px)");
  const [tipPerson, setTipPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const tipCalculatorHandler = (tipPerPerson) => {
    setTipPerson(tipPerPerson);
  };
  const totalPerPersonHandler = (totalPerson) => {
    setTotalPerPerson(totalPerson);
  };
  const clearHandler = () => {
    setTipPerson(0);
    setTotalPerPerson(0);
  };

  return (
    <Box
      sx={
        matches === true
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              p: 4,
              m: 2,
              bgcolor: "background.paper",

              borderRadius: 14,
            }
          : {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              p: 3,
              paddingTop: 70,
              m: 2,
              bgcolor: "background.paper",
              maxWidth: 800,
              height: 420,
              borderRadius: 14,
            }
      }
    >
      <Calculator
        tipCalculatorHandler={tipCalculatorHandler}
        totalPerPersonHandler={totalPerPersonHandler}
      />
      <Box>
        <DisplayTotal
          clearHandler={clearHandler}
          tipPerson={tipPerson}
          totalPerPerson={totalPerPerson}
        />
      </Box>
    </Box>
  );
}
