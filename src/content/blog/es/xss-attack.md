---
title: "XSS Attack"
description: "Cross-Site Scripting (XSS) es una de las vulnerabilidades web más comunes donde un atacante inyecta scripts maliciosos en sitios web confiables. Estos scripts se ejecutan en el navegador de la víctima, permitiendo robar cookies de sesión, redirigir usuarios o manipular el contenido de la página. Esta vulnerabilidad ocurre cuando las aplicaciones incluyen datos no confiables sin validación o codificación adecuada."
publishedAt: 2026-01-20
draft: false
lang: "es"
---

Una vulnerabilidad es una debilidad en un sistema de información que puede ser explotada por un actor de amenaza. Esta debilidad puede presentarse por diversas razones, como fallos en la fase de diseño o errores en la lógica de programación.

El proyecto OWASP tiene como objetivo crear conocimiento, técnicas y procesos diseñados para proteger aplicaciones web contra posibles ataques. Este proyecto está compuesto por una serie de subproyectos, todos enfocados en la creación de conocimiento y material de seguridad para aplicaciones web.

Uno de estos subproyectos es el proyecto **OWASP Top 10**, donde se definen y detallan los 10 riesgos más importantes a nivel de aplicaciones web. Esta lista se actualiza con las diferentes técnicas y vulnerabilidades que pueden exponer riesgos de seguridad en aplicaciones web.

Entre las 10 vulnerabilidades más importantes y comunes en aplicaciones web de la versión actualizada de 2021 del [proyecto OWASP Top 10](https://owasp.org/Top10/es/), podemos destacar las siguientes:

## Inyección de Comandos

La inyección de comandos es uno de los ataques más comunes en aplicaciones web en el que el atacante explota una vulnerabilidad en el sistema para ejecutar comandos SQL, NoSQL o LDAP para acceder a datos de manera no autorizada. Esta vulnerabilidad ocurre porque la aplicación no está validando o filtrando la entrada del usuario.

Podemos encontrar más información sobre este tipo de vulnerabilidad en la [documentación de OWASP](https://owasp.org/Top10/es/A03_2021-Injection/).

## XSS (Cross-Site Scripting)

Esta vulnerabilidad permite a un atacante ejecutar código JavaScript arbitrario. La criticidad de estas vulnerabilidades depende del tipo de XSS y la información almacenada en la página web. Generalmente podemos hablar de tres tipos de XSS:

### XSS Persistente o Almacenado

La aplicación almacena datos proporcionados por el usuario sin validación que luego son vistos por otro usuario o un administrador. El código JavaScript que insertamos será almacenado en la base de datos de modo que cada vez que un usuario vea esa página, el código será ejecutado.

### XSS Reflejado

La aplicación utiliza datos sin procesar, suministrados por un usuario y codificados como parte del HTML o JavaScript de salida. El código JavaScript solo se ejecutará cuando el usuario objetivo ejecute una URL específica creada o escrita por el atacante. El atacante manipulará una URL, la cual enviará a su objetivo, y cuando el objetivo ejecute o abra esa URL, el código será ejecutado.

### XSS DOM

La aplicación procesa los datos controlados por el usuario de manera insegura. Un ejemplo de este ataque se puede encontrar en la URL de un sitio web donde escribimos código JavaScript y la web usa un script interno que inserta la URL sin validación en el código HTML devuelto al usuario.

La explotación de este tipo de vulnerabilidad implica ejecutar comandos en el navegador de la víctima para robar sus credenciales, secuestrar sesiones, instalar software malicioso en la computadora de la víctima o redirigirlos a sitios maliciosos.
