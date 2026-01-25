---
title: "IDOR Attack"
description: "IDOR es una vulnerabilidad web que ocurre cuando una aplicación proporciona acceso a objetos basándose en datos ingresados por el usuario. Los atacantes explotan vulnerabilidades IDOR para obtener acceso no autorizado a datos sensibles o recursos modificando las referencias a objetos. A diferencia de las vulnerabilidades clásicas de control de acceso, donde un atacante suplanta a otro usuario, los ataques IDOR implican cambiar referencias directas a objetos, como archivos, registros de base de datos o URLs, para eludir las verificaciones de autorización."
publishedAt: 2026-01-24
draft: false
lang: "es"
---

## Prevención

Los IDOR ocurren cuando una aplicación falla en dos aspectos. Primero, falla al implementar control de acceso basado en la identidad del usuario. Segundo, falla al aleatorizar los IDs de objetos y en su lugar mantiene referencias a objetos de datos, como archivos o entradas de base de datos, predecibles.

En el primer ejemplo de este capítulo, pudiste ver mensajes pertenecientes al usuario 1233 porque el servidor no verificó la identidad del usuario logueado antes de enviar información privada. El servidor no estaba verificando que tú fueras, de hecho, el usuario 1233. Simplemente devolvió la información que solicitaste.

En este caso, dado que los IDs de usuario son simplemente números, es fácil inferir que también puedes obtener los mensajes del usuario 1232 y del usuario 1231, así:

```
https://example.com/messages?user_id=1232
https://example.com/messages?user_id=1231
```

Por esto la vulnerabilidad se llama referencia directa a objeto insegura. El ID del usuario se usa para referenciar directamente los mensajes privados del usuario en este sitio. Si no están aseguradas por un control de acceso apropiado, estas referencias directas predecibles a objetos exponen los datos ocultos detrás de ellas, permitiendo que cualquiera obtenga la información asociada a la referencia.

Las aplicaciones pueden prevenir IDORs de dos formas. Primero, la aplicación puede verificar la identidad y permisos del usuario antes de otorgar acceso a un recurso. Por ejemplo, la aplicación puede verificar si las cookies de sesión del usuario corresponden al user_id cuyos mensajes el usuario está solicitando.

Segundo, el sitio web puede usar una clave única e impredecible o un identificador hasheado para referenciar los recursos de cada usuario. El hashing se refiere al proceso unidireccional que transforma un valor en otra cadena. Hashear IDs con un algoritmo seguro y una clave secreta hace difícil para los atacantes adivinar las cadenas de ID hasheadas. Si example.com estructurara sus peticiones de la siguiente manera, los atacantes ya no podrían acceder a los mensajes de otros usuarios, ya que no habría forma de que un atacante adivinara un valor de user_key tan largo y aleatorio:

```
https://example.com/messages?user_key=6MT9EalV9F7r9pns0mK1eDAEW
```

Pero este método no es una protección completa contra IDORs. Los atacantes aún pueden filtrar información de usuarios si encuentran una forma de robar estas URLs o user_keys. La mejor manera de protegerse contra IDORs es un control de acceso granular, o una combinación de control de acceso y aleatorización o hashing de IDs.

