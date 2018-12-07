import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

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
    fetch("http://localhost:8080/pokemon/" + id)
      .then(result => result.json())
      .then(items => this.setState({ items }));
  }

  render() {
    if (!this.state.items) {
      return <h1>Loading</h1>;
    } else {

      const {
        numero,
        nom,
        nomen,
        nomja,
        nomtm,
        nomde,
        ndex,
        jdex,
        njdex,
        hdex,
        nhdex,
        fdex,
        sdex,
        udex,
        nudex,
        adex,
        odex,
        opdex,
        espece,
        taille,
        poids,
        fmratio,
        oeufpas,
        effortval,
        type1,
        type2,
        expval,
        expmax,
        captureval,
        groupoeuf1,
        groupoeuf2,
        capspe1,
        capspe2,
        couleur,
        forme,
        attaques
      } = this.state.items;

      const listeAttaques = attaques.map((key, i) => (
        <div key={i} className="card top-buffer shadow-sm mb-4">
          <div className="card-header text-center">{key.nom}</div>
          <div className="card-body">
            <span className="d-block">Niveau: {key.niveau}</span>
            <span className="d-block">Puissance: {key.puissance}</span>
            <span className="d-block">Précision: {key.precision}</span>
            <span className="d-block">PP: {key.pp}</span>
          </div>
        </div>
      ));

      return (
        <main role="main" className="container">
          <h1>
            <Link to="/" className="h2">Retourner à la liste</Link>
          </h1>
          <div className="d-flex align-items-center p-3 my-3 text-gray-dark bg-grey rounded shadow-sm">
            <img
              className="mr-3"
              src={
                "https://img.pokemondb.net/sprites/x-y/normal/" +
                nomen.toLowerCase() +
                ".png"
              }
              alt=""
              width="48"
              height="48"
            />
            <div className="lh-100">
              <h6 className="mb-0 text-gray-dark lh-100">
                {nom}, {nomen}, {nomja}, {nomtm}, {nomde}
              </h6>
              <small>
                Espece: {espece} / Taille: {taille} / Poids: {poids}
              </small>
            </div>
          </div>

          <h4>Numéros:</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Kanto</th>
                <th scope="col">Johto</th>
                <th scope="col">Johto HGSS</th>
                <th scope="col">Hoenn</th>
                <th scope="col">Hoenn ROSA</th>
                <th scope="col">Fiore</th>
                <th scope="col">Sinnoh</th>
                <th scope="col">Unys</th>
                <th scope="col">Unys N2B2</th>
                <th scope="col">Nav Almia</th>
                <th scope="col">Oblivia</th>
                <th scope="col">Oblivia (Passé)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ndex}</td>
                <td>{jdex}</td>
                <td>{njdex}</td>
                <td>{hdex}</td>
                <td>{nhdex}</td>
                <td>{fdex}</td>
                <td>{sdex}</td>
                <td>{udex}</td>
                <td>{nudex}</td>
                <td>{adex}</td>
                <td>{odex}</td>
                <td>{opdex}</td>
              </tr>
            </tbody>
          </table>

          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">
              Informations
            </h6>
            <div className="media text-muted pt-3">
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <ul>
                      <li>Ratio femelle/mâle: {fmratio}</li>
                      <li>Nb pas avant éclosion: {oeufpas}</li>
                      <li>Points EV: {effortval}</li>
                    </ul>
                  </div>
                  <div class="col-sm">
                    <ul>
                      <li>Experience: {expval}</li>
                      <li>Experience max: {expmax}</li>
                      <li>Taux de capture: {captureval}</li>
                    </ul>
                  </div>
                  <div class="col-sm">
                    <ul>
                      <li>
                        Groupes oeuf:{" "}
                        {groupoeuf2
                          ? groupoeuf1 + ", " + groupoeuf2
                          : groupoeuf1}
                      </li>
                      <li>Couleur: {couleur}</li>
                      <li>Forme: {forme}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Attaques</h6>
            <div className="media text-muted pt-3">
              <div className="container-fluid">
                <div className="row">{listeAttaques}</div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
}

export default Pokemon;
