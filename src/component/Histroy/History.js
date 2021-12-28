import axios from 'axios'
import React from 'react'
import NavBar from '../NavBar/navBar'
import { Chart } from "react-google-charts";
class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                ["News", "Visited"],
                ["CNN",2],
                ["BCC",2],
                ["CNN",2],
            ],
            data1: [
                ["News", "CNN", "BCC", "CNN"],
                ["2021", 2, 15, 10],
            ]
        };
        
    }
    componentDidMount() {
        var response = null;
        var googleId = this.props.googleId;
        if(googleId===null || googleId === undefined )googleId = "1212121212";
        if(googleId===null || googleId === undefined){
            console.log(" In but not Login ");
        }
        else{
            fetch('http://localhost:3000/getHistory/?googleId='+googleId)
            .then(response => response.json())
            .then((rdata)=>{
                  rdata = JSON.parse(rdata);
                  var tempData = [["News", "Visited"]];
                  var tempData2 = [ ["News"],   ["2021"],]
                  for(var i = 0 ;i<rdata.length;i++){
                    tempData.push([rdata[i].source,rdata[i].count]);
                    tempData2[0].push(rdata[i].source);
                    tempData2[1].push(rdata[i].count);
                  }
                console.log(tempData);
                this.setState({ data : tempData,data1:tempData2});
            });
        }   

    }
    
    
    
    render(){
        const { data ,data1 } = this.state;
        var options = {
            title: "My Daily Activities",
        };
        var options1 = {
            title: "News",
            legend: { position: "none" },
          };
        return( <div>
            <NavBar islogin="true" /> 
               <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}/>
            <Chart
                chartType="Bar"
                data={data1}
                options={options}
                width={"100%"}
                height={"400px"}
                />
            </div>
        );
      }
}
export default History;
