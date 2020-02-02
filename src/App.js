import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Paper, useScrollTrigger } from "@material-ui/core";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableHeaderRow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ data: users });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className="MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root">
          <table className="MuiTable-root jss1173">
            <thead className="MuiTableHead-root">
              <tr className="MuiTableRow-root MuiTableRow-head">
                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall">
                  Name
                </th>
                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
                  Email
                </th>
                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
                  Phone
                </th>
                <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
                  City
                </th>
              </tr>
            </thead>
            <tbody className="MuiTableBody-root">
              {data.map((user, i) => {
                return (
                  <tr className="MuiTableRow-root MuiTableRow-hover" key={i}>
                    <th className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                      {user.name}
                    </th>
                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
                      {user.email}
                    </td>
                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
                      {user.phone}
                    </td>
                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
                      {user.address.city}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root">
          <table className="MuiTable-root jss1173">
          <TableHeaderRow
            columns={[
              {columnType: "alignLeft", columnName: "Name"},
              {columnType: "alignRight", columnName: "Email"},
              {columnType: "alignRight", columnName: "Phone"},
              {columnType: "alignRight", columnName: "City"}                
            ]}
          ></TableHeaderRow>

         
            <tbody className="MuiTableBody-root">
              {data.map((user, i) => {
                return (
                  <TableRow
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    city={user.address.city}
                  ></TableRow>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
