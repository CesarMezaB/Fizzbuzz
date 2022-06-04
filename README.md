# Fizzbuzz
## Requerimientos
- Obtener la lista de explorers que solo están en node.
- Obtener la cantidad de explorers que están en node.
- Obtener la lista de usuarios de github de los explorers que están en node.
- Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene un score que sea divisible entre 3 (revisa cómo hacer esto), deberá tener un campo trick que diga FIZZ, cualquier otro caso el valor de este nuevo campo deberá ser el score mismo. Esta validación nos sirve porque necesitamos aplicarla a la lista de todos los explorers y saber cuáles son FIZZ.
- Después  se necesito una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo trick será BUZZ, cualquier otro caso el valor será el score.
- Pero después se volvio a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo trick debe ser FIZZBUZZ, de lo contrario tendrá el valor del score.

## Estructura de los archivos creados
Rader: `lib/utils/Reader.js`

![image](https://user-images.githubusercontent.com/99105052/171969965-374172fc-8ad4-4f72-8f91-6c2902e6c7cb.png)

ExplorerService : `lib/services/ExplorerService.js`

![image](https://user-images.githubusercontent.com/99105052/171970094-3508ec3f-2fff-478e-9db4-4f173e486737.png)

FizzbuzzService: `lib/services/FizzbuzzService.js`

![image](https://user-images.githubusercontent.com/99105052/171970169-f9dcaf44-e60c-43b0-bed7-caecea956d3a.png)

## Automatización: Pruebas GitHub Actions

 Ruta de archivo para la automatizacion: `.github/workflows/test.yml`
 
 ```
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Install modules
      run: yarn
    - name: Run tests
      run: yarn test
```
El código anterior es requerido para que Github Action automaticea la ejecución de las pruebas cada vez que se hace un PUSH al repositorio que esta en Github y en la sección de Actions se verifica el estado de esta prueba

## Linter

Esta dependecia la utiliza el proyecto para cuidara la legibilidad para el código y su configuración se encuentra en el archivo `.eslintrc.js`

```javascript
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
```
Los comando de eslint están automatizados en el archivo **Package.json**

```json
{
  "name": "fizzbuzz",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",
    "server": "node ./lib/server.js",
    "bot": "node ./lib/bot.js"
  },

```
