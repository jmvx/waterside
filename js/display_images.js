$(document).ready(function() {

  var json_link = "http://localhost:3000/photos"
  var photo_site = "http://localhost:3000"

  var result = $.getJSON( json_link, {
    format: "json"
  })
    .done(function(result) {
      for (i in result) {
        if (result[i].album == "1") {
          photo_title = result[i].title
          
          photo_location = result[i].image.image.resized.url
          photo_url = photo_site + photo_location
          
          thumb_location = result[i].image.image.small_thumb.url
          thumb_url = photo_site + thumb_location
          
          $("div#content").append(" <a href=' " + photo_url + " ' data-lightbox='gallery' data-title=' " + photo_title + " '><img src=' " + thumb_url + "' />")
        }
      }
    })
});