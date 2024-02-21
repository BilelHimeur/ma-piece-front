export class VehiculeDetails {
  modele: string;
  annee: number;
  immatriculation: string;
  pieces: string[];

  constructor(modele: string, annee: number, immatriculation: string, pieces: string[]) {
    this.modele = modele;
    this.annee = annee;
    this.immatriculation = immatriculation;
    this.pieces = pieces;
  }
}
