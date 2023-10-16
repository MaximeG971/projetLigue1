const ClubCard = ({ nom, logo, nombreDeTitres, annees}) => {
  return (
    <figure className="card">
        <h2> {nom} </h2>
    <div className="logoClub">
        <img src={logo}></img>
    </div>
    <div className="texteCache">
        <p className="nombreTitres">{nombreDeTitres} :</p>
        <p className="anneesTitres">{annees}</p>
    </div>
    </figure>
  )
};

export default ClubCard