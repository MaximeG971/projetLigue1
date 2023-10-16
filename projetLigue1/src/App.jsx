import NavBar from "./components/NavBar";


const clubsList = [
  {
    creation : "1970",
    nom : "Paris Saint Germain",
    logo : "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/480px-Paris_Saint-Germain_Logo.svg.png",
    nombreDeTitres : "11 titres",
    annees : "1986, 1994, 2013, 2014, 2015, 2016, 2018, 2019, 2020, 2022, 2023",
  },
  {
    creation : "1933",
    nom : "AS Saint-Etienne",
    logo : "https://upload.wikimedia.org/wikipedia/fr/thumb/3/3e/AS_Saint-Etienne-logo_2022.svg/1200px-AS_Saint-Etienne-logo_2022.svg.png",
    nombreDeTitres : "10 titres",
    annees : "1957, 1964, 1967, 1968, 1969, 1970, 1974, 1975, 1976, 1981",
  },
  {
    creation : "1899",
    nom : "Olympique de Marseille",
    logo : "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
    nombreDeTitres : "9 titres",
    annees : "1937, 1948, 1971, 1972, 1989, 1990, 1991, 1992, 2010",
  },
  {
    creation : "1943",
    nom : "FC Nantes",
    logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/1200px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png",
    nombreDeTitres : "8 titres",
    annees : "1965, 1966, 1973, 1977, 1980, 1983, 1995, 2001",
  },
  {
    creation : "1924",
    nom : "AS Monaco",
    logo : "https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/1200px-Logo_AS_Monaco_FC_-_2021.svg.png",
    nombreDeTitres : "8 titres",
    annees : "1961, 1963, 1978, 1982, 1988, 1997, 2000, 2017",
  }
]

const App = () => {
  return (
    <NavBar data={clubsList}/>
  )
}

export default App
