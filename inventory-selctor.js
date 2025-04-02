<script>
(function() {
  // console.log("IS INVENTORY SEARCH DEBUG MODE");

  // Mapping of URL parameter names to their fixed dimension numbers.
  // Each key is a filter parameter, and its value is the corresponding dimension.
  const paramToDimension = {
    "body": 6,            // e.g., sedan, SUV
    "make": 7,            // e.g., Toyota, Ford
    "serie": 8,           // model
    "fuel": 9,            // fuel type (gas, diesel, electric, hybrid)
    "drive": 10,          // drive type (4x4, front, rear)
    "min_price": 11,      // minimum price filter
    "max_price": 12,      // maximum price filter
    "exterior_color": 13  // exterior color
  };

  // Parse the current URL parameters.
  const urlParams = new URLSearchParams(window.location.search);
  const currentQuery = window.location.search;
  // console.log("Current Query String:", currentQuery);

  // Retrieve the previous query string from session storage (or default to an empty string if not found).
  const lastQuery = sessionStorage.getItem('lastUrlQuery') || '';
  // console.log("Last Query String:", lastQuery);

  // Create a URLSearchParams object for the previous query for easier parameter comparison.
  const lastParams = new URLSearchParams(lastQuery);

  // Initialize an object to store new or changed parameters that will be tracked.
  let eventData = {};

  // Loop through each parameter in our mapping and compare current and previous values.
  for (const [param, dimension] of Object.entries(paramToDimension)) {
    const currentValue = urlParams.get(param);
    const previousValue = lastParams.get(param);

    // console.log(`Parameter: ${param}`);
    // console.log(`  Current Value: ${currentValue}`);
    // console.log(`  Previous Value: ${previousValue}`);

    // If the parameter exists in the current URL and is either new or has changed, add it to eventData.
    if (currentValue && currentValue !== previousValue) {
      eventData[`dimension${dimension}`] = `${param}:${currentValue}`;
      // console.log(`Saving new parameter: ${param} with value "${currentValue}" in dimension${dimension}`);
    }
  }

  // Debug: Log the final eventData object before sending it to analytics.
  // console.log("Final eventData Object:", eventData);

  // Update session storage with the current query string for future comparisons.
  sessionStorage.setItem('lastUrlQuery', currentQuery);
  // console.log("Updated sessionStorage with current query string.");

  // If there are new or changed parameters, send the event to analytics.
  if (Object.keys(eventData).length > 0) {
    // console.log("New or changed parameters detected. Sending event to analytics.");
    _paq.push(['trackEvent', 'OnClick', 'ButtonClick', '_
