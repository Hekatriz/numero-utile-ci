import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Numéro Utile CI</h1>
      <Input
        placeholder="Rechercher un service ou une ville..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-6"
      />
      <div className="space-y-4">
        {filteredData.map((item, index) => (
          <Card key={index} className="shadow">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{item.nom}</h2>
              <p className="text-sm text-gray-600">{item.categorie} - {item.localisation}</p>
              <p className="mt-1">📞 <strong>{item.numero}</strong></p>
              <p className="text-sm">{item.description}</p>
              <p className="text-sm italic">{item.horaires}</p>
              <Button className="mt-2">Appeler</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
