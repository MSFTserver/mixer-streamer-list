
function getChannel() {
    var userName = ["siefe","notyouraveragesenpai","jaredfps","haloxcell","tidy","halios00","firebottle","doctorfu","originalgamers"];
    $.each(userName, function(index, value) {

        $.getJSON("https://mixer.com/api/v1/channels/" + value, function(data) {
        	var status = data.online;
        	var game;
        	if (status==true){
        		
				status=true;
        		game=data.type.name;
        	}
        	else{
        		status="offline";
        		game="Offline";
        	}
			
            $.getJSON("https://mixer.com/api/v1/channels/" + value, function(data) {
			var logo = data.user.avatarUrl == null ? "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F" : data.user.avatarUrl
            var link = "http://www.mixer.com/" + value;
            var name = data.user.username == null ? value:data.user.username;

                var html = ("<div class='row content "+status+"'><div class='col-sm-2 col-xs-3 logo'>"+
                	"<img class='logoImage' src=" + logo + "></div><div class='col-sm-8 col-xs-9 links'>"+
                	"<a target='_blank' href=" + link + ">" + name + "</a></div><div class='col-sm-8 col-xs-9 status'>"+game+"</div></div>");
                status=="online"?$('.display').prepend(html):$('.display').append(html);
            });

        });
    });
}


$(document).ready(function() {
    getChannel();

    $('.select>.row>div').click(function(){
   		var checkClass = $(this).attr("class");
   		checkClass.indexOf("status-all")>-1
   		
   			$('.offline').css("display","block");
   			$('.online').css("display","block");
    });

});