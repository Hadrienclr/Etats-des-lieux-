# État des lieux V2 — base propre

Application mobile PWA, sans backend, avec stockage local IndexedDB.

## Inclus
- catalogue de dossiers ;
- assistant de création ;
- entrée / sortie ;
- modèles de pièces avec éléments adaptés ;
- photos par pièce ;
- signatures tactiles ;
- sauvegarde automatique ;
- duplication d’un dossier ;
- dictée vocale avec validation ;
- PDF neutre avec tableaux, photos, signatures et pagination ;
- icône iPhone et PWA.

## Déploiement
1. Déposer tous les fichiers à la racine du dépôt GitHub.
2. Connecter le dépôt à Vercel.
3. Framework : Other.
4. Aucune commande de build.
5. Ouvrir l’URL dans Safari puis Partager > Ajouter à l’écran d’accueil.

## Limites
- les dossiers restent stockés sur l’appareil ;
- la dictée dépend du navigateur ;
- l’import PDF est conservé mais n’est pas analysé automatiquement dans cette V2 propre ;
- aucune synchronisation entre appareils.
