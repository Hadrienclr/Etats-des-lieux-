# Constat — États des lieux

Application web installable pour réaliser des états des lieux d’entrée et de sortie sur téléphone, tablette ou ordinateur.

## Déployer sur GitHub et Vercel

1. Créez un nouveau dépôt GitHub.
2. Déposez tout le contenu de ce dossier à la racine du dépôt.
3. Sur Vercel, choisissez **Add New > Project** et importez le dépôt.
4. Gardez les réglages proposés par défaut puis cliquez sur **Deploy**.

Aucune compilation, variable d’environnement ou base de données n’est nécessaire.

## Utilisation

- Les dossiers sont sauvegardés automatiquement dans le navigateur de l’appareil.
- **Sauvegarder les données** télécharge une copie JSON de tous les dossiers.
- **Importer** restaure cette sauvegarde.
- **Aperçu PDF** ouvre l’impression du navigateur : choisissez « Enregistrer au format PDF ».
- Après le premier chargement sur Vercel, l’application fonctionne hors ligne.

Les données, photos et signatures restent sur l’appareil. Exportez régulièrement une sauvegarde et stockez les PDF finaux dans l’espace documentaire sécurisé de l’agence.

Après une mise à jour, changez la valeur `constat-v1.0.0` dans `service-worker.js` afin que les appareils récupèrent immédiatement la nouvelle version.
