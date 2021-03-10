import React, { useState } from 'react';
import TradeRow from './TradeRow'
import { PieChart } from 'react-minimal-pie-chart';


import {
    Button,
    Table,
    TableRow,
    TableCell,
    TextField,
    TableBody,
    TableHead,
    Typography
  } from "@material-ui/core";

  import axios from "axios";
  
  let BASE_DOMAIN = `https://api.withlaguna.com`;
  if (process.env.NODE_ENV === "development") BASE_DOMAIN = "http://0.0.0.0:5000";

class ManTradesTable extends React.Component{
    constructor(props){
        super(props)
        // const [trades, setTrades] = useState([])
        this.state = {trades: [{placeholder: true}], total_weight: 0}
        
    }

    handleCreate = () => {
        // this.props.onTemperatureChange(e.target.value)
        console.log('Create was clicked')

        // axios
        // .post(`${BASE_DOMAIN}/holdings/create/${userId}`, editTrades)
        // .then((res) => {
        //   if (res.data.allow) {
        //     onSubmit(editTrades);
        //     // Clear trading entries
        //     setEditTrades(editableTrades);
        //   } else {
        //     setGeneralError(res.data);
        //   }
        // })
        // .catch((err) => {
        //   if (err.response) {
        //     // check data
        //     const err_msg = err.response.data.err;
        //     if (!!err_msg?.form) {
        //       setErrorTrades(
        //         err_msg.form.reduce((res, filter) => {
        //           const k = Object.keys(filter)[0];
        //           const v = filter[k];
        //           res[k] = v;
        //           return res;
        //         }, {})
        //       );
        //     } else {
        //       setGeneralError(JSON.stringify(err_msg));
        //     }
        //   }
        //   // something went wrong here
        // });

      }

     handleHoldingEdit = (ticker, weight, index) => {

        //   new_trades = this.state.trades
        console.log('handle holding edit with index ', index, ticker)
        
        const new_trades = this.state.trades
        if (new_trades[index].placeholder) {
            new_trades.push({placeholder: true})
        }
        new_trades[index] = {placeholder: false, weight: weight, ticker:ticker}


 
        
        const total_weight = new_trades.reduce((sum, t) => {
            if ( !isNaN(t.weight) && t.weight != '') {
                console.log(t)
                return parseFloat(t.weight) + sum
            } else{
                return sum
            }
        }, 0)

        console.log('total weight', total_weight)


        this.setState({trades: new_trades, 
                        total_weight, total_weight})




      }

    render(){

        const pallete = ['#0074D9', '#FF4136', '#2ECC40', '#FF851B', '#7FDBFF', '#B10DC9', '#FFDC00', '#001f3f', '#39CCCC', '#01FF70', '#85144b', '#F012BE', '#3D9970', '#111111', '#AAAAAA']
        var data = this.state.trades.filter((t) => (!t.placeholder && !isNaN(t.weight))).map((t, index) => {
 
                const slice =  {title: t.ticker, value : t.weight, color : pallete[index % pallete.length]}
                console.log(slice)
                return slice
            
        })
        console.log('data length: ', data.length)

        return (
        <div>
            <Typography variant="h4" >
                Manual Enter Your Holdings to Create Your Portfolio
            </Typography>
            <Typography style={{color: "gray"}}>
                Ensure your percentages add up to 100!
            </Typography>
        <div style={{ display: "flex", alignItems: "flex-start", marginTop:20}}>
            <div style={{ flexGrow: "1",
                        marginLeft: 20}}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Ticker</TableCell>
                    <TableCell>Percent</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    this.state.trades.map((t, index) => {
                        if (t.placeholder){
                            return <TradeRow handleEdit={this.handleHoldingEdit} place_ticker='AAPL' place_weight='10' index = {index} color={pallete[index % pallete.length]}/>
                        } else{
                            return <TradeRow handleEdit={this.handleHoldingEdit} ticker={t.ticker} place_ticker='AAPL' place_weight='10' weight={t.weight.toString()} index={index} color={pallete[index % pallete.length]}/>
                        }
                    })
                }

            </TableBody>
        </Table>
        <div style={{
            textAlign: "right",
            marginTop: 5
        }}>Total: <span style={{ color: this.state.total_weight <= 100 ? 'green' : 'red' }}>{this.state.total_weight}% </span> of 100%</div>
        
        
          <Button    
          disabled={this.state.total_weight != 100}
          onClick={this.handleCreate}
          style={{
            backgroundImage: "linear-gradient(to top right, #A01A7D, #EC4067)",
            color: "white",
            opacity: this.state.total_weight == 100 ? 1.0 : 0.5,
            marginTop: 20
          }}>
              Create Portfolio
          </Button>
          </div>

            <PieChart style={{ flexGrow: "1"}}
            radius={20}
            lineWidth={15}
            viewBoxSize = {[100,100]}
            center = {[50,30]}
            lengthAngle={Math.min(this.state.total_weight / 100 * 360, 360)}
            data={data.length > 0 ? data : [{title: 'None', value : 100, color : "#DCDCDC"}]}
            />
        
</div>
        </div>)
    }

}

export default ManTradesTable