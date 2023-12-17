# Proyecto API de Timestamp

Este proyecto es un requisito para obtener la certificación de Back End Development and APIs en Free Code Camp. El objetivo del proyecto es crear una API que genere un timestamp en formato UTC.

# Instrucciones

## Para ejecutar el proyecto, siga los siguientes pasos:

Instale las dependencias ejecutando el siguiente comando:
```
npm install
```

Inicie el servidor ejecutando el siguiente comando:
```
npm start
```

El servidor se iniciará en el puerto 3000. Puede acceder a la API en la siguiente URL:
```
http://localhost:3000/
```

## Uso
Esta aplicación puede recibir una fecha o un número como parámetro en la ruta `/api/:date?` y devolver un objeto JSON con las propiedades unix y utc, que representan la fecha en formato unix (milisegundos desde el 1 de enero de 1970) y UTC (Coordinated Universal Time), respectivamente.

Si el parámetro es una fecha válida, el objeto JSON tendrá la siguiente forma:

```json
{
    "unix":1451001600000,
    "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
}
```


Si el parámetro es un número, se asumirá que es un timestamp unix y se convertirá a una fecha UTC:

```json
{
    "unix":1451001600000,
    "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
}
```


Si el parámetro es inválido o no se proporciona, el objeto JSON tendrá la propiedad error con el valor "Invalid Date" o la fecha y hora actual, respectivamente:

```json
{
    "error": "Invalid Date"
}
```

```json
{
  "unix": 1634805600000,
  "utc": "Sat, 21 Oct 2023 11:00:00 GMT"
}
```