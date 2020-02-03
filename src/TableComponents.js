import React from "react";
import "./App.css";

// Компонент ячейки заголовка таблицы (функциональный компонент)
const TableHeaderCell = (props) => {
	const { id } = props;
	const { type, name } = props.column;
	const thClassName = () => {
		switch (type) {
			case "alignRight":
				return "MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall";
			case "alignLeft":
				return "MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall";
			default:
				return "";
		}
	};
	return <th id={id} className={thClassName(type)}> {name} </th>;
};

// Компонент строки заголовка таблицы (функциональный компонент)
const TableHeaderRow = (props) => {
	return (
		<thead className="MuiTableHead-root">
			<tr className="MuiTableRow-root MuiTableRow-head">
				{props.columns.map((column, i) => {
					return <TableHeaderCell key={i} id={i} column={column}></TableHeaderCell>;
				})}
			</tr>
		</thead>
	);
};

export default TableHeaderRow;
