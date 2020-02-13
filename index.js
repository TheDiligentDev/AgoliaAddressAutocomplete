(function() {
    var placesAutocomplete = places({
      appId: 'YOUR_AGOLIA_APP_ID',
      apiKey: 'YOUR_AGOLIA_SEARCH_API_KEY',
      container: document.querySelector('#address'),
      templates: {
        value: function(suggestion) {
          return suggestion.name;
        }
      }
    }).configure({
      type: 'address'
    });
    placesAutocomplete.on('change', function resultSelected(e) {
      document.querySelector('#state').value = e.suggestion.administrative || '';
      document.querySelector('#city').value = e.suggestion.city || '';
      document.querySelector('#zip').value = e.suggestion.postcode || '';
    });
  })();