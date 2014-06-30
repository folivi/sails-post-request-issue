var graph = require('fbgraph');
require('date-utils');

module.exports = {
    
  index: function(req, res){
	Event.find({creator: req.user.uid}).done(function(err, events){
		res.view({
			events: events
  		})
	});
  },
  events: function(req, res){
  	graph.setAccessToken(req.user.token);		
		query = "SELECT eid, name, creator, description, pic, pic_small, pic_square, pic_big, pic_cover, start_time, all_members_count, attending_count, unsure_count, end_time FROM event WHERE creator = " + req.user.uid;
		graph.fql(query, function(err, events){							
			res.view({
				events: events			
			})														
		})
  },
  add_event:function(req, res){
  	res.send(200)
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to DashboardController)
   */
  _config: {}

  
};
