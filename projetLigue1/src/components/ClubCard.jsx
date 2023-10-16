import { useState } from "react";

const ClubCard = ({ infos, creation, nom, logo, nombreDeTitres, annees}) => {
    const [display, setDisplay] = useState(infos)
    const bouton = () => {
        setDisplay(!display)
    }
    return (
    <figure className="card">
        <h2> {nom} </h2>
    <div className="logoClub">
        <img src={logo}></img>
    </div>
    <button onClick={bouton}>DÉTAILS</button>
    <div className={display ? "displayBouton" : "noDisplayBouton" }>
        <p className="anneeCreation">Club fondé en {creation} </p>
        <p className="nombreTitres">{nombreDeTitres} :</p>
        <p className="anneesTitres">{annees}</p>
    </div>
    </figure>
  )
};

export default ClubCard