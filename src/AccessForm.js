import React, { useState } from "react";
import axios from "axios";

/*********
 * 3 Steps:
 * 1) Check Access Code
 * 2) Add email (and other information), phone, (not displayed), url to show, subdomain, title, byline
 * 3) Connect plaid
 * 4) Wait a day for the page to be created
 */

import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";

const AccessCode = ({ advanceStep }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError(false);
    axios
      .get(`https://api.withlaguna.com/stonks/access/${input}`)
      .then((res) => {
        advanceStep();
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <Typography variant="h4">Enter your early access code</Typography>
      <TextField
        label="Early Access Code"
        error={error}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="OPEN SESAME"
      />
      <Button onClick={handleSubmit}>Enter</Button>
    </>
  );
};

const UserInfo = () => {};

const PlaidInfo = () => {};

const Wait = () => {};

export const AccessForm = () => {
  const [step, setStep] = useState(0);

  function renderStep() {
    if (step == 0) return <AccessCode advanceStep={() => setStep(1)} />;
    else if (step == 1) return <UserInfo />;
    else if (step == 2) return <PlaidInfo />;
    else if (step == 3) return <Wait />;
  }

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={8}>
        <Paper>{renderStep()}</Paper>
      </Grid>
    </Grid>
  );
};
