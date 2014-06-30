  $(document).ready(function(){
  var this_csrf;
  $.get('/csrfToken', function(csrf){ this_csrf = csrf._csrf });
  $('.add-to-dashboard').on('click', function(){
    var event_id = $(this).data('event-id');
    $.ajax({
      url: '/dashboard/add_event',
      data: {event: event_id, _csrf: this_csrf},
      type: 'POST',
      crossDomain:false,      
    })
    .done(function(){
      $('tr').find("[data-event-id='" + event_id+"']").hide(1000);
      $("#panel").append("<div class='alert alert-success'>Event added to dashboard</div>").show("fast" , function(){
        $('.alert-success').slideUp(3000)
      });     
    })
    .fail(function(){ alert('failed')})   
  })
  
})