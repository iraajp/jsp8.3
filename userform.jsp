<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>8.3 User Info Form</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    input {
      margin-top: 5px;
      padding: 8px;
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      margin-top: 15px;
      padding: 10px 25px;
      background-color: #007acc;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #005a9e;
    }
  </style>
</head>
<body>
  <h2>8.3 userinfo1.jsp - User Information Form</h2>
  <form action="userinfo1.jsp" method="GET">
    <label>
      User Name:
      <input type="text" name="userName" required />
    </label>
    
    <label>
      Birth Date:
      <input type="date" name="birthDate" required />
    </label>
    
    <label>
      Email Address:
      <input type="email" name="emailAddr" required />
    </label>
    
    <label>
      Lucky Number:
      <input type="number" name="luckyNo" required />
    </label>
    
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
  
  <p><a href="index.jsp">← Back to index</a></p>
</body>
</html>
