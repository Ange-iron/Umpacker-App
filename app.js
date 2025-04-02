import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaperCalculator() {
  const [bogen, setBogen] = useState(0);
  const [breite, setBreite] = useState(88);
  const [länge, setLänge] = useState(63);
  const [grammatur, setGrammatur] = useState(110);
  const [gewicht, setGewicht] = useState(null);
  const [höhe, setHöhe] = useState(null);
  const [kg, setKg] = useState(0);
  const [cm, setCm] = useState(null);

  const calculateWeight = () => {
    const weight = (breite * länge * grammatur * bogen) / 10000;
    setGewicht(weight.toFixed(2));
  };

  const calculateSizeFromBogen = () => {
    const height = bogen * 0.147; // Beispielwert für Bogendicke
    setHöhe(height.toFixed(2));
  };

  const calculateSizeFromKg = () => {
    const size = kg / 0.133884; // Beispielwert für Umrechnung
    setCm(size.toFixed(2));
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Bogen zu Kg Berechnung</h2>
          <Input
            type="number"
            placeholder="Anzahl Bogen"
            value={bogen}
            onChange={(e) => setBogen(e.target.value)}
          />
          <Button onClick={calculateWeight}>Berechnen</Button>
          {gewicht && <p>Gewicht: {gewicht} kg</p>}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Bogen zu cm Berechnung</h2>
          <Input
            type="number"
            placeholder="Anzahl Bogen"
            value={bogen}
            onChange={(e) => setBogen(e.target.value)}
          />
          <Button onClick={calculateSizeFromBogen}>Berechnen</Button>
          {höhe && <p>Höhe: {höhe} cm</p>}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 p-4">
          <h2 className="text-xl font-bold">Kg zu cm Berechnung</h2>
          <Input
            type="number"
            placeholder="Gewicht in Kg"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
          />
          <Button onClick={calculateSizeFromKg}>Berechnen</Button>
          {cm && <p>Höhe: {cm} cm</p>}
        </CardContent>
      </Card>
    </div>
  );
}
erster Upload
