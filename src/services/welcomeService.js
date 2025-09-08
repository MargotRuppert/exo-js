export const chuckNorris = async () => {
    try {
        const data = await fetch ("https://api.chucknorris.io/jokes/random");
        console.log(data);

        // Vérification du statut de la réponse
        if (!data.ok || data.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", data.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }
        const transformedData = await data.json();
        console.log(transformedData);
        return transformedData.value;

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }

}

