var timelineButton = $('.timeline__button');
var timelineItem = $('.timeline__item');

timelineButton.on('click', function(e) {
  e.preventDefault();
  timelineButton.removeClass('is-active');
  $(this).addClass('is-active');

  var day = $(this).attr("data-day");
  timelineItem.removeClass('is-active');
  $('[data-day="'+ day +'"]').addClass('is-active');

});