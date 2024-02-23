# 2daw-m12-p2-s4-examples
Aplicació client desenvolupada amb React

## Desplegament

## Dependències

Instal·lem les dependències del projecte amb la següent comanda:

```bash
 cd my_app
 npm install
```

### Entorn local

Variables d'entorn (fitxer `.env`):

```
APP_ENV="development"
APP_DEBUG=true
```

Podem desplegar un servidor de desenvolupament amb la següent comanda:

```bash
 npm run dev
```

### Entorn de producció

Variables d'entorn (fitxer `.env`):

```
APP_ENV="production"
APP_DEBUG=false
```

Podem generar el directori `dist` i desplegar-ho al nostre servidor web amb la següent comanda:

```bash
 npm run build
```