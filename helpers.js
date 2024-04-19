const { ENDPOINT } = require("./constants");

const getHTMLText = (title, body) => `<html>
<head>
  <title>${title ?? "Hello from Server"}</title>
</head>
  <body>${body ?? `<form action="${ENDPOINT.MESSAGE}" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form>`}</body>
</html>`;

module.exports = { getHTMLText };