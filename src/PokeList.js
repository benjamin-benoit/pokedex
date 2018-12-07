import React, {Component} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

class PokeList extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      items: []
    });
  }

  componentDidMount() {
    this.PokeList();
  }

  PokeList() {
    fetch('http://localhost:8080/liste')
    .then(result=>result.json())
    .then(items=>this.setState({items}))
    // return this.state.items.map(item => {
    //   return <Item text={this.state.items.map(item=><li key={item.id}>{item.body}</li>)} />
    // });
  }

  render() {
    // this.props.match.params.id
    // console.log(this.state.items);

    const pokemons = this.state.items.map((item, i) => (
      <a href={'/pokemon/' + item.ndex}>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">{ item.numéro }/{ item.nom }</div>
        <div className="card-body">
        <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + item.ndex + '.png'} />
        </div>
        <div className="card-footer">
        { (item.type2) ? item.type1 + ", " + item.type2 : item.type1 }
        </div>
      </div>
      </a>
    ));

    return (
      <div id="layout-content" className="container-fluid">
      <div className="card-deck">
      { pokemons }
      </div>
      </div>
    );
  }
}

export default PokeList;

// export default withRouter(PokeList);
