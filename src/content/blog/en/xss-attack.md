---
title: "XSS Attack"
description: "Cross-Site Scripting (XSS) is one of the most common web vulnerabilities where an attacker injects malicious scripts into trusted websites. These scripts execute in the victim's browser, allowing attackers to steal session cookies, redirect users, or manipulate page content. This vulnerability occurs when applications include untrusted data without proper validation or encoding."
publishedAt: 2026-01-20
draft: false
lang: "en"
---

A vulnerability is a weakness in an information system that can be exploited by a threat actor. This weakness can present itself for a variety of reasons, such as failures in the design phase or errors in the programming logic.

The OWASP project aims to create knowledge, techniques, and processes designed to protect web applications against possible attacks. This project is made up of a series of subprojects, all focused on the creation of knowledge and security material for web applications.

One of these subprojects is the **OWASP Top 10** project, where the 10 most important risks at the web application level are defined and detailed. This list is updated with the different techniques and vulnerabilities that can expose security risks in web applications.

Among the 10 most important and common vulnerabilities in web applications of the 2021 updated version of the [OWASP Top 10 project](https://owasp.org/Top10/en/), we can highlight the following:

## Command Injection

Command injection is one of the most common attacks in web applications in which the attacker exploits a vulnerability in the system to execute SQL, NoSQL, or LDAP commands to access data in an unauthorized manner. This vulnerability occurs because the application is not validating or filtering user input.

We can find more information about this kind of vulnerability in the [OWASP documentation](https://owasp.org/Top10/en/A03_2021-Injection).

## XSS (Cross-Site Scripting)

This vulnerability allows an attacker to execute arbitrary JavaScript code. The criticality of these vulnerabilities depends on the type of XSS and the information stored on the web page. We can generally talk about three types of XSS:

### XSS Persistent or Stored

The application stores data provided by the user without validation that is later viewed by another user or an administrator. The JavaScript code we insert will be stored in the database so that every time a user views that page, the code will be executed.

### Reflected XSS

The application uses raw data, supplied by a user and encoded as part of the output HTML or JavaScript. The JavaScript code will only be executed when the target user executes a specific URL created or written by the attacker. The attacker will manipulate a URL, which they will send to their target, and when the target executes or opens that URL, the code will be executed.

### XSS DOM

The application processes the data controlled by the user in an insecure way. An example of this attack can be found in the URL of a website where we write JavaScript code and the web uses an internal script that inserts the URL without validation into the HTML code returned to the user.

The exploitation of this type of vulnerability involves executing commands in the victim's browser to steal their credentials, hijack sessions, install malicious software on the victim's computer, or redirect them to malicious sites.
