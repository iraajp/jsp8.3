<%@page language="java" isThreadSafe="false" import="java.io.*" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.3 userinfo1.jsp</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    ul {
      line-height: 2;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>8.3 userinfo1.jsp - User Information Display</h2>
<%
  String name, bdate, email;
  int lucky;
  name = request.getParameter("userName");
  bdate = request.getParameter("birthDate");
  email = request.getParameter("emailAddr");
  String luckyStr = request.getParameter("luckyNo");
  lucky = 0;
  if (luckyStr != null && luckyStr.trim().length() > 0) {
    try {
      lucky = Integer.parseInt(luckyStr);
    } catch (NumberFormatException e) {
      lucky = 0;
    }
  }
%>
  <ul>
    <li>Name : <%= (name == null ? "(not provided)" : name) %></li>
    <li>BirthDate : <%= (bdate == null ? "(not provided)" : bdate) %></li>
    <li>EMail : <%= (email == null ? "(not provided)" : email) %></li>
    <li>Lucky : <%= lucky %></li>
  </ul>
  <p><a href="userform.jsp">← Back to form</a> | <a href="index.jsp">Home</a></p>
</body>
</html>
