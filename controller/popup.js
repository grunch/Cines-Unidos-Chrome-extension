function getMovies(){
  switch (localStorage["ciudad"]) { 
     	case "bqto": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS910.xml";
        	 break;
     	case "ccs": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS954.xml";
        	 break;
     	case "coro": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS914.xml";
        	 break;
     	case "mcbo": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS900.xml";
        	 break;
     	case "mcy": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS928.xml";
        	 break;
     	case "mgta": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS2035.xml";
        	 break;
     	case "mrin": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS942.xml";
        	 break;
     	case "plc": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS938.xml";
        	 break;
     	case "pord": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS14263.xml";
        	 break;
     	case "sc": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS17216.xml";
        	 break;
     	case "val": 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS920.xml";
        	 break;
     	default: 
        	 var url = "http://www1.cinesunidos.com/RSS/RSS928.xml";
        	 break;
  }

  $.jGFeed(url,
    function(feeds){
      if(!feeds){
        return false;
      }
      $('h1').text(feeds.title);
      $('h2').text(feeds.description + " - " +feeds.entries[0].title.substring(1, 10));
      for(var i=0; i<feeds.entries.length; i++){
        var entry = feeds.entries[i];
        var divRR = $('<div class="readResult"></div>');
        var divWrapper = $('<div class="wrapper"></div>');
        var divX = $('<div></div>');
        var divY = $('<div style="clear:both;"></div>');
        var divRH = $('<div class="report-header"></div>');
        var divTitle = $('<div class="title"></div>');
        var spanDet = $('<span class="reported"></span>');
        var aTitle = $('<a target="_blank" class="title"></a>');
        var textTitle = entry.title.substring(11, entry.title.lenght);
        aTitle.attr("href", entry.link);
        aTitle.append(textTitle);
        divTitle.append(aTitle);
        spanDet.append(entry.content);
        divRH.append(divTitle);
        divRH.append(spanDet);
        divX.append(divRH);
        divX.append(divY);
        divWrapper.append(divX);
        $('#cargando').hide();
        divWrapper.appendTo('#content');
        $('#container').show();
      }
  }, 20);
}

function opciones(){
  chrome.tabs.create({url:"view/options.html"});
}
