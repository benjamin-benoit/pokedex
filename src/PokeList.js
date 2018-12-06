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
      <div className="grid-item">
        <a href={'/pokemon/' + item.ndex}>{ item.numéro }, { item.nom }</a>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list" className="grid-container">{ pokemons }</div>
      </div>
    );
  }
}

export default PokeList;

// export default withRouter(PokeList);
