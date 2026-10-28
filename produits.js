const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];
console.log("--- Catalogue ---");
for (const p of produits) {
    console.log(`${p.nom} : ${p.prix} MAD`);
}
const produitsDispo = produits.filter(p => p.stock > 0);
console.log("\nProduits disponibles :", produitsDispo.length);
const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);
console.log("Valeur totale du stock :", valeurStock, "MAD");
if (produitsDispo.length === 0) {
    console.log("Aucun produit disponible.");
} else {
    const moinsCher = produitsDispo.reduce((min, p) => (p.prix < min.prix ? p : min));
    console.log("Produit le moins cher :", moinsCher.nom, `(${moinsCher.prix} MAD)`); 
}
const lignesResume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
console.log("\n--- Résumé ---");
for (const ligne of lignesResume) {
    console.log(ligne);
}
// 1. La fonction estValide
function estValide(produit) {
    return Number.isFinite(produit.prix) && produit.prix >= 0 && 
           Number.isFinite(produit.stock) && produit.stock >= 0;
}
// 2. La déstructuration pour le produit le moins cher
if (produitsDispo.length > 0) {
    const moinsCher = produitsDispo.reduce((min, p) => (p.prix < min.prix ? p : min));
    const { nom, prix } = moinsCher; 
    console.log(`Déstructuration : Le produit le moins cher est ${nom} à ${prix} MAD.`);
}