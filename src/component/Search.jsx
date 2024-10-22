import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchFilm(this.state.search, this.state.type);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div
            className="input-field inline"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Найти"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
              className="search-input"
            />

            <button
              className="btn_search"
              onClick={() => this.props.searchFilm(this.state.search, this.state.type)}
            >
              Поиск
            </button>
          </div>

          <label>
            <input class="with-gap" name="group3" type="radio" checked />
            <span style={{margin: '0px 25px 5px'}}>Фильмы</span>
          </label>

          <label>
            <input class="with-gap" name="group3" type="radio" checked />
            <span>Сериалы</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
