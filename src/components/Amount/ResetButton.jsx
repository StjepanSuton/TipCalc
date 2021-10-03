import React from "react";
import { Button } from "@material-ui/core";
export default function ResetButton(props) {
  return (
    <div>
      <Button
        fullWidth
        onClick={props.clearHandler}
        variant="contained"
        color="primary"
      >
        RESET
      </Button>
    </div>
  );
}
