# Practical 8.3: userinfo1.jsp

This program demonstrates JSP request parameters by accepting user input and displaying it (Node.js equivalent).

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open in browser:

```
http://localhost:3005/
```

4. Fill out the form and submit to see your information displayed

## What it does

- Displays a form with fields:
  - User Name
  - Birth Date
  - Email Address
  - Lucky Number
- When submitted, reads the query parameters from the request
- Displays the user information in a formatted list
- Demonstrates `request.getParameter()` concept from JSP

## Direct URL Test

You can also test directly with query parameters:

```
http://localhost:3005/userinfo?userName=John&birthDate=1990-01-01&emailAddr=john@example.com&luckyNo=7
```

## Original JSP Code Reference

```jsp
<%@page language="java" isThreadSafe="false" import="java.io.*" %>
<html>
<body bgcolor="white">
<%
String name, bdate, email;
int lucky;
name = request.getParameter("userName");
bdate = request.getParameter("birthDate");
email = request.getParameter("emailAddr");
lucky = Integer.parseInt(request.getParameter("luckyNo"));
%>
<ul>
<li> Name : <%= name %> </li>
<li> BirthDate : <%= bdate %> </li>
<li> EMail : <%= email %> </li>
<li> Lucky : <%= lucky %> </li>
</ul>
</body>
</html>
```
