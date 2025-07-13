
# Servidor Express NodeJS

Consiste en una implementación API REST con comunicación con base de datos Firestore. Permite la autenticación y registro de usuarios, haciendo uso de JWT.


## Realizar deploy

```bash
  npm run start
```

Al no poseer seeders, crear cuenta firebase e iniciar un nuevo proyecto firestore para obtener credenciales para el .env

```bash
APIKEY="credencial"
AUTHDOMAIN="credencial"
PROJECTID="credencial"
STORAGEBUCKET="credencial"
MESSAGINGSENDERID="credencial"
APPID="credencial"

JWT_SECRET="clave"
```

## Colecciones

La configuración del id en automático.

- users -> name|string;mail|string;password|string
- products -> name|string; description|string;category|string;stock|number;price|number


## Rutas

| Autorización    |            ...             |
| ------------    |          -------           |
| /auth/login     | autentica usuarios
| /auth/register  | crea nuevo usuario en la db

| Productos             |            ...             |
| ------------          |          -------           |
| /api/products/all-GET     | obtiene todos los productos
| /api/products/new-GET     | crea nuevo usuario en la db|
| /api/products/:id-DELETE| eliminar producto con determinado id|
| /api/products/:id-GET | obtener producto por id |


## Demo

https://talentotech-node-js-s2yj.vercel.app/