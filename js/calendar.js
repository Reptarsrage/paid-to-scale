(() => {
  // Generate Calendly url based on query params
  const calendly = document.getElementById('calendly-widget');
  if (calendly) {
    calendly.dataset.url = buildUrl();
  }
})();

function buildUrl() {
  let baseUrl = 'https://calendly.com/paidtoscale/intro?t=0';

  const query = window.location.search.substring(1);
  const queryParams = {};
  for (const part of query.split('&')) {
    const pair = part.split('=');
    queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  // First name
  if ('first_name' in queryParams) {
    baseUrl += '&first_name=' + encodeURIComponent(queryParams['first_name']);
  }

  // Last name
  if ('last_name' in queryParams) {
    baseUrl += '&last_name=' + encodeURIComponent(queryParams['last_name']);
  }

  // Email
  if ('email' in queryParams) {
    baseUrl += '&email=' + encodeURIComponent(queryParams['email']);
  }

  // Phone
  if ('phone' in queryParams) {
    // Add country code
    let phoneNumber = queryParams['phone'].replace(/[^\d]/g, '');
    if (phoneNumber.length === 10) {
      phoneNumber = '1' + phoneNumber;
    }

    baseUrl += '&a1=' + encodeURIComponent(phoneNumber);
  }

  // Comment
  if ('comment' in queryParams) {
    baseUrl += '&a2=' + encodeURIComponent(queryParams['comment']);
  }

  return baseUrl;
}

function showModal() {
  Calendly.initPopupWidget({ url: buildUrl() });
  return false;
}
