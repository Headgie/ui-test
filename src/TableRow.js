import React from "react";
import "./App.css";

// Компонент строки таблицы (функциональный компонент)
const TableRow = (props) => {
  const { id, name, email, phone, city, onClick, selected } = props;
  const handleClick =() => {
    onClick(props);
  }
  return (
    <tr className={"MuiTableRow-root MuiTableRow-hover" +
      (selected?" Mui-selected":"")} 
      key={id} onClick={handleClick}>
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
