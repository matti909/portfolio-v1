---
title: "CSRF Attack"
description: "Los ataques CSRF explotan las sesiones autenticadas de los usuarios para realizar acciones no deseadas. Al engañar a usuarios autenticados para que ejecuten solicitudes maliciosas, los atacantes pueden, por ejemplo, iniciar transferencias de fondos, cambiar configuraciones de cuenta o realizar acciones sin el consentimiento del usuario."
publishedAt: 2026-01-25
draft: false
lang: "es"
---

## ¿Cómo Funciona CSRF?

Para que un ataque CSRF funcione, se deben cumplir las siguientes condiciones:

1. El usuario está autenticado y logueado en la aplicación web y tiene una sesión activa.
2. Existe una acción privilegiada en la aplicación y el usuario tiene permisos para realizarla.
3. Todos los parámetros de la solicitud son predecibles y conocidos por el atacante.

Veamos un ejemplo de una solicitud en un sitio web bancario. Considera esta solicitud para una transferencia de dinero de una cuenta a otra:

```http
POST /transfer.php HTTP/1.1
Host: vulnerablebank.com
Cookie: PHPSESSID=3e5a8b24b7467fd7e4791ab33412aff1
Content-Type: application/x-www-form-urlencoded

to_account=098855455&amount=1000&currency=usd
```

De esta solicitud queda claro que las tres condiciones para un ataque CSRF se cumplen:

1. El usuario está autenticado y tiene un ID de sesión válido.
2. La acción privilegiada es transferir dinero a una cuenta.
3. Todos los parámetros de esta solicitud son predecibles y conocidos por el atacante.

Ahora, consideremos la siguiente solicitud donde las condiciones no se cumplen:

```http
POST /transfer.php HTTP/1.1
Host: securebank.com
Cookie: session=abc123
Content-Type: application/x-www-form-urlencoded

to_account=987654321&amount=1000&password=password@12345
```

En esta solicitud, el usuario se ha logueado en la aplicación bancaria, creando una sesión activa. El usuario tiene permiso para realizar una transferencia de dinero, que es una acción privilegiada.

Sin embargo, esta vez el sitio web bancario requiere que la contraseña del usuario se incluya en cada solicitud de transacción como una capa adicional de seguridad, lo cual no es predecible para un atacante y por lo tanto la tercera condición no se cumple.

## Construyendo el Payload CSRF

Basándonos en esto, podemos construir el siguiente payload CSRF:

```html
<form action="http://vulnerablebank.com/transfer.php" method="POST">
  <input type="hidden" name="to_account" value="123456789" />
  <input type="hidden" name="amount" value="1000" />
  <input type="hidden" name="currency" value="usd" />
  <input type="submit" value="Submit" />
</form>
```

En este ejemplo, el formulario alojado en un sitio web controlado por el atacante tiene la intención de enviar dinero a una cuenta elegida por el atacante. Los formularios están pre-llenados por el atacante, y el tipo se ha ocultado para que la víctima no lo note al hacer clic en el botón de enviar.

Al ejecutar el POC, la transferencia se realiza exitosamente.

