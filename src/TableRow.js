import React from "react";
import "./App.css";

const TableRow = ({ id, name, email, phone, city }) => {
  return (
    <tr className="MuiTableRow-root MuiTableRow-hover" key={id}>
      <th className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
        {name}
      </th>
      <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
        {email}
      </td>
      <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
        {phone}
      </td>
      <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
        {city}
      </td>
    </tr>
  );
};

export default TableRow;
