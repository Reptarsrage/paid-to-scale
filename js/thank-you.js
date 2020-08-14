(() => {
  // Fill in first name
  var firstName = document.getElementById('first_name');
  var query = window.location.search.substring(1);
  var queryParams = {};
  for (var part of query.split('&')) {
    var pair = part.split('=');
    queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    console.log(`${decodeURIComponent(pair[0])} = ${decodeURIComponent(pair[1])}`);
  }

  // First name
  firstName.textContent = queryParams['invitee_first_name'];
})();
