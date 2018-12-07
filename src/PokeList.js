import React, { Component } from "react";
import { Link } from "react-router-dom";

class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.PokeList();
  }

  PokeList() {
    fetch("http://localhost:8080/liste")
      .then(result => result.json())
      .then(items => this.setState({ items }));
  }

  render() {

    const pokemons = this.state.items.map((item, i) => (
      <Link to={"/pokemon/" + item.ndex}>
        <div className="card mb-4 shadow-sm">
          <div className="card-header text-center">
            {item.numéro}/{item.nom}
          </div>
          <div className="card-body">
            <img
              src={
                "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
                item.ndex +
                ".png"
              }
            />
          </div>
          <div className="card-footer text-center">
            {item.type2 ? item.type1 + ", " + item.type2 : item.type1}
          </div>
        </div>
      </Link>
    ));

    return (
      <div id="layout-content" className="container-fluid">
        <div className="card-deck">{pokemons}</div>
      </div>
    );
  }
}

export default PokeList;
