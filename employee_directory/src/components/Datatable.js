import React from "react";
import Api from "../utilis/Api.js";
import Search from "./SearchBox.js";
import "../styles/DataTable.css";
import DateFormat from 'dateformat';

class DataTable extends React.Component {

  state = {
    sortOrder: "",
    results: [],
    search: ""
  }

  //The API 
  componentDidMount() {
    Api.getUsers()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      }).catch(err => console.log(err))
  }
  //Handle the search bar input
  handleInputChange = event => {
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm
      })
    }
  }
//This is to sort by first name
  sortByFName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

  //Sort by the last name
  sortByLName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}
          search={this.state.search} />

        <div className="table-responsive">
        <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB </th>
              </tr>
            </thead>

            { 
              this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone}</td>
                      <td >{item.email}</td>
                      <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                    </tr>
                  </tbody>
                  :
                  item.name.last.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                      <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone} </td>
                        <td >{item.email}</td>
                        <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                      </tr>
                    </tbody>
                    :
                    null
              )}
          </table>
        </div>
      </div>
    )
  }
}

export default DataTable;
