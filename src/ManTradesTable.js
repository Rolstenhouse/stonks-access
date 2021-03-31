import React, { useState } from "react";
import TradeRow from "./TradeRow";
import { PieChart } from "react-minimal-pie-chart";
import { piePallete, colors } from "./colors";

import {
  Button,
  Table,
  TableRow,
  TableCell,
  TextField,
  TableBody,
  TableHead,
  Typography,
  IconButton,
} from "@material-ui/core";

import axios from "axios";

let BASE_DOMAIN = `https://api.withlaguna.com`;
// if (process.env.NODE_ENV === "development") BASE_DOMAIN = "http://0.0.0.0:5000";

class ManTradesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [{ ticker: "", weight: null }],
      total_weight: 0,
      validPortfolio: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(`${BASE_DOMAIN}/stonks/holdings/manual`, {
        params: { edit_id: this.props.editId },
      })
      .then((res) => {
        this.setState(
          { trades: [...res.data.holdings, { ticker: "", weight: null }] },
          () => {
            this.calculateWeight();
          }
        );
      });
  };

  handleCreate = () => {
    axios
      .post(`${BASE_DOMAIN}/stonks/holdings/create`, {
        user_id: this.props.userId,
        edit_id: this.props.editId,
        portfolio: this.state.trades.filter(
          (t) => !isNaN(t.weight) && t.ticker != ""
        ),
      })
      .then((res) => {
        this.props.advanceStep && this.props.advanceStep(8);
      })
      .catch((err) => {
        if (err.response) {
          // check data
          const errMsg = err.response.data.errMsg;
          this.setState({ errMsg: errMsg });
        }
      });
  };

  calculateWeight = () => {
    let validPortfolio = true;
    const total_weight = this.state.trades.reduce((sum, t) => {
      return sum + (t.weight ? parseFloat(t.weight) : 0);
    }, 0);
    if (total_weight != 100) validPortfolio = false;

    this.setState({
      total_weight: total_weight,
      validPortfolio: validPortfolio,
    });
  };

  handleHoldingEdit = (ticker, weight, index) => {
    let validPortfolio = true;

    const new_trades = this.state.trades;
    if (index + 1 >= new_trades.length && ticker != "" && !isNaN(weight)) {
      new_trades.push({ ticker: "", weight: null });
    }

    new_trades[index] = { weight: weight, ticker: ticker };

    const total_weight = new_trades.reduce((sum, t) => {
      return sum + (t.weight ? parseFloat(t.weight) : 0);
    }, 0);
    if (total_weight != 100) validPortfolio = false;

    let errMsg = undefined;
    if (
      new_trades.reduce((isDup, t, i) => {
        return isDup || (t.ticker == ticker && index != i && ticker != "");
      }, false)
    ) {
      errMsg = "Duplicate ticker: ".concat(ticker);
      validPortfolio = false;
    }

    this.setState({
      trades: new_trades,
      total_weight: total_weight,
      errMsg: errMsg,
      validPortfolio: validPortfolio,
    });
  };

  render() {
    var data = this.state.trades.map((t, index) => {
      const weight = isNaN(t.weight) ? 0 : t.weight;
      const slice = {
        title: t.ticker,
        value: weight,
        color: piePallete[index % piePallete.length],
      };
      return slice;
    });

    return (
      <div>
        <Typography variant="h4">Manual holdings</Typography>
        <Typography style={{ color: "gray" }} variant="subtitle1">
          Ensure your percentages add up to 100%
        </Typography>

        <div
          style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}
        >
          <div style={{ flexGrow: "1", marginLeft: 20 }}>
            <Table>
              <TableHead>
                <TableRow style={{backgroundColor: colors.lightBlue}}>
                  {["Ticker", "Percent"].map((o) => (
                    <TableCell>
                      <b>{o}</b>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.trades.map((t, index) => {
                  return (
                    <TradeRow
                      weightPlace={(100 - this.state.total_weight).toFixed(1)}
                      handleEdit={this.handleHoldingEdit}
                      ticker={t.ticker}
                      weight={t.weight}
                      index={index}
                      color={piePallete[index % piePallete.length]}
                    />
                  );
                })}
              </TableBody>
              {this.state.errMsg != undefined && (
                <Typography
                  variant="caption"
                  style={{
                    color: "red",
                    textAlign: "left",
                    marginTop: 5,
                  }}
                >
                  {this.state.errMsg}
                </Typography>
              )}
            </Table>

            <div
              style={{
                textAlign: "right",
                marginTop: 5,
              }}
            >
              Total:{" "}
              <span
                style={{
                  color: this.state.total_weight <= 100 ? "green" : "red",
                }}
              >
                {this.state.total_weight}%{" "}
              </span>{" "}
              of 100%
            </div>

            <Button
              disabled={!this.state.validPortfolio}
              onClick={this.handleCreate}
              style={{
                backgroundImage:
                  "linear-gradient(to top right, #A01A7D, #EC4067)",
                color: "white",
                opacity: this.state.validPortfolio ? 1.0 : 0.5,
                marginTop: 20,
              }}
            >
              {!!this.props.editId ? 'Update Portfolio' : 'Create Portfolio'}
            </Button>
          </div>

          <PieChart
            style={{ flexGrow: "1" }}
            radius={20}
            lineWidth={15}
            viewBoxSize={[100, 100]}
            center={[50, 30]}
            lengthAngle={Math.min((this.state.total_weight / 100) * 360, 360)}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default ManTradesTable;
