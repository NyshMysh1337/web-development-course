window.onload = function () {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }

  function addNewElements() {
    listingElements.push(prompt("Enter an item"));
  }

  function deleteElements(element) {
    var elementPositionListing = listingElements.indexOf(element.textContent);
    if (elementPositionListing > -1) {
      listingElements.splice(elementPositionListing, 1);
    }
    var elementPositionStore = storeElements.indexOf(element.textContent);
    if (elementPositionStore > -1) {
      storeElements.splice(elementPositionStore, 1);
    }
  }

  function updateTotalElements(element, id) {
    if (id === 'listing') {
      element.textContent = `Listing (${listingElements.length}):`;
    }
    else if (id === 'store') {
      element.textContent = `Store (${storeElements.length}):`;
    }
  }

  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    var totalListing = document.querySelector('.listing-quantity');
    var totalStore = document.querySelector('.store-quantity');
    updateTotalElements(totalListing, 'listing');
    updateTotalElements(totalStore, 'store');

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addButtonToStore = document.querySelector('#add-button-to-store');
  addButtonToStore.onclick = function () {
    var selectedOptionStore = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOptionStore.innerText);
    updateUI();
  }

  var addButtonToListing = document.querySelector('#add-button-to-listing');
  addButtonToListing.onclick = function () {
    var selectedOptionListing = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOptionListing.innerText);
    updateUI();
  }

  var addNewElement = document.querySelector('#add-button-new-element');
  addNewElement.onclick = function () {
    addNewElements();
    updateUI();
  }

  var deleteButton = document.querySelector('#delete-button');
  deleteButton.onclick = function () {
    var selectedOption = document.querySelector('.select option:checked');
    if (!selectedOption) {
      console.log('Select an item');
    }
    else {
      deleteElements(selectedOption);
    }
    updateUI();
  };

  updateUI();
};
