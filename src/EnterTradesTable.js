// Enter trade table.jsx

import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TextField,
  TableBody,
  TableHead,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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

const formValues = {
  tradeType: {
    title: "Trade Type (buy/sell/other)",
    pl: "buy/sell/other",
    init: "",
    required: true,
  },
  tradeDate: {
    title: "Trade Date (mm/dd/yyyy)",
    pl: "mm/dd/yyyy",
    init: "",
    required: true,
  },
  costBasis: {
    title: "Cost Basis",
    pl: "$10.01",
    init: "",
    required: true,
  },
  quantity: { title: "Quantity", pl: "5", init: "", required: true },
  ticker: { title: "Ticker", pl: "AAPL", init: "", required: true },
  priceSold: { title: "Sold price", pl: "100.0", init: "" },
  percentageReturn: { title: "Return Percentage", pl: "305.75%", init: "" },
};

const NewTradeRow = ({ userId, onSubmit }) => {
  const editableTrades = Object.keys(formValues).reduce((res, key) => {
    res[key] = formValues[key].init || "";
    return res;
  }, {});

  const [editTrades, setEditTrades] = useState(editableTrades);
  const [errorTrades, setErrorTrades] = useState(editableTrades);
  const [generalError, setGeneralError] = useState("");

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
    e.preventDefault();

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

    console.log(editTrades);

    axios
      .post(`${BASE_DOMAIN}/stonks/access/insert/${userId}`, editTrades)
      .then((res) => {
        if (res.data.allow) {
          onSubmit(editTrades);
          // Clear trading entries
          setEditTrades(editableTrades);
        } else {
          setGeneralError(res.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          setGeneralError(JSON.stringify(err.response.data.err));
        }
        // something went wrong here
      });
  };

  return (
    <TableRow style={{ height: 50 }}>
      {Object.entries(formValues).map(([key, value]) => {
        return (
          <TableCell key={key}>
            <TextField
              name={key}
              onChange={handleInputChange}
              placeholder={value.pl}
              // label={value.pl}
              value={editTrades[key]}
              error={!!errorTrades[key]}
              size="tiny"
              fullWidth
              helperText={value?.helperText}
              required={value?.required}
            />
          </TableCell>
        );
      })}

      <TableCell>
        <Button
          onClick={handleSubmit}
          style={{
            backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
            color: "white",
          }}
        >
          Add trade
        </Button>
        {!!generalError && <>{generalError}</>}
      </TableCell>
    </TableRow>
  );
};

export const EnterTradesTable = ({ userId, enableContinue}) => {
  const [trades, setTrades] = useState([]);
  const theme = useTheme();

 

  useEffect(() => {
    console.log('useEffect trade len: ' + trades.length)
    if (trades.length > 0) {
      enableContinue(null)

    } else{
      enableContinue("disabled")

    }
  })

  useEffect(() => {
    // set trades from BE that were manually entered
    axios.get(`${BASE_DOMAIN}/stonks/access/trades/${userId}`).then((res) => {
      if (res.data.allow) {
        console.log('trades loaded: ' + res.data.trades.length)
        setTrades(res.data.trades);
      }
    });
  }, []);



  const onSubmit = (editTrades) => {
    // some logic to insert a trade here
    setTrades([...trades, editTrades]);
  };

  // Add new trade row

  console.log('curren trade length: ' + trades.length)

  return (
    <Table
      size="small"
      style={{ marginTop: theme.spacing(4), marginBottom: theme.spacing(4) }}
    >
      <TableHead>
        <TableRow>
          {Object.entries(formValues).map(([key, value]) => {
            return <TableCell key={key}>{value.title}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {trades.map((t) => {
          return (
            <TableRow>
              <TableCell>{t.tradeType}</TableCell>
              <TableCell>{t.tradeDate}</TableCell>
              <TableCell>{t.costBasis}</TableCell>
              <TableCell>{t.quantity}</TableCell>
              <TableCell>{t.ticker}</TableCell>
              <TableCell>{t.soldPrice}</TableCell>
              <TableCell>{t.returnPercentage}</TableCell>
            </TableRow>
          );
        })}
        <NewTradeRow onSubmit={onSubmit} userId={userId} />
      </TableBody>
    </Table>
  );
};
