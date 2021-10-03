import { Typography, FormControl } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { InputLabel, FilledInput } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { motion } from "framer-motion";
export default function NumberOfPeople(props) {
  const [people, setPeople] = useState(0);
  const [error, setError] = useState(false);
  const numberOfPeopleHandler = (e) => {
    setPeople(e.target.value);
  };
  useEffect(() => {
    if (people < 0) {
      setError(true);
      props.setPeopleHandler(0);
    } else {
      setError(false);
      props.setPeopleHandler(people);
    }
  }, [props, people]);

  return (
    <div>
      <Typography>Number of People</Typography>
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <InputLabel
          htmlFor="filled-adornment-amount"
          style={{ color: error === true ? red[500] : "black" }}
        >
          {error === true ? "Amount must be more than 0" : "Amount"}
        </InputLabel>
        {error === true ? (
          <FilledInput
            error
            value={people}
            inputProps={{
              min: 0,
              style: {
                textAlign: "right",
                fontWeight: "bold",
                color: "hsl(183, 100%, 15%)",
                fontSize: 22,
              },
            }}
            onChange={numberOfPeopleHandler}
            type="number"
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                {" "}
                <motion.div
                  animate={{ y: 1 }}
                  initial={{ y: -3 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 60000,
                  }}
                >
                  <AccountCircleOutlinedIcon sx={{ color: red[500] }} />
                </motion.div>
              </InputAdornment>
            }
          />
        ) : (
          <FilledInput
            value={people}
            inputProps={{
              min: 0,
              style: {
                textAlign: "right",
                fontWeight: "bold",
                color: "hsl(183, 100%, 15%)",
                fontSize: 22,
              },
            }}
            onChange={numberOfPeopleHandler}
            type="number"
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            }
          />
        )}
      </FormControl>
    </div>
  );
}
