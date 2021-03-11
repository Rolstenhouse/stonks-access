import React, { useState } from "react";

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

class TradeRow extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        value_ticker: this.props.ticker,
        value_weight: this.props.weight,
      }

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
          <TextField
            value={this.state.value_weight}
            placeholder='10'
            InputProps={{
              endAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
            onChange={(e) => {
              this.setState({ value_weight: e.target.value });
              this.props.handleEdit(
                this.state.value_ticker,
                parseFloat(e.target.value),
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
