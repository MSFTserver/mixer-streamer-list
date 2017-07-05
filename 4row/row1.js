///////////////////////////
//////////////////////////
//start row 1////////////
////////////////////////
/////vvvvvvvvvvv///////
//////////////////////
function getChannel1() {
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
            var link = "http://mixer.com/" + value;
            var name = data.user.username == null ? value:data.user.username;

                var html = ("<div class='row content "+status+"'><div class='col-sm-2 col-xs-3 logo'>"+
                	"<img class='logoImage' src=" + logo + "></div><div class='col-sm-8 col-xs-9 links'>"+
                	"<a target='_blank' href=" + link + ">" + name + "</a></div><div class='col-sm-8 col-xs-9 status'>"+game+"</div></div>");
                status=="online"?$('.display1').prepend(html):$('.display1').append(html);
            });

        });
    });
}


$(document).ready(function() {
    getChannel1();

    $('.select>.row>div').click(function(){
   		var checkClass = $(this).attr("class");
   		checkClass.indexOf("status-all")>-1
   		
   			$('.offline').css("display1","block");
   			$('.online').css("display1","block");
    });

});
///////////////////////////
//////////////////////////
//start row 2////////////
////////////////////////
/////vvvvvvvvvvv///////
//////////////////////

function getChannel2() {
    var userName = ["corton","geekoholic","stoneterror","fijoli","styles","mrpaden","bulldogmw","scufii","asikaa"];
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
            var link = "http://mixer.com/" + value;
            var name = data.user.username == null ? value:data.user.username;

                var html = ("<div class='row content "+status+"'><div class='col-sm-2 col-xs-3 logo'>"+
                	"<img class='logoImage' src=" + logo + "></div><div class='col-sm-8 col-xs-9 links'>"+
                	"<a target='_blank' href=" + link + ">" + name + "</a></div><div class='col-sm-8 col-xs-9 status'>"+game+"</div></div>");
                status=="online"?$('.display2').prepend(html):$('.display2').append(html);
            });

        });
    });
}


$(document).ready(function() {
    getChannel2();

    $('.select>.row>div').click(function(){
   		var checkClass = $(this).attr("class");
   		checkClass.indexOf("status-all")>-1
   		
   			$('.offline').css("display1","block");
   			$('.online').css("display1","block");
    });

});

///////////////////////////
//////////////////////////
//start row 3////////////
////////////////////////
/////vvvvvvvvvvv///////
//////////////////////
function getChannel3() {
    var userName = ["swordofpoke","electricangel","game_speakr","pigeonman","nightsky","angie","msftserver","ghostfromtexas","phone_microwave"];
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
            var link = "http://mixer.com/" + value;
            var name = data.user.username == null ? value:data.user.username;

                var html = ("<div class='row content "+status+"'><div class='col-sm-2 col-xs-3 logo'>"+
                	"<img class='logoImage' src=" + logo + "></div><div class='col-sm-8 col-xs-9 links'>"+
                	"<a target='_blank' href=" + link + ">" + name + "</a></div><div class='col-sm-8 col-xs-9 status'>"+game+"</div></div>");
                status=="online"?$('.display3').prepend(html):$('.display3').append(html);
            });

        });
    });
}


$(document).ready(function() {
    getChannel3();

    $('.select>.row>div').click(function(){
   		var checkClass = $(this).attr("class");
   		checkClass.indexOf("status-all")>-1
   		
   			$('.offline').css("display1","block");
   			$('.online').css("display1","block");
    });

});






///////////////////////////
//////////////////////////
//start row 4////////////
////////////////////////
/////vvvvvvvvvvv///////
//////////////////////
function getChannel4() {
    var userName = ["tlovetech","skuggi","pan1x","tecmyit","mrkelso","charmingcharliee","supa","immortaljedi","tothinator"];
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
            var link = "http://mixer.com/" + value;
            var name = data.user.username == null ? value:data.user.username;

                var html = ("<div class='row content "+status+"'><div class='col-sm-2 col-xs-3 logo'>"+
                	"<img class='logoImage' src=" + logo + "></div><div class='col-sm-8 col-xs-9 links'>"+
                	"<a target='_blank' href=" + link + ">" + name + "</a></div><div class='col-sm-8 col-xs-9 status'>"+game+"</div></div>");
                status=="online"?$('.display4').prepend(html):$('.display4').append(html);
            });

        });
    });
}


$(document).ready(function() {
    getChannel4();

    $('.select>.row>div').click(function(){
   		var checkClass = $(this).attr("class");
   		checkClass.indexOf("status-all")>-1
   		
   			$('.offline').css("display1","block");
   			$('.online').css("display1","block");
    });

});