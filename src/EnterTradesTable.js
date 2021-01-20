// Enter trade table.jsx

import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TextField,
  TableBody,
} from "@material-ui/core";
import PropTypes from "prop-types";
import axios from "axios";

let BASE_DOMAIN = `https://api.withlaguna.com`;
if (process.env.NODE_ENV === "development") BASE_DOMAIN = "http://0.0.0.0:5000";

const trade = {
  tradeType: "buy" | "sell",
  tradeDate: "",
  costBasis: "",
  quantity: "",
  ticker: "",
  priceSold: "",
  percentageReturn: "", //calculated here 
};

const NewTradeRow = ({ userId, onSubmit }) => {
  const formValues = {
    tradeType: { pl: "Trade Type", init: "", required: true },
    tradeDate: { pl: "Trade Date (mm/dd/yy)", init: "", required: true },
    costBasis: {
      pl: "Cost Basis",
      init: "",
      helperText: "Price purchased at",
      required: true,
    },
    quantity: { pl: "Quantity", init: "", required: true },
    ticker: { pl: "Ticker (AAPL)", init: "", required: true },
    priceSold: { pl: "Selling Price", init: "" },
    percentageReturn: { pl: "Percentage return", init: "" },
  };

  const editableTrades = Object.keys(formValues).reduce((res, key) => {
    res[key] = formValues[key].init || "" ;
    return res
  }, {});

  const [editTrades, setEditTrades] = useState(editableTrades);
  const [errorTrades, setErrorTrades] = useState(editableTrades);

  const handleInputChange = (e) => {
    e.preventDefault();
    setEditTrades({
      ...editTrades,
      [e.target.name]: e.target.value,
    });
    setErrorTrades({
      ...errorTrades,
      [e.target.name]: false,
    });
  };

  const handleSubmit = (e) => {
    // Submit this information into the DB and push it into the existing trades

    // Check trades are filled out
    let invalid = Object.entries(formValues)
      .filter(([key, value]) => {
        return value?.required && !editTrades[key];
      })
      .reduce((res, [k, v]) => {
        res[k] = true;
        return res;
      }, {});
    if (Object.keys(invalid).length > 0) {
      setErrorTrades(invalid);
      return;
    }

    console.log(editTrades)

    axios
      .post(`${BASE_DOMAIN}/stonks/access/insert/${userId}`,
        editTrades)
      .then((res) => {
        if (res.data.allow) {
          onSubmit(editTrades);
        } else {
        }
      })
      .catch(() => {
        // something went wrong here
      });
  };

  return (
    <TableRow>
      {Object.entries(formValues).map(([key, value]) => {
        return (
          <TableCell key={key}>
            <TextField
              name={key}
              onChange={handleInputChange}
              placeholder={value.pl}
              label={value.pl}
              value={editTrades[key]}
              error={errorTrades[key]}
              size="small"
              fullWidth
              helperText={value?.helperText}
              required={value?.required}
            />
          </TableCell>
        );
      })}

      <TableCell>
        <Button onClick={handleSubmit}>Confirm</Button>
      </TableCell>
    </TableRow>
  );
};

export const EnterTradesTable = ({ userId }) => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    // set trades from BE that were manually entered
  }, []);

  const onSubmit = () => {
    // some logic to insert a trade here
  };

  // Add new trade row

  return (
    <Table>
      <TableBody>
        <NewTradeRow onSubmit={onSubmit} userId={userId} />
      </TableBody>
    </Table>
  );
};
