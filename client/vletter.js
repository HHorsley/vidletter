CameraTag.observe("vletter", "published", function(){
  videoUrl = "http:"+CameraTag.cameras.vletter.getVideo().formats.vga.video_url;
  var a = $("<a></a>").text(videoUrl).attr("href", videoUrl);
  var p = $("<p> Share this link: </p>");
  var p2 = $("<p> Please understand that the encoding might take a mintue. </p>");
  $("#message").append(p).append(a).append(p2);
})

