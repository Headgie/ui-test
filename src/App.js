import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Container, Paper, useScrollTrigger } from "@material-ui/core";
import TableRow from "./TableRow";
import TableHeaderRow from "./TableComponents";

// Корневой компонент приложения
// Реализуется классовым компонентом. 
// Состояние приложения хранится в этом компоненте
class App extends Component { 
  // В конструкторе инициализируем состояние
	constructor() {
		super();
		this.state = {
      data: [], // данные для отображения в таблице
      selectedRow: -1 //id выбранного элемента
		};
	}

  // После завершения монтирования компонента запрашиваем данные и 
  // записываем их в объект состояния, это вызывает метод render()
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				return response.json();
			})
			.then(users => {
				this.setState({ data: users });
			});
  }
  // Обработчик синтетического эвента клика на строчку грида
  handleGridRowClick = (e) => {
    this.setState({selectedRow: e.id});
  }

  // Метод отрисовки корневого компонента
	render() {
		const { data } = this.state;
		return (
      <div className="App">
        {/* Первый вариант - хардкодная таблица */}
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
        {/* Второй вариант - таблица с использованием компонентов */}
        <div className="MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root">
					<table className="MuiTable-root jss1173">
            <TableHeaderRow
              key={"thead tr 0"}
							columns={[
								{ type: "alignLeft", name: "Name" },
								{ type: "alignRight", name: "Email" },
								{ type: "alignRight", name: "Phone" },
								{ type: "alignRight", name: "City" }
							]}
						></TableHeaderRow>
						<tbody className="MuiTableBody-root">
							{data.map((user, i) => {
								return (
                  <TableRow
                    key={user.id}
										id={user.id}
										name={user.name}
										email={user.email}
										phone={user.phone}
                    city={user.address.city}
                    onClick={this.handleGridRowClick}
                    selected={this.state.selectedRow===user.id}
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
