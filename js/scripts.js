
(function($) {
  "use strict";

//Timer
  $('#clock-b').countdown('2021/12/18').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%D</span>Day%!d'
      + '<span class="h1 font-weight-bold">%H</span> Hr'
      + '<span class="h1 font-weight-bold">%M</span> Min'
      + '<span class="h1 font-weight-bold">%S</span> Sec'));
  });


})(jQuery);
<script>
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
</script>
