import { FormControl, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { InputLabel, FilledInput } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { red } from "@material-ui/core/colors";
import { motion } from "framer-motion";
export default function Bill(props) {
  const [bill, setBill] = useState(0);
  const [error, setError] = useState(false);
  const billChangeHandler = (e) => {
    setBill(e.target.value);
  };
  useEffect(() => {
    if (bill < 0) {
      setError(true);
      props.setBillHandler(0);
    } else {
      setError(false);
      props.setBillHandler(bill);
    }
  }, [props, bill]);

  return (
    <div>
      <Typography>Bill</Typography>
      <FormControl
        onChange={billChangeHandler}
        fullWidth
        sx={{ m: 1 }}
        variant="filled"
      >
        <motion.div
          animate={{ y: 1 }}
          initial={{ y: -3 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 60000,
          }}
        >
          <InputLabel
            htmlFor="filled-adornment-amount"
            style={{ color: error === true ? red[500] : "black" }}
          >
            {" "}
            {error === true ? "Amount must be more than 0" : "Amount"}
          </InputLabel>
        </motion.div>
        {error === true ? (
          <FilledInput
            value={bill}
            error
            inputProps={{
              min: 0,
              style: {
                textAlign: "right",
                fontWeight: "bold",
                color: "hsl(183, 100%, 15%)",
                fontSize: 22,
              },
            }}
            type="number"
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <motion.div
                  animate={{ y: 1 }}
                  initial={{ y: -3 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 60000,
                  }}
                >
                  {" "}
                  <AttachMoneyOutlinedIcon sx={{ color: red[500] }} />{" "}
                </motion.div>
              </InputAdornment>
            }
          />
        ) : (
          <FilledInput
            value={bill}
            inputProps={{
              min: 0,
              style: {
                textAlign: "right",
                fontWeight: "bold",
                color: "hsl(183, 100%, 15%)",
                fontSize: 22,
              },
            }}
            type="number"
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <AttachMoneyOutlinedIcon />
              </InputAdornment>
            }
          />
        )}
      </FormControl>
    </div>
  );
}
