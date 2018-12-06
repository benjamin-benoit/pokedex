import React, {Component} from 'react';
import Item from './Item';
import { withRouter } from 'react-router-dom';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: null
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

      // const numero = this.state.items.numéro;
      // const nom = this.state.items.nom;
      // const nomen = this.state.items.nomen;
      // const attaques = this.state.items.attaques;

      const { numero, nom, espece, taille, poids, attaques } = this.state.items

      // const listAttaques = attaques.map((d) => <span key={d.nom}>{d.nom}</span>);

      // const listAttaques = Object.entries(attaques).map(([key, value]) => (
      //           <p key={ key }> Hello, { attaques[key].nom } </p>
      //     ))

      // const listAttaques = null
      //
      // if (attaques) {
      //   listAttaques = attaques.map(function(data, idx) {
      //     return ([
      //       <p key={idx}>{data.nom}</p>,
      //       <p key={idx}>{data.puissance}</p>,
      //     ]);
      //   });
      //   console.log(listAttaques);
      // }

      // console.log(numero);
      // console.log(nom);
      // console.log(espece);


      // const persons = Object.keys(attaques).map((key, i) => (
      //   <div key={i}>
      //   <span>{ key } , {this.state.items[key].toString()}</span>
      //   </div>
      // ))

      return (
        <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{ numero }, { nom }, { espece }, { taille }, { poids }</div>
        <h1>Attaques:</h1>
        {attaques.map((key, i) => (
          <ul key={i}>
            <li>nom: {key.nom}</li>
            <li>niveau: {key.niveau}</li>
            <li>puissance: {key.puissance}</li>
            <li>precision: {key.precision}</li>
            <li>pp: {key.pp}</li>
          </ul>
        ))}
        </div>
      );
    }
  }
}

export default Pokemon;
