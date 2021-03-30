import React, { useState } from "react";

import {
  TableRow,
  TableCell,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import NumberFormat from "react-number-format";

class TradeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableRow>
        <TableCell>
          <TextField
            value={this.props.ticker}
            placeholder="AAPL/CASH"
            InputProps={{
              style: {
                color:
                  this.props.ticker == "" ? undefined : this.props.color,
              },
            }}
            inputProps={{
              style: {
                textTransform: "uppercase",
              },
            }}
            onChange={(e) => {
              this.props.handleEdit(
                e.target.value.toUpperCase(),
                parseFloat(this.props.weight),
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
            placeholder={this.props.weightPlace}
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
            value={this.props.weight}
            onValueChange={(e) => {
              this.props.handleEdit(
                this.props.ticker,
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
