(function($){$.extend({jGFeed:function(url,fnk,num,key){if(url==null){return false;}var gurl="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+url;if(num!=null){gurl+="&num="+num;}if(key!=null){gurl+="&key="+key;}$.getJSON(gurl,function(data){if(typeof fnk=="function"){fnk.call(this,data.responseData.feed);}else{return false;}});}});})(jQuery);