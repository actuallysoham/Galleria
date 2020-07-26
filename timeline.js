var timelineButton = $('.timeline__button');
var timelineItem = $('.timeline__item');

timelineButton.on('click', function(e) {
  e.preventDefault();
  timelineButton.removeClass('is-active');
  $(this).addClass('is-active');
  
//   TweenLite.to($('.timeline__item.is-active'), .3, {
//     left: -1000, 
//     ease: Power1.easeOut,
//     opacity: 0
//   });
  
//   TweenLite.to($('.timeline__item.is-active'), 0, {
//     left: 0
//   });
  
  var day = $(this).attr("data-day");
  timelineItem.removeClass('is-active');
  $('[data-day="'+ day +'"]').addClass('is-active');
  
  // var newItem = $('.timeline__item.is-active');
  // TweenLite.to(newItem, .3, {
  //   delay: .5,
  //   ease: Power1.easeOut,
  //   opacity: 1
  // });
});