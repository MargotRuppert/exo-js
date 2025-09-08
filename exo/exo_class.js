class CompteBancaire {
    constructor(nom, solde) {
        this.nom = nom;
        this.solde = 0;
    }

    crediter(montant){
        if(montant > 0){
            this.solde += montant;
        }
        console.log(`${this.nom} possède ${montant} euros`);
        }


        retrait(montant){
            if (montant <= this.solde){
                this.solde -= montant;
                console.log(`${this.nom} a retiré ${montant} euros`);
            } else {
                console.log("la somme demandée n'est pas disponible");
            }
        }

        virement(montant, membre){
            console.log("slt virement");
            membre.crediter(montant);
            this.retrait(montant);
            console.log(`${this.nom} a envoyé ${montant} euros à ${membre.nom}`);
        }

        visualisation(){
            console.log(`${this.nom} possède ${this.solde} euros`);
        }

    }

        // Main, gère 3 comptes bancaires dans un tableau associatif
    const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
    };

        // lecture tableau associatif ou Objet["truc"]
    // Crédite et décrit chaque compte
    for (let key in lesComptes) lesComptes[key].crediter(1000);

    // un retrait de 100 par Alex
   lesComptes.Alex.retrait(100);
    // un petit virement: Marco Vire 300 à Clovis
    lesComptes.Marco.virement(300, lesComptes.Clovis);

    // un petit retrait incorrect (doit déclencher erreur custom) : 
    // Alex fait un retrait de 1200
lesComptes.Alex.retrait(1200);
    // bilan : faire une description de tous les comptes en console (ou DOM ?)

class Produit{
    constructor(nom, prix, quantite){
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }

    disponible(quantite){
        if (quantite > 0){
            console.log("produit disponible");
            return true;
        } else {
            console.log("produit non disponible");
            return false;
        }
    }
}

class Magasin{
    constructor(){
        this.produit = [];
    }

    ajouterProduit(produit){
        if (!produit){
            return this.produit += produit;
        } else {
            console.log("le produit existe déjà");
        }
    }
}