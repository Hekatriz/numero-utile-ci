import { useState } from 'react';

const mockData = [
  {
    nom: "Police Nationale",
    numero: "111",
    categorie: "Urgences",
    localisation: "Abidjan",
    adresse: "Plateau, Abidjan",
    horaires: "24h/24",
    description: "Sécurité publique"
  },
  {
    nom: "SAMU",
    numero: "185",
    categorie: "Urgences",
    localisation: "Abidjan",
    adresse: "CHU de Cocody",
    horaires: "24h/24",
    description: "Urgences médicales"
  },
  {
    nom: "CIE - Dépannage",
    numero: "179",
    categorie: "Électricité",
    localisation: "National",
    adresse: "Plateau",
    horaires: "24h/24",
    description: "Compagnie Ivoirienne d'Électricité"
  }
];

export default function NumeroUtileCI() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter(item =>
    item.nom.toLowerCase().includes(search.toLowerCase()) ||
    item.categorie.toLowerCase().includes(search.toLowerCase()) ||
    item.localisation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Numéro Utile CI</h1>
      <input
        type="text"
        placeholder="Rechercher un service ou une ville..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      {filteredData.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h2>{item.nom}</h2>
          <p><strong>Catégorie :</strong> {item.categorie} – {item.localisation}</p>
          <p><strong>Numéro :</strong> {item.numero}</p>
          <p>{item.description}</p>
          <p><em>{item.horaires}</em></p>
          <button style={{ marginTop: '10px' }} onClick={() => window.location.href = `tel:${item.numero}`}>
            Appeler
          </button>
        </div>
      ))}
    </div>
  );
}
