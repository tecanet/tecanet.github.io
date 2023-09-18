/* Custom JavaScript */

// function getDiffMinutes(date2, date1) {
//   var date2Minutes = date2.getHours() * 60 + date2.getMinutes();
//   var date1Minutes = date1.getHours() * 60 + date1.getMinutes();

//   return date2Minutes - date1Minutes;
// }

$(function(){
  // if($('#flipdown').length > 0) {
  //   const launchDate = new Date("2022-12-23T09:15:00Z");
  //   console.log("launchDate: ", launchDate);
  //   const today = new Date();
  //   const diffTime = Math.abs(launchDate - today);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //   // Unix timestamp (in seconds) to count down to
  //   var daysFromNow = (new Date().getTime() / 1000) + (86400 * (diffDays - 1)) + 1;
  //   var diffMinutes = getDiffMinutes(launchDate, today);

  //   var flipdown = new FlipDown(daysFromNow + diffMinutes * 60, { theme: 'light' })
  //   .start()
  //   .ifEnded(() => {
  //     console.log('The countdown has ended!');
  //   });
  // }

  // enable simplebox
  if($('.gallery').length > 0) {
    $(".gallery .gallery-link").simpleLightbox();
  }

  // lazy load images
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

  $(".language-switch-section a").on("click", function (e) {
    let new_path;

    if (location.pathname.indexOf("en") != -1) {
      new_path = "/";
    } else {
      new_path = "/en";
    }
    window.location.href = new_path;
  });

  // rendering youtube video in the Modal
  var $videoSrc;
  $(".youtube-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#youtubeVideoModal").on("shown.bs.modal", function (e) {
    $("#youtubeVideo").attr("src", $videoSrc);
  });

  // stop playing the youtube video when I close the modal
  $("#youtubeVideoModal").on("hide.bs.modal", function (e) {
    $("#youtubeVideo").replaceWith(
      '<iframe class="embed-responsive-item" src="" id="youtubeVideo" allowscriptaccess="always" allow="autoplay"></iframe>'
    );
  });

  // ------------ rendering facebook video in the modal
  var $videoSrc;
  $(".facebook-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#facebookVideoModal").on("shown.bs.modal", function (e) {
    $("#facebookVideo").attr("src", $videoSrc);
  });

  // stop playing the facebook video when I close the modal
  $("#facebookVideoModal").on("hide.bs.modal", function (e) {
    $("#facebookVideo").replaceWith(
      '<iframe id="facebookVideo" class="embed-responsive-item" src="" style="border:none;overflow:hidden"\
          scrolling = "no" frameborder = "0" allowTransparency = "true" allow = "encrypted-media"\
          allowFullScreen = "true" ></iframe>'
    );
  });
});
