import React, { useState } from "react";
import MaskedInput from "react-maskedinput";

import {
  Button,
  Table,
  TableRow,
  TableCell,
  TextField,
  TableBody,
  TableHead,
  InputAdornment,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import NumberFormat from "react-number-format";

function WeightInput(props) {
  return (
    <NumberFormat
      allowNegative={false}
      decimalScale="1"
      customInput={TextField}
      placeholder="10.0"
    />
  );
}

class TradeRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value_ticker: this.props.ticker,
      value_weight: this.props.weight,
      errText: undefined,
    };
  }

  render() {
    return (
      <TableRow>
        <TableCell>
          <TextField
            value={this.state.value_ticker}
            placeholder="AAPL/USD"
            InputProps={{
              style: {
                color:
                  this.state.value_ticker == "" ? undefined : this.props.color,
              },
            }}
            onChange={(e) => {
              this.setState({ value_ticker: e.target.value });
              this.props.handleEdit(
                e.target.value,
                parseFloat(this.state.value_weight),
                this.props.index
              );
            }}
          />
        </TableCell>
        <TableCell>
          <NumberFormat
            allowNegative={false}
            decimalScale="1"
            customInput={TextField}
            placeholder="10.0"
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
            onValueChange={(e) => {
              console.log("handle change", e.floatValue);
              this.setState({ value_weight: e.floatValue });
              this.props.handleEdit(
                this.state.value_ticker,
                e.floatValue,
                this.props.index
              );
            }}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default TradeRow;
