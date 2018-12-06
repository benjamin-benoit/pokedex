import React, {Component} from 'react';
import Item from './Item';
import { withRouter } from 'react-router-dom';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  componentDidMount() {
    this.PokeList();
  }

  PokeList() {
    const id = this.props.match.params.id;
    fetch('http://localhost:8080/pokemon/' + id)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
    // return this.state.items.map(item => {
    //   return <Item text={this.state.items.map(item=><li key={item.id}>{item.body}</li>)} />
    // });
  }

  render() {
    // console.log(this.state.items);

    if (!this.state.items) {
      return <h1>Loading</h1>
    } else {

      const numero = this.state.items.numéro;
      const nom = this.state.items.nom;
      const nomen = this.state.items.nomen;
      const attaques = this.state.items.attaques;
      // const listAttaques = attaques.map((d) => <span key={d.nom}>{d.nom}</span>);

      // const listAttaques = Object.entries(attaques).map(([key, value]) => (
      //           <p key={ key }> Hello, { attaques[key].nom } </p>
      //     ))

      console.log(numero);
      console.log(nom);
      console.log(nomen);
      console.log(attaques);


      // const persons = Object.keys(attaques).map((key, i) => (
      //   <div key={i}>
      //   <span>{ key } , {this.state.items[key].toString()}</span>
      //   </div>
      // ))

      return (
        <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list"></div>
        </div>
      );
    }
  }
}

export default Pokemon;
