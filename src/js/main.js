// TODO
// Global Variable Declarations
var relatedArtists = [];

// Focus on search on page load
$('#searchField').focus();

function getQuery() {
  // Check if search field is not empty
  if($('#searchField').val().length > 0) {
    var query = $('#searchField').val();
    return query;
  } else {
    searchError("Please enter an artist");
    return null;
  }
}

function searchThis(e) {
      e.preventDefault();
      var artist = $(this).data('name');
      subsequentSearch(artist);
}

function firstSearch() {
  var searchedArtist = getQuery();
  // Check for valid query
  if(searchedArtist != null) {
    removeSearchError();
    $('body').addClass('searched');
    $('.artistName').html(searchedArtist);
    getRelatedArtists(searchedArtist);
    revealResults();
  }
}

function subsequentSearch(query) {
  hideResults();
  if(query === undefined) {
    searchedArtist = getQuery();
  } else {
    searchedArtist = query;
    $('#searchField').val(query);
  }
  // Check for valid query
  if(searchedArtist != null) {
    removeSearchError();
    $('.artistName').html(searchedArtist);
    getRelatedArtists(searchedArtist);
    revealResults();
  }
}

// Make Spotify Request on Submit
$("#searchForm").submit(function(event) {
  event.preventDefault();
  if(!$('body').hasClass('searched')) {
    firstSearch();
  } else {
    subsequentSearch();
  }
});