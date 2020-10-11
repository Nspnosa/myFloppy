import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParam: '',
      orderOption: 'name',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    const { name, value, type } = event.target;
    //call function, forget about state
    this.setState((prevState) => {
      return { [name]: value };
    });
    this.props.updateSearch(value, type);
  }

  render() {
    return (
      <div className="search-bar-main-container">
        <div className="search-bar-element">
          <input
            className="search-bar-input"
            type="text"
            name="searchParam"
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="search-bar-sort-element">
          <select
            className="search-bar-select"
            value={this.state.orderOption}
            onChange={this.onChangeHandler}
            name="orderOption"
          >
            <option value="upload-date">Upload date</option>
            <option value="name">Name</option>
            <option value="size">Size</option>
          </select>
        </div>
        <div className="search-bar-button-container">
          <button
            className="search-bar-button"
            onClick={this.props.changeOrder}
          >
            ⇕
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
