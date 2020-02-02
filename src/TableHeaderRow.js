import React from "react";
import "./App.css";

const TableHeaderRow = (props) => {

  return (
    <thead className="MuiTableHead-root">
      <tr className="MuiTableRow-root MuiTableRow-head">
      {props.columns.map((column, i) => {
        return (
          (() => 
            {
              switch(column.columnType){
                case "alignRight":
                  return (
                    <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
                      {column.columnName}
                    </th>
                  )
                  case "alignLeft":
                  return (
                  <th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall">
                  {column.columnName}
                  </th>
                  )
                default:
                  break;
              }
            }
          )
        )
      })
      }
      </tr>
    </thead>
  );
};

export default TableHeaderRow;
