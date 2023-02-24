# **Workshop NextJS**

Le but de ce workshop est de vous faire découvrir le framework NextJs.
<br>
Nous verrons les concepts les plus basiques dans le Fullstack, allant à la création de requêtes à l'affichage d'une page web. Et comment connecter votre page web avec les données qui sont stockés côté serveur.

<br>

# **Prérequis**

- Avoir 'NPM' et 'NodeJs' d'installer, si non:
<br>
>Avant tout, mettez à jour vos packages selon votre OS (example Ubuntu):
```
> sudo apt-get update
```
```
### NodeJs
> sudo apt-get install nodejs
### Npm
> sudo apt-get update npm
```

Vous pouvez vérifier si les installations se sont bien passées avec:
```
> node -v
> npm --version
```

- Avoir un compte MongoDB et une database prête pour l'utiliser pendant le workshop. Ainsi que mettre l'url de la database mongodb dans un .env avec la syntaxe suivante:
```
MONGODB_URI="l'url de votre base de données'
```

# **NextJs ?**

Vous connaissez sûrement React, l'un des framework leader pour faire du front-end créé par Facebook.
<br>
NextJs est un framework de React flexible qui permet de gérer le côté front-end et le côté back-end d'une application (aussi appelé ['Server-side rendering'](https://www.heavy.ai/technical-glossary/server-side-rendering))
<br>
La documentation officielle du framework: https://nextjs.org/
<br>
<br>

# **Sujet**

Dans ce répertoire github, on vous a mis à disposition une fonction qui vous permet la connexion à mongoDB (*cf: './lib/index.js'*) et des modèles pour définir votre base de données (*cf: './model'*).

Le but du workshop est à travers la création d'un site de chatting, vous puissiez apprendre comment marche le système de [routes](https://nextjs.org/docs/routing/introduction) et de création de requêtes [API](https://nextjs.org/docs/api-routes/introduction) faites par **NextJs**.

# Etape 1:

Après avoir lu la documentation sur les routes de NextJs, vous devez créer une page à l'url "http://localhost:{PORT}/login". Et à l'intérieur de celle-ci, vous aurez deux rectangles (appelé 'container') contenant chacun un formulaire, où l'un permet l'inscription d'un utilisateur et l'autre la connexion d'un utilisateur.

Durant cette étape, vous devriez chercher comment modéliser sur une page web des composants comme des figures géométrique, des boutons, des champs de texte...

- ## Liaison client vers serveur (Front to Back):
    - Pour créer un utilisateur et vérifier si un utilisateur existe, vous devriez communiquer avec votre base de données. C'est là que rentre en jeu vos requêtes API.
    - On vous a créé au préalable ces requêtes pour que vous puissiez avoir un début de serveur. <br> Dans le dossier ('./pages/api'), se trouvent des fichiers contenant des fonction *handler()* servant à communiquer avec votre base de données MongoDB.

# Etape 2:

Lorsqu'un utilisateur réussit à se connecter, il devra alors se faire rediriger vers une autre page à l'url "http://localhost:{PORT}/home".
<br>
C'est sur cette page que vous pouvez voir les messages écrites par les utilisateurs de votre base de données et pouvoir ajouter un nouveau message avec l'utilisateur actuellement connecté.
<br>
Le style de votre site dépend de vous, mais il faut que vous puissiez "scroller" une liste qui vous permet de voir les messages des autres utilisateurs avec leurs **noms**, **dates** et évidemment le **contenu** des messages.

# Etape 3 (bonus pour les braves):

Dans n'importe quel site que vous allez créer, il y a une convention d'avoir un utilisateur administrateur qui puisse modifier les données de la base de données via l'application Web. Cette manipulation est appelée un CRUD (Create, Read, Update, Delete).

C'est à vous de voir comment modifier votre code produit dans les deux premières étapes, et le code que nous vous avons donnés pour le serveur pour créer un "administrateur" et pouvoir modifier directement la donnée dans votre serveur.
<br>
<br>
#

**Nous savons qu'il y a beaucoup de documentations à lire, surtout si cela est pour vous un nouveau framework ou un nouveau domaine que vous appréhendez. Mais n'hésitez pas à échanger entre vous et à nous demander des questions. Nous vous accompagnerons tout au long des deux workshop.**